FROM node:19-alpine AS builder

WORKDIR /

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
