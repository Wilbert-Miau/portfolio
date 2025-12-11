terraform {
  # This section locks the versions of the plugins to ensure stability
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }

  # (Optional) Store state in S3 instead of locally on your laptop
  # backend "s3" {
  #    bucket = "my-terraform-state-bucket"
  #    key    = "portfolio/terraform.tfstate"
  #    region = "us-east-1"
  # }
}

provider "aws" {
  region = "us-east-1" # CloudFront requires certificates to be in us-east-1
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}
