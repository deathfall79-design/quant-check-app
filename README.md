# Advocate Rajeshkumar L. Yadav

This repository contains the public website for Adv. Rajeshkumar L. Yadav, Advocate & Notary (Government of India), serving clients in Mumbai.

**Live website:** <https://quant-check-app.lovable.app>

## Website content

- Advocate profile, credentials, practice areas, client reviews, and contact details.
- Contact form and Legal Assistant chatbot for consultation inquiries.
- Direct phone, email, and WhatsApp links, plus office location and hours.
- Attorney/local-business structured data and search/social page metadata.

## Advocate details shown on the website

- B.A., LL.B.; enrolled in 2008; registration no. `MAH/1146/2008`.
- Courts practiced: Bombay High Court, Sessions Court, Family Court, Magistrate Court, and DRT/SARFAESI.
- Practice areas: Criminal Law, Negotiable Instruments Act / Section 138, Family Court matters, Banking & Finance / SARFAESI and DRT, Documentation & Registration, Notary Services, and Arbitration / alternate dispute resolution.
- Languages: English, Hindi, and Marathi.
- Office: B-2, Shri Dhara Dham CHS., 90 FT Road, Sakinaka, Mumbai 400072.
- Phone: 9029678910 / 9819345724; email: yrajeshkumar1983@rediffmail.com.
- Office hours: Monday–Saturday, 10:00 AM–6:00 PM.

## Project stack

- TanStack Start v1, React 19, and Vite.
- Tailwind CSS v4 with semantic design tokens in `src/styles.css`.
- Lovable Cloud for storing consultation inquiries in `public.leads`.
- Public images are served from `public/images/` using absolute `/images/...` paths.

## Run locally

```bash
bun install
bun run dev
```

The production build command is `bun run build`.

## Backend note

Website inquiries are submitted to the `leads` table. Historical migration files are retained for continuity with the existing Lovable Cloud project and remixes; older organization and budget schema migrations are not used by the public website.
