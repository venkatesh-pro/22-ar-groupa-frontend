FROM node:19-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /app/build

ENTRYPOINT ["nginx", "-g", "daemon off;"]
