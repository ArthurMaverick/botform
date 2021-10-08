FROM node:16.8-slim as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --silence

COPY . .
RUN npm run build
RUN rm -rf tsconfig.json && rm -rf src -f

CMD ["npm","start"]
