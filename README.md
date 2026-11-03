# Imam Bukhari Grand Hotel — Booking Website

A responsive, trilingual (Uzbek, Russian, English) starter website for Imam Bukhari Grand Hotel.

## Included in this first version

- Responsive hotel landing page
- Uzbek, Russian and English language switcher
- Booking request form (arrival/departure, guest count, room type, name and phone)
- Telegram share hand-off for the prepared request
- Contact number: +998 55 705 01 22

## Run locally

1. Install Node.js (LTS).
2. Clone this repository.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Important: prototype, not live reservations yet

The current form prepares a booking request and opens Telegram's share flow. It does **not** yet check room availability, save reservations, prevent double-booking, or send a notification automatically to the hotel's administrator.

Before accepting real reservations, we must add a PostgreSQL database, room inventory and rate management, server-side transactional availability checks, and a Telegram bot connected to the administrator's chat. The room prices and inventory are intentionally not assumed.

## Environment variables

See `.env.example`. Never commit real Telegram tokens or database passwords. Store production credentials in the hosting provider's secret settings.

## Planned next steps

1. Confirm room categories, quantities, occupancy and current rates.
2. Implement the reservation API and PostgreSQL schema with double-booking protection.
3. Connect Telegram Bot API notifications to the hotel administrator.
4. Add an admin interface to manage rooms, prices and reservations.
5. Deploy and test the full flow before publishing the booking link.
