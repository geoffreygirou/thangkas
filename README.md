[![Netlify Status](https://api.netlify.com/api/v1/badges/a2f5897a-da7e-4f9d-acd2-695cca6b7d12/deploy-status)](https://app.netlify.com/sites/papaya-mermaid-6cc93a/deploys)

# Thangkas

Online tibetan thangkas e-commerce website. AliExpress like.

## Tech

-   Nuxt
-   Pinia
-   Prisma
-   Supabase
-   Stripe
-   Google auth provider
-   Netlify hosting

## Getting Started

```
git clone https://github.com/geoffreygirou/thangkas

cp .env.example .env

npm i

npx prisma generate

npm run dev
```

Setup a Supabase account & Stripe account, then add all of the details in to your .env file.

Once you've connected your application to Supabase. You'll also need to setup the [Google](https://cloud.google.com) auth provider.

https://supabase.com/docs/guides/auth/social-login/auth-google

Now run the command to migrate your database tables and run your seed file.

```
npx prisma migrate dev --name init
npx prisma your_db_name seed
```
