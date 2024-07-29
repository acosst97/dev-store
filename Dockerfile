FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
#Patch :/usr/share/nginx/html
COPY pacKage.json package.json
RUN  npm install 

FROM node:19.alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.23.3 as produccion
EXPOSE 80
COPY --from=builder /app/dist/demo-angular /usr/share/nginx/html 
CMD [ "nginx" ,'-g', 'daemon off;']