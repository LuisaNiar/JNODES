# Usa una imagen base ligera de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala dependencias (omit=dev para producción)
RUN npm install --omit=dev

# Copia el resto del código
COPY . .

# Usa un usuario no root para mayor seguridad
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expone el puerto que usa tu app (ajusta si es necesario)
EXPOSE 8080

# Comando por defecto
CMD ["node", "server.js"]
