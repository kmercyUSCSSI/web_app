FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

# RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]