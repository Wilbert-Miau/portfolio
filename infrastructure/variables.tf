variable "cloudflare_api_token" {
  description = "Cloudflare API Token"
  type        = string
  sensitive   = true # Hides it from logs
}

variable "domain_name" {
  default = "wilbertcastillo.com" 
}
