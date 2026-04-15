# 05 - SEO, Accessibility, and Quality

## Minimum Technical SEO

- Unique `title` and `meta description` per page.
- Single `h1` per page.
- Open Graph metadata for home and article pages.
- Clean URLs for pages and blog posts.
- Sitemap and robots configured in deployment.

## Content SEO

- Primary keyword in title, intro, and at least one subtitle.
- Internal links between service pages and articles.
- Content aligned with transactional/informational intent.

## Accessibility

- WCAG AA minimum contrast compliance.
- Keyboard navigation with visible focus state.
- Proper labels for form fields.
- Alternative text for relevant images.
- Semantic landmarks: `header`, `main`, `nav`, `section`, `footer`.

## Performance

- Optimized images (`webp`/`avif` when possible).
- Lazy loading for below-the-fold content.
- Fonts using `font-display: swap`.
- Avoid heavy dependencies without clear need.

## Code Quality

- Strict TypeScript mode.
- Linting and formatting in CI/local pipeline.
- Tests for spreadsheet parsing and critical utilities.
- Clear separation between UI, business rules, and data access.
