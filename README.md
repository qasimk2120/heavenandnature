# Heaven & Nature website

Public Astro website for a Pakistan-based perfume brand. This repository intentionally contains only deployable site code and public-ready assets.

## Run locally

```powershell
cmd /c npm.cmd install
cmd /c npm.cmd run dev
```

Use `cmd /c npm.cmd run check` and `cmd /c npm.cmd run build` before each commit.

## Add a real batch

1. Add an owner-approved public product image to `assets\batches\` using a lowercase hyphenated filename.
2. Add an owner-confirmed object to `src\data\batches.ts`.
3. Use an image path such as `/batches/amber-dawn-batch-01.jpg`.
4. Keep `published: false` until the name, description, size, price, stock and order route are all confirmed.
5. Set `published: true` only when the release is ready to be publicly indexed.

## Domain and deployment

Before production, create a local `.env` from `.env.example` and set `SITE_URL` to the final HTTPS origin. For a GitHub Pages project URL, also set `SITE_BASE=/heavenandnature`; omit it for a custom domain. Until then, the build deliberately emits `noindex` and a disallowing `robots.txt` so a test deployment cannot be indexed by accident. Do not add private notes, supplier records, customer data, credentials or unapproved product details to this public repository.

Read `docs\design-principles.md` before visual work and `docs\seo-aeo-geo.md` before publishing a batch.
