# Stage 1 - Create yarn install skeleton layer
FROM node:16-bullseye-slim AS packages

WORKDIR /app
COPY package.json yarn.lock ./

COPY packages packages
# COPY plugins plugins

RUN find packages \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf

# Stage 2 - Install dependencies and build packages
FROM node:14-buster AS build

WORKDIR /app
COPY --from=packages /app .

RUN yarn install --network-timeout 600000 && rm -rf "$(yarn cache dir)"

COPY . .

#RUN yarn tsc
#RUN yarn --cwd packages/backend backstage-cli bundle --build-dependencies

#FROM node:14-buster
# Stage 3 - Build the actual backend image and install production dependencies
FROM node:16-bullseye-slim


WORKDIR /app

ENV NODE_ENV production
# Copy from build stage
COPY --from=build /app/yarn.lock /app/package.json /app/packages/backend/dist/skeleton.tar.gz ./
RUN tar xzf skeleton.tar.gz && rm skeleton.tar.gz
# install sqlite3 dependencies
RUN apt-get update && \
    apt-get install -y libsqlite3-dev python3 cmake g++ && \
    rm -rf /var/lib/apt/lists/* && \
    yarn config set python /usr/bin/python3

RUN yarn install --frozen-lockfile --production --network-timeout 300000 && rm -rf "$(yarn cache dir)"

COPY packages/backend/dist/bundle.tar.gz app-config.yaml ./
RUN tar xzf bundle.tar.gz && rm bundle.tar.gz

#CMD ["node", "packages/backend", "--config", "app-config.yaml"]

CMD ["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.production.yaml"]


#COPY packages/backend/dist/bundle.tar.gz app-config*.yaml/
#COPY --from=build /app/yarn.lock /app/package.json /app/packages/backend/dist/skeleton.tar.gz/
#RUN tar xzf /app/packages/backend/dist/skeleton.tar.gz && rm /app/packages/backend/dist/skeleton.tar.gz
