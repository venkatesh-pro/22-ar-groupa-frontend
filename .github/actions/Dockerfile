FROM node:19-alpine AS builder

WORKDIR src/app

COPY package.json package.json

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /src/app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
