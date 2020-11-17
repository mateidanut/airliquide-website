FROM node:latest

RUN mkdir -p /app
WORKDIR /app
EXPOSE 8000

RUN npm install --global gatsby-cli

COPY package.json /app
COPY package-lock.json /app
COPY . /app

RUN npm install

CMD ["gatsby", "develop", "-H", "0.0.0.0", "-p", "8000"]
