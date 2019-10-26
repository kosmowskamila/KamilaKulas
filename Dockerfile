FROM node:12.13.0

WORKDIR /app
COPY ./package*.json /app/
COPY ./yarn.lock /app/
RUN yarn