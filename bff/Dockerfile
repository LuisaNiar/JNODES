# Use a base image of Node.js
FROM node:18

# Create a working directory
WORKDIR /app

# Copy package.json files from the project root (assuming they’re in the `bff` directory)
COPY bff/package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the `bff` directory
COPY bff/ .

# Expose port 8080
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]