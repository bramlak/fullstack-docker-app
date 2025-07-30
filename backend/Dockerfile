FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Install bash
RUN apk add --no-cache bash

EXPOSE 3000

COPY wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

CMD ["./wait-for-it.sh", "db:3306", "--", "node", "index.js"]