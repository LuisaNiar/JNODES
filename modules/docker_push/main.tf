resource "null_resource" "docker_push" {
  triggers = {
    always_run = timestamp()
  }
}
