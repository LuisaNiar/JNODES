module "push_bff_image" {
  source      = "./modules/docker_push"
  image_name  = "jnodes-bff"
  tag         = "latest"
  docker_user = "luisaniar"
}

module "push_front_image" {
  source      = "./modules/docker_push"
  image_name  = "jnodes-frontend"
  tag         = "latest"
  docker_user = "luisaniar"
}
