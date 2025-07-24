# JNODES – Reto de Automatización de Entorno (DevOps Practicante)

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
│   ├── bff-ci.yml               # Pipeline para construir y subir imagen del BFF
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
│
├── docker-compose.yml           # Orquestación local de contenedores
├── deployments.yaml             # (K8S Opcional) Definición adicional para despliegue
└── README.md
```

---

## 🖥️ Componentes de la Aplicación

### `bff/`

* API Node.js con rutas HTTP básicas.
* Contenerizada con `Dockerfile`.
* Expone servicios para ser consumidos por el frontend.

### `front/`

* Interfaz de usuario desarrollada en React.
* Consume el backend (`bff`).
* También contenerizada para facilitar despliegue.

---

## ⚙️ Contenerización y Ejecución Local

Los servicios `bff` y `front` están contenerizados y orquestados con Docker Compose.

### Ejecutar localmente

```bash
docker compose up --build
```

Este comando construye y ejecuta los contenedores desde la raíz del proyecto.

---

## 🔄 Automatización CI/CD

GitHub Actions automatiza tareas como:

* Validación del código (`terraform validate`, `npm run lint`)
* Construcción y push de imágenes Docker (`bff`)
* Ejecución de `terraform plan` y `terraform apply`

### Workflows incluidos

* `.github/workflows/bff-ci.yml`: Automatiza el build, validación (`npm run lint`) y push de la imagen `bff` a Docker Hub.
* `.github/workflows/terraform.yml`: Ejecuta Terraform desde la raíz del proyecto.

---

## 🧹 Validación de Código (Linting)

El proyecto incluye verificación de estilo y calidad de código para el backend mediante `npm run lint`. Esto ayuda a prevenir errores de sintaxis y mantener estándares de desarrollo consistentes.

Para ejecutarlo manualmente:

```bash
cd bff
npm install
npm run lint
```

> Asegúrate de que `package.json` en `bff/` tenga el script configurado:

```json
"scripts": {
  "lint": "eslint ."
}
```

> ESLint puede configurarse usando `npx eslint --init` en la carpeta del backend.

---

## 🔐 Secrets Requeridos

Configura los siguientes secrets en GitHub:

| Secret            | Descripción                               |
| ----------------- | ----------------------------------------- |
| `TF_API_TOKEN`    | Token de autenticación de Terraform Cloud |
| `DOCKER_USERNAME` | Usuario de Docker Hub                     |
| `DOCKER_PASSWORD` | Contraseña de Docker Hub                  |

---

## ☁️ Infraestructura como Código (Terraform)

Los archivos `main.tf` y `variables.tf` definen los recursos necesarios para desplegar la aplicación. El proyecto incluye un módulo (`modules/docker_push/`) para parametrizar el envío de imágenes Docker.

### Comandos útiles

```bash
terraform init
terraform validate
terraform plan
terraform apply -auto-approve
```

---

## 📌 Conclusión

Este proyecto demuestra una implementación completa de un entorno DevOps moderno. Mediante la contenerización, los pipelines CI/CD, la validación automática y la gestión declarativa de infraestructura, se establece una base sólida para despliegues automatizados y entornos reproducibles.

---

## 👩‍💻 Autora

**Luisa Fernanda Niño Ardila**
Repositorio: [github.com/LuisaNiar/JNODES](https://github.com/LuisaNiar/JNODES)
