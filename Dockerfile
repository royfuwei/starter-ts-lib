ARG NODE_IMAGE=node:22.12-alpine

# FROM base
FROM ${NODE_IMAGE} AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm@9

COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# FROM prod
FROM ${NODE_IMAGE} AS prod

RUN apk update \
  && apk upgrade \
  && apk add --no-cache tzdata \
  && rm -rf /var/cache/apk/*

RUN cp /usr/share/zoneinfo/Asia/Taipei /etc/localtime
RUN echo "Asia/Taipei" >  /etc/timezone

WORKDIR /app
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package.json /app
EXPOSE 3000

CMD [ "node", "dist/main.js" ]