
# ---- Build stage ----
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY my-website/package.json my-website/package-lock.json ./
RUN npm ci --ignore-scripts

COPY my-website/ ./
RUN npm run build

# ---- Serve with NGINX ----
FROM nginx:alpine AS runner

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
