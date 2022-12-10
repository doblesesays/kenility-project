FROM node:16.15.1-alpine

# create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./

RUN npm install

# bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "run","start:dev" ]