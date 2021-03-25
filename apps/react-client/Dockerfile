FROM node:12.21.0-alpine3.10
WORKDIR /app

COPY package.json .
ENV REACT_APP_API_HOST=http://localhost:3001
RUN npm install
COPY . .

CMD ["npm", "run", "start"]