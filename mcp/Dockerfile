FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Production stage
FROM node:20-alpine as production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production --legacy-peer-deps

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/dist/tools/component-metadata.json ./dist/tools/component-metadata.json

# Set user to non-root for better security
USER node

# Expose the port if needed (for HTTP servers)
# EXPOSE 3000

# Command to run the application
CMD ["node", "dist/index.js"]
