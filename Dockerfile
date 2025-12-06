# Multi-stage build: build React frontend, run Node backend
FROM node:20-alpine AS builder
WORKDIR /app

# Install root and frontend dependencies
COPY package*.json ./
COPY frontend/package*.json frontend/
RUN npm ci && npm ci --prefix frontend

# Copy source and build frontend
COPY . .
RUN npm run build --prefix frontend

# Production image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy backend and built frontend assets
COPY --from=builder /app/backend ./backend
COPY --from=builder /app/frontend/build ./frontend/build

# Optional uploads directory (mounted as volume in compose)
RUN mkdir -p /var/data/uploads

ENV PORT=5000
EXPOSE 5000
CMD ["node", "backend/server.js"]
