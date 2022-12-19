FROM node:16 AS build-env

WORKDIR /app
# replace with your projects name
COPY ./im-board/package*.json ./
RUN npm install  && npm audit fix
RUN ls
COPY ./im-board ./


ENV PORT=80
EXPOSE 80


CMD [ "npm", "start" ]