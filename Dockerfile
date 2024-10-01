FROM oven/bun:canary-alpine AS base
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .

FROM base AS dev
EXPOSE 5173

CMD [ "bun", "run", "dev", "--host" ]

FROM base AS build
RUN bun run build

FROM nginx:1.27.1-alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]