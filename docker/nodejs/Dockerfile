FROM node:12.18.2

RUN npm i -g @vue/cli

WORKDIR /var/www/html

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

CMD ["yarn", "run", "serve"]
