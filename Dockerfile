FROM node:20.16-slim

WORKDIR /app
COPY ./package*.json /app/.
RUN npm install --loglevel verbose
CMD ["npm", "run", "dev", "--", "-d", "--logLevel", "info", "--host", "0.0.0.0", "--port", "5173"]