# Google Search setup guide

This site already includes crawl-friendly page metadata and a `public/robots.txt` file that allows
search engines to crawl the site. Complete the steps below after the production website has a final
public URL.

## 1. Finish the business details

Before publishing, replace the sample phone number and email address in
`src/sections/Contact.jsx`. Use exactly the same business name, phone number, service area, and
opening hours everywhere the business appears online.

## 2. Deploy the production site

Deploy the site to the final HTTPS domain. Confirm these URLs open publicly without a login:

- `https://YOUR-DOMAIN/`
- `https://YOUR-DOMAIN/robots.txt`

The homepage must return an HTTP `200` response. Do not block search engines in the hosting
provider's deployment settings.

## 3. Add the canonical URL

Once the final domain is known, add this inside the `<head>` in `index.html`:

```html
<link rel="canonical" href="https://YOUR-DOMAIN/" />
<meta property="og:url" content="https://YOUR-DOMAIN/" />
```

Use the exact preferred URL, including whether the site uses `www`.

## 4. Create the sitemap

Create `public/sitemap.xml` with the final production URL:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://YOUR-DOMAIN/</loc>
  </url>
</urlset>
```

Then add this final line to `public/robots.txt`:

```text
Sitemap: https://YOUR-DOMAIN/sitemap.xml
```

Deploy again and confirm `https://YOUR-DOMAIN/sitemap.xml` opens in a browser.

## 5. Add the site to Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Select **Add property**.
3. Choose **Domain** when DNS access is available. This covers the domain's protocols and
   subdomains. Add Google's TXT verification record in the domain provider's DNS settings.
4. If DNS cannot be edited, choose **URL prefix** and enter the exact HTTPS homepage URL. Complete
   one of the verification methods Google provides.
5. Keep the verification record in place after verification.

## 6. Submit the homepage and sitemap

1. In Search Console, open **URL inspection**.
2. Enter the full homepage URL.
3. Select **Test live URL** and resolve any reported access or rendering problem.
4. Select **Request indexing**.
5. Open **Sitemaps**, enter `sitemap.xml`, and select **Submit**.

Check the **Page indexing** and **Sitemaps** reports periodically. Discovery and indexing can take
time, and submission does not guarantee a particular ranking.

## 7. Add or claim the Google Business Profile

For a local pest-control business, the Business Profile is important for appearing on Google Search
and Maps:

1. Go to [Google Business Profile](https://business.google.com/add).
2. Search for Milpestcon first to avoid creating a duplicate listing.
3. Claim the existing profile if one appears; otherwise add the business.
4. Use the real business name and choose the most accurate pest-control category.
5. If customers are served at their properties rather than at a storefront, configure a service
   area and follow Google's address-visibility rules.
6. Add the final website URL, phone number, hours, services, logo, and genuine business photos.
7. Complete the verification method offered by Google.

## 8. Improve local search visibility over time

- Keep the contact details and hours accurate on the website and Business Profile.
- Add useful, truthful service information for the actual municipalities served.
- Add original photos of the team and completed work when customer privacy allows it.
- Ask real customers for Google reviews without offering incentives.
- Keep the website fast, mobile-friendly, and available over HTTPS.
- Review Search Console for indexing, mobile usability, or security issues.

## Filipino search visibility

The current US/PH switch changes the visitor-facing page in the browser, but both languages use the
same URL. If separate English and Filipino pages should appear independently in search results,
create permanent URLs such as `/en/` and `/fil/`, then add matching canonical and `hreflang` tags.
Do not add alternate-language URLs until those pages actually exist.
