FROM node:18-alpine3.15

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#Install express and body-parser using npm
RUN npm install express && npm install body-parser


# Bundle app source
COPY . .

EXPOSE 3211
CMD [ "node", "app.js" ]

