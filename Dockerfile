FROM node:22.17 as build-stage
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm run build 

FROM nginx:stable-alpine as production-stage
VOLUME /var/log/nginx
COPY --from=build-stage /app/docs/dist /usr/share/nginx/html
