# SEO, AEO and GEO operating rules

## What is implemented

- Static Astro HTML with semantic headings and responsive images.
- Domain-aware canonical tags, Open Graph metadata and XML sitemap generation.
- `Organization` schema now. `Product` schema is generated only for real, published batches with confirmed price and image data.
- Domain-aware `robots.txt` that permits major search and answer-engine crawlers only after the real domain is configured.
- `llms.txt` that identifies the brand while explicitly keeping unconfirmed product data out of scope.

## Before public launch

1. Set `SITE_URL` to the owner-controlled final HTTPS domain.
2. Confirm all contact, pricing, stock, delivery and returns information.
3. Add one original, descriptive image and meaningful alt text per published batch.
4. Publish each real batch in `src/data/batches.ts` and only then set `published: true`.
5. Validate the generated product markup using Google Rich Results Test and submit the sitemap in Search Console.

## Content standard

Write for customers first. Use clear headings, direct factual answers and original product photography. Do not create fake FAQ pages, location pages, reviews, statistics or AI-only copy merely to chase rankings. The site has no verified street address or phone number, so it intentionally does not claim a LocalBusiness entity yet.
