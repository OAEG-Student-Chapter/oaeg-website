This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Env variables
Create a file named `.env.local` in the root of the project
and add the following access tokens.

```dotenv
FB_PAGE_ACCESS_TOKEN=EAANoM*******************************...
```
This app uses the meta GRAPH API.
Only the people with access to the OAEG facebook page can get the access token
from the [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
In short using the graph api explorer,
- Get a short lived user access token.
- Using the short lived user access token get a long lived access token.
- Using the long lived user access token get the page access token from the relevant endpoints.

More info [here](https://developers.facebook.com/docs/pages/access-tokens)

