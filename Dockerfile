FROM oven/bun:canary-alpine AS base
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .

FROM base as dev
EXPOSE 5173

CMD [ "bun", "run", "dev", "--host" ]