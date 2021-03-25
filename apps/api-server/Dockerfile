FROM node:alpine

WORKDIR /app
RUN npm install -g @nestjs/cli
COPY package.json .
RUN npm install
COPY . .

RUN npm run db:seed
CMD ["npm", "run", "start"]