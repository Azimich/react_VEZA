FROM node:lts as dependencies
WORKDIR /veza_front
COPY package.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /veza_front
COPY . .
COPY --from=dependencies /veza_front/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /veza_front
ENV NODE_ENV production

COPY --from=builder /veza_front/public ./public
COPY --from=builder /veza_front/package.json ./package.json
COPY --from=builder /veza_front/.next ./.next
COPY --from=builder /veza_front/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
