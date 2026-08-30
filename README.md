# annasulkko.com — standalone static version

This is a plain HTML/CSS/JS rebuild of the Squarespace portfolio. There is no framework, database, CMS, package manager, or paid website-builder dependency.

## Files

- `index.html` — page content and portfolio
- `styles.css` — responsive layout and styling
- `script.js` — mobile menu
- `assets/` — six locally stored artwork files
- `CNAME` — custom domain for GitHub Pages

## Artwork

All six artwork images are included locally in `assets/`. The site no longer references Squarespace or the Squarespace CDN for artwork. Keep a separate backup of these files.

## Recommended hosting: GitHub Pages

1. Create a GitHub repository, for example `annasulkko-site`.
2. Upload every file in this folder, including the `assets` folder and `CNAME` file.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. In **Custom domain**, enter `annasulkko.com`.
7. In your DNS provider, replace the Squarespace website records with GitHub Pages records.

For an apex domain, GitHub documents these A records:

- `@` → `185.199.108.153`
- `@` → `185.199.109.153`
- `@` → `185.199.110.153`
- `@` → `185.199.111.153`

For `www`, create:

- `www` CNAME → `YOUR_GITHUB_USERNAME.github.io`

Do not change MX records if you use email at this domain.

After DNS is working, enable **Enforce HTTPS** in GitHub Pages settings.

## Before cancelling Squarespace

1. Confirm `https://annasulkko.com` and `https://www.annasulkko.com` both load the new site.
2. Confirm all six art images display correctly.
3. Test on phone and desktop.
4. Keep the domain registration active even if you cancel the Squarespace website subscription.
5. Only then cancel the Squarespace website plan.


## catalog

The MapLibre cat-sighting prototype is included in the `/catalog/` directory.

After uploading the full contents of this package to the root of the
`microwavesrrad.github.io` repository, it will be available at:

- `https://annasulkko.com/catalog/` once the custom domain is active
- `https://microwavesrrad.github.io/catalog/` through the GitHub Pages hostname

The main navigation now includes a `catalog` link.


## Site structure update

The site is now organized around `catalog`:

- `/` — catalog-focused homepage with a live embedded prototype
- `/catalog/` — full standalone catalog app
- `/art/` — the original artwork portfolio
- `/assets/` — artwork files

The main navigation links catalog, art, and contact.


## About section restored

The original personal About section is now retained on the catalog-focused
homepage at `/#about`. The art portfolio remains at `/art/`.


## PMS 309 About styling

The homepage About section now uses the same visual language as catalog:
- PMS 309 (`#003B49`) headings and link accents
- cooler teal body text
- pale teal background wash
- teal rules/borders
- softer editorial spacing and serif headings
