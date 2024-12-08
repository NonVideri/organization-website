FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

FROM node:18-alpine

RUN apk --no-cache add ca-certificates

WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/package*.json ./
RUN pnpm install --production

EXPOSE 3000
CMD ["node", "build"]