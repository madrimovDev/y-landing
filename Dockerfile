FROM node:18-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
# RUN yarn install
RUN yarn cache clean
RUN yarn config delete proxy
RUN yarn config delete https-proxy
RUN yarn config delete registry
RUN yarn install --network-timeout 1000000
# Copy app files
COPY . .
# Expose port
EXPOSE 3001
# Start the app
CMD [ "yarn", "run", "dev" ]
