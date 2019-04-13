FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run db-setup

EXPOSE 3001

CMD [ "npm", "start" ]
