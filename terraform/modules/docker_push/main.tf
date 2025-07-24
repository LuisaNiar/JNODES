resource "null_resource" "docker_push" {
  provisioner "local-exec" {
    command = <<EOT
      docker tag ${var.image_name}:latest ${var.docker_user}/${var.image_name}:${var.tag}
      docker push ${var.docker_user}/${var.image_name}:${var.tag}
    EOT
  }
}
