FROM node:alpine

WORKDIR '/app'
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY package.json .
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

COPY . .
CMD ["npm", "run", "start]
EXPOSE 8080