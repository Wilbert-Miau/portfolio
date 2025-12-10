# --- 1. DATA SOURCES ---
# Get the Zone ID from Cloudflare automatically so we don't have to copy-paste it.
data "cloudflare_zone" "this" {
  name = var.domain_name
}

# --- 2. S3 BUCKET (STORAGE) ---
resource "aws_s3_bucket" "portfolio_bucket" {
  bucket_prefix = "astro-portfolio-"
  force_destroy = true # Allows Terraform to delete the bucket even if it has files
}

# Block ALL public access. Only CloudFront will be allowed in.
resource "aws_s3_bucket_public_access_block" "portfolio_block" {
  bucket = aws_s3_bucket.portfolio_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# --- 3. CLOUDFRONT SETUP ---
# Create the "Secret Handshake" (OAC) between CloudFront and S3
resource "aws_cloudfront_origin_access_control" "default" {
  name                              = "portfolio-oac"
  description                       = "Grant CloudFront access to S3"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# --- 4. SSL CERTIFICATE (ACM) ---
# Request a free certificate from AWS
resource "aws_acm_certificate" "cert" {
  domain_name       = var.domain_name
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# --- 5. CLOUDFLARE AUTOMATION (VALIDATION) ---
# Automatically create the DNS records in Cloudflare to prove you own the domain
resource "cloudflare_record" "acm_validation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id = data.cloudflare_zone.this.id
  name    = each.value.name
  content = each.value.record
  type    = each.value.type
  proxied = false # Must be Grey Cloud (DNS Only) for AWS to see it
  ttl     = 60
}

# Wait for AWS to see the records and say "OK, Certificate Issued"
resource "aws_acm_certificate_validation" "cert_validation" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in cloudflare_record.acm_validation : record.hostname]
}

# --- 6. CLOUDFRONT DISTRIBUTION (CDN) ---
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = aws_s3_bucket.portfolio_bucket.bucket_regional_domain_name
    origin_id                = "S3Origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.default.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = [var.domain_name] # Associate your custom domain

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3Origin"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    # Use the VALIDATED certificate
    acm_certificate_arn      = aws_acm_certificate_validation.cert_validation.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

# --- 7. S3 BUCKET POLICY ---
# Allow the CloudFront Distribution to read files from the bucket
resource "aws_s3_bucket_policy" "allow_cloudfront" {
  bucket = aws_s3_bucket.portfolio_bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipal"
        Effect    = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.portfolio_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.s3_distribution.arn
          }
        }
      }
    ]
  })
}

# --- 8. CLOUDFLARE ROOT RECORD ---
resource "cloudflare_record" "root_domain" {
  zone_id = data.cloudflare_zone.this.id
  name    = "@" 
  content = aws_cloudfront_distribution.s3_distribution.domain_name
  type    = "CNAME"
  proxied = false 
  ttl     = 3600
}