FROM node:19-alpine AS builder

WORKDIR /usr/src/app

COPY package.json yarn.lock

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:alpine

# WORKDIR /usr/share/nginx/html

# RUN rm -rf *

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
