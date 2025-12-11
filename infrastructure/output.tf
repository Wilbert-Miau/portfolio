output "s3_bucket_name" {
  description = "The name of the S3 bucket where the site is stored"
  value       = aws_s3_bucket.portfolio_bucket.id
}

output "cloudfront_distribution_id" {
  description = "The ID of the CloudFront distribution for cache invalidation"
  value       = aws_cloudfront_distribution.s3_distribution.id
}

output "cloudfront_domain_name" {
  description = "The default *.cloudfront.net domain"
  value       = aws_cloudfront_distribution.s3_distribution.domain_name
}

output "website_url" {
  description = "The custom domain URL for the website"
  value       = "https://${var.domain_name}"
}