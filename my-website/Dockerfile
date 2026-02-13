
# ------------------------------------------------------------
# 1) Builder Stage (Linux + Node + npm)
# ------------------------------------------------------------
FROM node:20-bullseye AS builder

WORKDIR /app

# Copy dependency files first (better caching)
COPY my-website/package.json .
COPY my-website/package-lock.json .

# Install dependencies
RUN npm ci

# Copy full project
COPY my-website .

# Build the static website
RUN npm run build


# ------------------------------------------------------------
# 2) Runtime Stage (NGINX)
# ------------------------------------------------------------
FROM nginx:alpine

# Remove default NGINX website
RUN rm -rf /usr/share/nginx/html/*

# Copy built Docusaurus site from builder
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
