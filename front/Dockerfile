# Use Node.js image
FROM node:18-alpine AS builder

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY ./front/package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the front directory
COPY ./front .

# Build the application
RUN npm run build

# Expose port 3000 for external access
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "start"]

