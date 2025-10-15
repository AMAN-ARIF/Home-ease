# HomeEase — MERN Monorepo

Production-ready starter for a MERN stack app with React + Vite + Tailwind on the client and Express + Mongoose on the server.

## Structure

```
homeease/
  client/   # React + Vite + Tailwind
  server/   # Express + Mongoose
```

## Prerequisites

- Node.js 18+ and npm
- MongoDB running locally (or Atlas)

## Setup

### 1) Install dependencies

```bash
# From repo root
cd client && npm install && cd ..
cd server && npm install && cd ..
```

### 2) Environment variables

- Copy `.env.example` to `.env` in both `client/` and `server/` and adjust values.

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

Client `.env`

```
PORT=5173
# Documented for convenience when working full‑stack
MONGO_URI=mongodb://localhost:27017/homeease
```

Server `.env`

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/homeease
```

### 3) Development

Run API:

```bash
cd server
npm run dev
```

Run client:

```bash
cd client
npm run dev
```

- API healthcheck: `GET /api/health` -> `{ status: "ok", service: "homeease-api" }`
- Vite dev server proxies `/api` to `http://localhost:5000` by default; override with `VITE_API_PROXY` in `client/.env`

## Scripts

Client:

- `npm run dev` — start Vite
- `npm run build` — build
- `npm run preview` — preview build
- `npm run lint` — run ESLint
- `npm run format` — run Prettier

Server:

- `npm run dev` — start with Nodemon
- `npm run start` — start server
- `npm run lint` — run ESLint
- `npm run format` — run Prettier

## Notes

- Tailwind v4 is configured via a single `@import "tailwindcss";` in `client/src/index.css`.
- Keep code readable and maintainable; avoid unnecessary complexity and comment only non‑obvious intent.
