FROM node:lts-alpine

RUN npm i -g pnpm

WORKDIR /usr/local/src/app

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "preview", "--host", "0.0.0.0", "--port", "3000"]
