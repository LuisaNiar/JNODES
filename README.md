# JNODES – Reto de Automatización de Entorno 

Este proyecto es un reto de desarrollo, cuyo propósito es desplegar una aplicación web sencilla utilizando herramientas clave de la cultura DevOps: **Docker**, **GitHub Actions** y **Terraform**. A través de este ejercicio se busca demostrar habilidades prácticas en contenerización, integración continua, despliegue automatizado e infraestructura como código.

---

## 🎯 Objetivo del Proyecto

Desarrollar y automatizar el despliegue de una aplicación web compuesta por un backend en Node.js y un frontend en React. El flujo completo considera:

* Contenerización con Docker.
* Orquestación local con Docker Compose.
* Automatización CI/CD con GitHub Actions.
* Despliegue e infraestructura como código con Terraform.

---

## 🧩 Estructura del Proyecto

```
JNODES/
├── .github/workflows/           # Workflows de CI/CD
│   ├── bff-ci.yml               # Pipeline para validar y subir imagen del BFF
│   └── terraform.yml            # Pipeline para ejecutar Terraform
│
├── bff/                         # Backend for Frontend (Node.js)
│   ├── index.js
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── front/                       # Frontend en React
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── package.json
│
├── modules/docker_push/         # Módulo de Terraform para subir imágenes Docker
│   ├── main.tf
│   └── variables.tf             
│
├── main.tf                      # Archivo principal de infraestructura (Terraform)
├── docker-compose.yml           # Orquestación local de contenedores
├── deployments.yaml             # (K8S Opcional) Definición adicional para despliegue
└── README.md

```

---

## 🖥️ Componentes de la Aplicación

### `bff/`

* API en Node.js con rutas HTTP básicas.
* Contenerizada mediante `Dockerfile`.
* Expone servicios consumidos por el frontend.

### `front/`

* Interfaz de usuario en React.
* Consume el backend.
* También contenerizada con `Dockerfile`.

---

## ⚙️ Contenerización y Ejecución Local

Para levantar la aplicación localmente:

```bash
docker compose up --build
```

<img width="492" height="116" alt="image" src="https://github.com/user-attachments/assets/7862a88f-3968-428f-8b04-5ebe2fdf5492" />

Esto construye y levanta ambos servicios (`bff` y `front`) en contenedores conectados.

<img width="998" height="595" alt="image" src="https://github.com/user-attachments/assets/b63cc105-f73f-4c80-bcd5-d9a39d559ec6" />

---

## 🔄 Automatización CI/CD con GitHub Actions

El proyecto incluye dos workflows:

### 🧪 `bff-ci.yml`: Validación y despliegue del backend

* **Job `validate`**:

  * Instala dependencias del backend
  * Ejecuta ESLint para análisis estático del código
  * Continúa incluso si hay advertencias

* **Job `build-and-push`**:

  * Inicia sesión en Docker Hub
  * Construye imagen del backend con Buildx
  * Publica imagen `luisaniar/jnodes-bff:latest` en Docker Hub

> ESLint está configurado para ejecutarse exclusivamente en GitHub Actions.

<img width="1295" height="758" alt="image" src="https://github.com/user-attachments/assets/c3f46f35-e2a7-4f17-8377-014a2c8271c4" />

---
### ⚙️ `terraform.yml`: Plan & Apply de Terraform

Este workflow automatiza la ejecución de Terraform utilizando **Terraform Cloud** como backend remoto.

#### Flujo del pipeline (`.github/workflows/terraform.yml`):

1. **Checkout del repositorio**
   Descarga el código fuente del repositorio para trabajar con él.

2. **Seteo del token para Terraform Cloud**
   Establece la variable de entorno `TF_TOKEN_app_terraform_io` a partir del secret `TF_API_TOKEN` para autenticación automática con Terraform Cloud.

3. **Instalación de Terraform**
   Utiliza `hashicorp/setup-terraform` para instalar la versión 1.5.7.

4. **Inicialización del entorno Terraform**
   Ejecuta `terraform init` para conectarse al backend remoto definido en `main.tf`.

5. **Validación del código Terraform**
   Verifica que la configuración esté bien escrita con `terraform validate`.

6. **Planificación de cambios**
   Muestra el plan de acciones con `terraform plan` para ver qué se aplicará.

7. **Aplicación automática (solo en rama `main`)**
   Ejecuta `terraform apply -auto-approve` para aplicar automáticamente los cambios definidos.

#### Backend remoto en `main.tf`:

```hcl
terraform {
  backend "remote" {
    organization = "jnodes"

    workspaces {
      name = "JNODES"
    }
  }
}
```
* Aplica un módulo llamado `push_bff`, que simula el push de imagen usando `null_resource`.

<img width="1294" height="767" alt="image" src="https://github.com/user-attachments/assets/36d9245a-335d-4ae3-be96-03888ee854df" />

> Este enfoque permite mantener el estado centralizado y compartido en Terraform Cloud, y facilita la colaboración.

---

## ☁️ ¿Qué hace el módulo `docker_push`?

El módulo `modules/docker_push/` es un componente reutilizable que simula el despliegue de una imagen Docker utilizando Terraform. Aunque no ejecuta realmente `docker push`, sí cumple los principios de Infraestructura como Código al:

* Declarar el nombre de la imagen (`image_name`)
* Declarar el usuario Docker Hub (`docker_user`)
* Declarar el tag (`tag`)
* Ejecutar una acción mediante `null_resource` (como placeholder)

**Ejemplo de uso en `main.tf`:**

```hcl
module "push_bff" {
  source      = "./modules/docker_push"
  image_name  = "jnodes-bff"
  docker_user = "luisaniar"
  tag         = "latest"
}
```

Esto permite simular un entorno declarativo, reutilizable y automatizado.

---

## 🔐 Secrets Requeridos

| Secret            | Descripción                                 |
| ----------------- | ------------------------------------------- |
| `TF_API_TOKEN`    | Token de autenticación para Terraform Cloud |
| `DOCKER_USERNAME` | Usuario de Docker Hub                       |
| `DOCKER_PASSWORD` | Contraseña de Docker Hub                    |

---

## 📌 Conclusión

Este proyecto representa una solución práctica y modular basada en los principios de DevOps. Gracias al uso de contenerización, pipelines CI/CD, linters automatizados y Terraform como gestor declarativo, se demuestra un flujo de despliegue robusto y replicable.

---

## 👩‍💻 Autora

**Luisa Fernanda Niño Ardila**
Repositorio: [github.com/LuisaNiar/JNODES](https://github.com/LuisaNiar/JNODES)
