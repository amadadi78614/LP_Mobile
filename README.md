# Lowveld Padel — Player App (PWA)

Mobile-first React player app for Lowveld Padel franchise league.

## Quick start

```bash
npm install
npm run dev
```

Open on your phone or resize the browser to mobile width (max ~480px).

## Demo login

Use any demo email from the login screen, for example:

- `heinrich@example.com` — Sonic Viboras (P1 Elite)
- `duhan@example.com` — Ice Breakers (P2 Intermediate)

## Routes

| Route | Description |
|-------|-------------|
| `/` | Redirect to login or home |
| `/login` | Mock email login |
| `/home` | Player dashboard |
| `/fixtures` | Team + all fixtures |
| `/live` | Live match scores |
| `/standings` | League table |
| `/stats` | Personal stats |
| `/streams` | Match streams |
| `/profile` | Account & logout |

## Build PWA

```bash
npm run build
npm run preview
```

## Supabase (later)

Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env`, then implement `src/services/supabase.js`.
