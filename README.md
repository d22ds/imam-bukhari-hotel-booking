# Imam Bukhari Grand Hotel — Booking System

Multilingual hotel reservation website (Uzbek, Russian, English) with instant booking and Telegram administrator notifications.

## Planned stack
- Next.js + TypeScript
- PostgreSQL database with Prisma
- Server-side reservation validation and transaction-safe room inventory
- Telegram Bot API notifications

## Languages
- `uz` — O‘zbekcha
- `ru` — Русский
- `en` — English

## Setup
1. Copy `.env.example` to `.env` and fill in the values.
2. Install dependencies with `npm install`.
3. Run database migrations with `npx prisma migrate dev`.
4. Start the development server with `npm run dev`.

Never commit real credentials. Configure production secrets in your hosting provider.

> This repository is an initial scaffold. Do not accept live guest reservations until database credentials, room inventory, rates, deployment, and Telegram credentials have been configured and tested.