From node:10 AS builder
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY src .
RUN npm run build

FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start:prod"]
