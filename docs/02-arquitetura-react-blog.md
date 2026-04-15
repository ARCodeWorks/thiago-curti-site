# 02 - React + Blog Architecture

## Recommended Stack

- React + TypeScript
- Vite for build and DX
- React Router for route-based rendering
- Isolated data access layer under `src/services`

## Suggested Folder Organization

```txt
src/
  app/
    router/
    providers/
  pages/
    Home/
    Blog/
    BlogPost/
    Contact/
  features/
    blog/
      components/
      hooks/
      services/
      types/
      utils/
    lead-capture/
      components/
      services/
  components/
    ui/
    layout/
  services/
    content/
  lib/
  styles/
  assets/
```

## Architectural Principles

- Visual components should not fetch data directly.
- Parsing and normalization must live in dedicated service layers.
- Shared types belong in `features/blog/types`.
- Data transformation helpers should be isolated in `utils` and tested.

## Blog Data Flow

1. Read data from local spreadsheet (CSV).
2. Validate required columns and formats.
3. Normalize to internal `BlogPost` type.
4. Provide list/slug data to blog routes.
5. Render with article-level SEO metadata.

## Evolution Strategy

- Phase 1: local spreadsheet as MVP source.
- Phase 2: intermediary API with auth and cache.
- Phase 3: CMS/headless platform or editorial admin panel.
