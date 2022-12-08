FROM node:12.19.0-alpine3.9

# create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./

RUN npm install

# bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "run","start:dev" ]