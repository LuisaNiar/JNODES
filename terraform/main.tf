terraform {
  backend "remote" {
    organization = "jnodes"

    workspaces {
      name = "JNODES"
    }
  }
}

module "push_bff" {
  source      = "./modules/docker_push"
  image_name  = "jnodes-bff"
  docker_user = "luisaniar"
  tag         = "latest"
}
