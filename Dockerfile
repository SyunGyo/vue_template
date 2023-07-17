FROM node:18.16.0
RUN apt-get update & apt-get install -y bash
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install -g npm@9.7.2
# COPY ./ ./
# RUN npm run build
