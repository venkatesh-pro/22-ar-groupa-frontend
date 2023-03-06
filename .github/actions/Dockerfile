FROM node:19-alpine AS builder

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /usr/src/app/package.json /usr/app/
COPY --from=builder /usr/src/app/dist /usr/app/dist

ENTRYPOINT ["nginx", "-g", "daemon off;"]
