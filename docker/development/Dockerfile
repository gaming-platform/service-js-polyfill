FROM node:11.7-alpine

WORKDIR /project

RUN apk add --no-cache \
    bash \
    inotify-tools

COPY /package.json /package-lock.json /project/

RUN cd /project && npm install --verbose

COPY / /project

EXPOSE 80

ENTRYPOINT ["/project/docker/development/entrypoint.sh"]
CMD ["bin/restartOnChange", "npm start"]
