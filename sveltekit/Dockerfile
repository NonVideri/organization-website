FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build

FROM node:18-alpine

RUN apk --no-cache add ca-certificates

WORKDIR /app
COPY --from=builder /app/.svelte-kit ./build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --production --ignore-scripts

EXPOSE 3000
CMD ["node", "build"]