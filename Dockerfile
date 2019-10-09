FROM nodesource/jessie:6.3.0

RUN apt-get update && apt-get install -y build-essential git nodejs
RUN npm install -g grunt-cli

ADD package.json package.json
RUN npm install

ADD . .
ENTRYPOINT ["grunt","dev"]
EXPOSE 3000
