JNODES – Reto de Automatización de Entorno (DevOps Practicante)
Este proyecto forma parte del reto de automatización DevOps, cuyo objetivo es desplegar una aplicación web sencilla utilizando Docker, GitHub Actions y Terraform como herramientas principales.

Aplicación
Se trata de una aplicación construida con Node.js que expone rutas HTTP básicas. Su propósito es servir como base funcional para la contenerización y el despliegue automatizado.

Estructura del proyecto
bff/: Backend for Frontend desarrollado en Node.js

front/: Frontend desarrollado en React

modules/docker_push/: Módulo de Terraform para realizar el push de imágenes Docker

.github/workflows/: Workflows de CI/CD configurados para GitHub Actions

docker-compose.yml: Define los servicios y la red de Docker

main.tf y variables.tf: Definición de infraestructura como código con Terraform

Contenerización
Tanto el backend (bff) como el frontend (front) están contenerizados mediante archivos Dockerfile. Se siguen buenas prácticas de construcción para imágenes livianas y reutilizables.

Ejecución local
Para ejecutar la aplicación localmente, se debe construir y levantar con Docker Compose desde la raíz del proyecto, lo que levantará tanto el frontend como el backend. También es posible construir y ejecutar cada contenedor por separado, navegando a las carpetas correspondientes.

Automatización CI/CD
El pipeline ubicado en .github/workflows/ automatiza las siguientes tareas:

Validación del código (por ejemplo, terraform validate, npm run lint)

Construcción de imágenes Docker para bff y front

Push automático de las imágenes a Docker Hub usando secrets

Ejecución de terraform plan y terraform apply mediante GitHub Actions

Gestión de secretos
Los secrets utilizados se definen en la sección de GitHub Secrets del repositorio:

TF_API_TOKEN: Token de acceso para Terraform Cloud

DOCKER_USERNAME: Usuario de Docker Hub

DOCKER_PASSWORD: Contraseña de Docker Hub

Infraestructura como código
Se utiliza Terraform para definir la infraestructura del proyecto, con un módulo personalizado (modules/docker_push/) que permite parametrizar el nombre, tag y repositorio de las imágenes Docker.

Evidencias
Puedes incluir evidencias en una carpeta assets/ dentro del repositorio y referenciarlas desde aquí. Por ejemplo:

Captura del contenedor ejecutándose correctamente

Logs del pipeline exitoso

Ejemplo de inclusión de imagen:

![Contenedor ejecutándose](assets/contenedor-local.png)

Requisitos cumplidos
Requisito	Estado
Aplicación con al menos 3 rutas HTTP	Cumplido
Dockerfile funcional y documentado	Cumplido
README claro con instrucciones	Cumplido
Pipeline de GitHub Actions configurado	Cumplido
Push automatizado a Docker Hub	Cumplido
Terraform con módulo parametrizable	Cumplido
Uso de secrets en el pipeline	Cumplido

Extras implementados
Uso de módulo docker_push con variables dinámicas

Separación de etapas en los workflows de GitHub Actions

Uso de secrets para autenticación segura

Autor
Luisa Fernanda Niño Ardila
