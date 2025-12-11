variable "cloudflare_api_token" {
  description = "Your Cloudflare API Token (Keep this secret!)"
  type        = string
  sensitive   = true # Hides it from logs
}

variable "domain_name" {
  default = "wilbertcastillo.com" 
}
