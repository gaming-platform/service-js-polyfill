FROM node:11.7-alpine

WORKDIR /project

COPY /package.json /package-lock.json /project/

RUN cd /project && npm install --verbose --only=production

COPY /src /project/src

EXPOSE 80

CMD ["npm", "start"]
