FROM node:current-alpine3.20

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli

COPY . .

CMD [ "npm", "run", "start:dev" ]