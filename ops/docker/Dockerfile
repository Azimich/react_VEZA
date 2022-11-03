ARG  WORKDIR="/app"
ARG  REPODIR="/repo"

# Install dependencies only when needed
FROM node:16-alpine AS deps
ARG WORKDIR
ARG REPODIR

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat git
WORKDIR ${WORKDIR}

COPY  .  ${REPODIR}/
RUN cp ${REPODIR}/package.json ${WORKDIR}/

RUN npm i --force

# Development mode
FROM node:16-alpine AS dev

ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_SITE
ARG NEXT_PUBLIC_GOOGLE_API_KEY
ARG NEXT_PUBLIC_MSNT_ENV
ARG NEXT_PUBLIC_REVALIDATE
ARG NEXT_PUBLIC_NO_INDEX

ENV NEXT_PUBLIC_SM="1024"
ENV NEXT_PUBLIC_MD="1280"
ENV NEXT_PUBLIC_LG="1366"
ENV NEXT_PUBLIC_XL="1600"
ENV NEXT_PUBLIC_IMAGE_NO_FOTO="/images/nofoto.gif"
ENV NEXT_PUBLIC_DEFAULT_LOCAL="en_US"

WORKDIR /app

COPY --from=deps /repo /app
COPY --from=deps /app/node_modules /app/node_modules

CMD ["yarn", "dev"]

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
ARG WORKDIR
ARG REPODIR

ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_SITE
ARG NEXT_PUBLIC_GOOGLE_API_KEY
ARG NEXT_PUBLIC_MSNT_ENV
ARG NEXT_PUBLIC_REVALIDATE
ARG NEXT_PUBLIC_NO_INDEX

ENV NEXT_PUBLIC_SM="1024"
ENV NEXT_PUBLIC_MD="1280"
ENV NEXT_PUBLIC_LG="1366"
ENV NEXT_PUBLIC_XL="1600"
ENV NEXT_PUBLIC_IMAGE_NO_FOTO="/images/nofoto.gif"
ENV NEXT_PUBLIC_DEFAULT_LOCAL="en_US"

WORKDIR ${WORKDIR}

COPY --from=deps ${REPODIR} ${WORKDIR}
COPY --from=deps /app/node_modules /app/node_modules

RUN npm run build
# && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
ARG WORKDIR
ARG NODE_ENVIRMENT

WORKDIR ${WORKDIR}

ENV NODE_ENV ${NODE_ENVIRMENT:-production}

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder ${WORKDIR}/next*.config.js ${WORKDIR}/
COPY --from=builder ${WORKDIR}/public ${WORKDIR}/public
COPY --from=builder --chown=nextjs:nodejs ${WORKDIR}/.next ${WORKDIR}/.next
COPY --from=builder ${WORKDIR}/node_modules ${WORKDIR}/node_modules
COPY --from=builder ${WORKDIR}/package.json ${WORKDIR}/package.json

USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start-log"]
