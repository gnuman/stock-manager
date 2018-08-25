FROM node:9
RUN mkdir /server
WORKDIR /server/

COPY package*.json   /server/

RUN yarn
COPY . .
RUN yarn run build-dev


CMD [ "yarn", "watch" ]
