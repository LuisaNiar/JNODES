variable "image_name" {
  description = "Nombre de la imagen local sin usuario"
  type        = string
}

variable "tag" {
  description = "Tag de la imagen"
  type        = string
  default     = "latest"
}

variable "docker_user" {
  description = "Usuario de Docker Hub"
  type        = string
}
