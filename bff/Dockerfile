# Use a base image of Node.js
FROM node:18-alpine

# Create a working directory
WORKDIR /app

# Copy package.json files from the project root (`bff` directory)
COPY bff/package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy all files from the `bff` directory
COPY . .

# Usa un usuario no root para mayor seguridad
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose port 8080
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]