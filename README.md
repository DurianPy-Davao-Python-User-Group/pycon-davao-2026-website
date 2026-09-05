# PyCon Davao 2026 Website

Welcome to the official repository for the PyCon Davao 2026 website! This project is built using [Next.js](https://nextjs.org/).

## Getting Started

First, install the dependencies (if you haven't already):

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx` (or `app/page.tsx`). The page auto-updates as you edit the file.

### Ticket registration links

Add the three ticket registration destinations to `.env.local` when developing locally, and configure the same variables in the production environment:

```env
KODIGO_REGISTRATION_URL=https://example.com/register/kodigo
CODER_KASOSYO_REGISTRATION_URL=https://example.com/register/coder-kasosyo
KUMPANYA_REGISTRATION_URL=https://example.com/register/kumpanya
```

Coder and Kasosyo intentionally share one registration link.

## Contributing

We welcome contributions from the community! To ensure a smooth collaboration process and to maintain code quality, please see our [Development Workflow](CONTRIBUTING.md) to understand how to pick up issues, create branches, and submit Pull Requests.

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
