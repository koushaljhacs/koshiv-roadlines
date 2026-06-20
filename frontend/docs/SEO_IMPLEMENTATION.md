# SEO Implementation for Koshiv Roadlines

## What SEO Files Were Added
- `frontend/public/robots.txt`
- `frontend/public/sitemap.xml`
- `frontend/public/site.webmanifest`
- `frontend/public/favicon.svg`
- `frontend/src/config/seo.config.ts`
- `frontend/index.html` meta and structured data

## How sitemap.xml Works
- The sitemap includes only the homepage URL: `https://koshivroadlines.in/`.
- It uses the current date as `lastmod`.
- Search engines use the sitemap to discover the homepage and understand site structure.

## How robots.txt Works
- The robots.txt file allows all user agents to crawl the site.
- It includes a link to the sitemap at `https://koshivroadlines.in/sitemap.xml`.
- This helps search engines find the sitemap and index the site correctly.

## What Metadata Was Added
- `lang="en-IN"` on the homepage HTML.
- Page title: `Koshiv Roadlines | Bus Service, Truck Service & Road Transport`.
- Meta description describing bus service, truck service, contract transport, and route-based road transport inquiry support.
- Canonical URL set to `https://koshivroadlines.in/`.
- Robots meta tag set to `index, follow`.
- Theme color set to a dark navy transport brand color.
- Open Graph tags for type, title, description, URL, site name, and locale.
- Twitter card type set to `summary`.

## What Structured Data Was Added
- JSON-LD for `Organization` and `WebSite`.
- Honest service types included: Bus service, Truck service, Contract transport, Road transport inquiry.
- Founder set as `Koushal`.
- Email included as `contact@koshivroadlines.in`.
- No phone, address, geo coordinates, ratings, reviews, or fleet counts were added.

## What Is Not Added Yet
- No `og:image` because no actual image file was created.
- No future page URLs in the sitemap until pages exist.
- No real phone number or WhatsApp number.
- No backend content or booking forms.
- No Google Search Console verification or Google Business Profile setup.

## Future Tasks After Deployment
- Verify the domain in Google Search Console.
- Submit the sitemap to search engines.
- Use URL inspection to confirm indexing.
- Add a real business address and phone only once finalized.
- Add a Google Business Profile later if eligible.
- Add new pages to sitemap.xml only after actual pages exist.
