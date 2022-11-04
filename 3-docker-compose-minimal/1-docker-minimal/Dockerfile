FROM node:16.14.2-alpine

WORKDIR /docker-node

COPY . .

# We don't really have any dependencies, but this is how you would install them
RUN npm install

# This is the command that will be run when the container starts
CMD ["node", "index.js"]