FROM node:18-alpine as dependencies
WORKDIR /home/app

COPY ./personal-portafolio/public /home/app/personal-portafolio/public
COPY ./personal-portafolio/src /home/app/personal-portafolio/src
COPY ./personal-portafolio/package.json /home/app/personal-portafolio
COPY ./personal-portafolio/package-lock.json /home/app/personal-portafolio
WORKDIR /home/app/personal-portafolio
RUN npm ci

COPY ./send-email/src /home/app/send-email/src
COPY ./send-email/package.json /home/app/send-email
COPY ./send-email/package-lock.json /home/app/send-email
WORKDIR /home/app/send-email
RUN npm ci

COPY run.sh /home/app/
COPY resend.sh /home/app/

# =====================================================================================
FROM node:18-alpine AS builder

ENV NODE_ENV="production"

WORKDIR /home/app

COPY --from=dependencies /home/app/send-email ./resend
#WORKDIR /home/app/resend
#RUN npm install -g typescript

#WORKDIR /home/app

COPY --from=dependencies /home/app/personal-portafolio ./react
WORKDIR /home/app/react

RUN npm run build
# =====================================================================================

FROM node:18-alpine AS runner
WORKDIR /home/app

COPY --from=builder /home/app/resend /home/app/resend
WORKDIR /home/app/resend

WORKDIR /home/app
COPY --from=builder /home/app/react/build /home/app/react/build
WORKDIR /home/app/react

RUN npm install -g serve

WORKDIR /home/app
COPY  --from=dependencies /home/app/resend.sh .
COPY  --from=dependencies /home/app/run.sh .

EXPOSE 3000
EXPOSE 5000

ENV RESENDID 're_5ZNqBbhJ_MqmzrwUy1ns3zB5GMYSP2gXd'
ENV PORT 5000

#CMD ["serve", "-s", "build", "-l", "3000"]

CMD ./run.sh