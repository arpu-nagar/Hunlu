FROM node:alpine

WORKDIR /usr/src/api 

COPY package*.json ./

RUN npm install

COPY . .

COPY wait-for-it.sh .

ENTRYPOINT [ "npm", "start" ]