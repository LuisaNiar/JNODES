# 🧩 JNODES – Reto de Automatización de Entorno (DevOps Practicante)

Este proyecto forma parte del reto de automatización DevOps, cuyo objetivo es desplegar una aplicación web sencilla utilizando Docker, GitHub Actions y Terraform como herramientas principales.

---

## 📦 Aplicación

Se trata de una aplicación **Node.js** que expone rutas básicas por HTTP, a modo de ejemplo funcional para contenerización y despliegue automatizado.

### 📂 Estructura principal

JNODES/
├── bff/ # Backend for Frontend en Node.js
├── front/ # Frontend en React
├── modules/docker_push/ # Módulo Terraform para Docker push
├── .github/workflows/ # Workflows de CI/CD
├── docker-compose.yml
└── main.tf / variables.tf

## 🐳 Contenerización

Ambos componentes (`bff` y `front`) están contenerizados siguiendo buenas prácticas en sus respectivos `Dockerfile`.

### 🔧 Construcción local

Para ejecutar los contenedores localmente:

```bash
# Desde la raíz del proyecto
docker compose up --build

O individualmente:

cd bff
docker build -t jnodes-bff .
docker run -p 3000:3000 jnodes-bff

⚙️ Automatización CI/CD (GitHub Actions)
El pipeline ubicado en .github/workflows/ automatiza:

✅ Validación de código (terraform validate, npm lint)

✅ Build de imágenes Docker

✅ Push a Docker Hub (usando secrets)

✅ Terraform plan & apply con workflow CLI-driven

🔐 Secrets como TF_API_TOKEN, DOCKER_USERNAME y DOCKER_PASSWORD se definen desde los GitHub Secrets.

🧱 Infraestructura como Código (IaC)
Se utilizó Terraform para crear un módulo reutilizable que automatiza el docker push. Se encuentra en:

modules/docker_push/
├── main.tf
└── variables.tf

Este módulo permite parametrizar nombre, tag y repositorio de la imagen.

📸 Evidencias
🖼️ Contenedor funcionando localmente

📜 Logs del pipeline exitoso

🔁 Reemplaza ruta/a/ por el enlace real a tus imágenes subidas en GitHub.

📋 Requerimientos cumplidos
Requisito	Cumplido ✅
Aplicación con 3 rutas HTTP	✅
Dockerfile funcional y documentado	✅
README claro con instrucciones	✅
Pipeline GitHub Actions	✅
Push automatizado a Docker Hub	✅
Terraform IaC con módulo parametrizable	✅
Uso de secrets en el pipeline	✅

✨ Extras implementados

🧩 Uso de módulo docker_push con variables

🧪 Separación de etapas en GitHub Actions

🔐 Secrets para autenticación segura

🧑‍💻 Autor
Luisa Niar
Repositorio: JNODES


---

Si subes las imágenes a tu repositorio (por ejemplo en una carpeta `assets/`), puedes reemplazar las líneas:

```markdown
![Contenedor ejecutándose](ruta/a/tu-captura-local.png)
por:
![Contenedor ejecutándose](assets/contenedor-local.png)

