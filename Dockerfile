# Use the official MongoDB image as a base
FROM mongo:latest

# Copy initialization scripts (if any) into the Docker image
# Place your custom scripts in a folder named 'init-scripts'
COPY init-scripts /docker-entrypoint-initdb.d/

# Set environment variables for MongoDB
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=example