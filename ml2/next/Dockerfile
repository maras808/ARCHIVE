FROM node:lts-alpine AS base


FROM base AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci

#COPY utils/prisma ./utils/prisma
#RUN npx prisma generate

COPY . .
RUN npm run build


FROM base AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD HOSTNAME="0.0.0.0" node server.js