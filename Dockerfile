#### Stage 1: Build Angular Application
FROM node:12.18.3-alpine3.12 AS build
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install
COPY ./ .
ARG configuration
RUN npm run build -- --configuration=$configuration && npm run stylepurge

#### Stage 2: Serve Angular Application with nginx
FROM nginx:1.19.2-alpine
COPY ./nginx-spa.conf /etc/nginx/conf.d/default.conf
RUN apk add --no-cache bash
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY ./apple-developer-merchantid-domain-association.txt /usr/share/nginx/html/.well-known/