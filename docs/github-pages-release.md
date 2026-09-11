# GitHub Pages release

This public repository contains only the deployable website and owner-approved public assets. Its manual GitHub Pages workflow at `.github/workflows/deploy-pages.yml` builds the repository root and uploads `dist` without committing generated files.

## Before the first release

1. Confirm that the owner has approved the exact public draft, product details and contact path.
2. In GitHub repository Settings, open **Pages** and select **GitHub Actions** as the source.
3. From the **Actions** tab, run **Deploy site to GitHub Pages** manually.
4. Verify the deployed URL: `https://qasimk2120.github.io/heavenandnature/`.

## Custom domain later

When the final domain is purchased, configure it in GitHub Pages and DNS first. Then change the workflow environment values to the custom HTTPS origin and remove `SITE_BASE`. Add the resulting `CNAME` file through the public asset directory before deployment. Re-run SEO, canonical, sitemap and browser checks after the domain cutover.
