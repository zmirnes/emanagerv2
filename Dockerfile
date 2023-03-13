FROM node:current-alpine
WORKDIR /app

COPY package*.json ./

COPY . .

CMD ["npm", "start"]