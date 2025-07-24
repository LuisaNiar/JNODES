terraform {
  backend "remote" {
    organization = "Luisaniar"
    workspaces {
      name = "docker-image-push"
    }
  }
}

module "push_bff" {
  source      = "./modules/docker_push"
  image_name  = "jnodes-bff"
  docker_user = "luisaniar"
  tag         = "latest"
}
