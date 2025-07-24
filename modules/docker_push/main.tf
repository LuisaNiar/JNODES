resource "null_resource" "docker_push" {
  triggers = {
    always_run = timestamp()
  }

  provisioner "local-exec" {
    command = "docker push ${var.docker_user}/${var.image_name}:${var.tag}"
  }
}
