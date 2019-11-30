FROM node:12.2.0-alpine

ARG BACKEND_HOST

EXPOSE 1234

WORKDIR app

COPY * /app/

RUN npm install

CMD npm run start
