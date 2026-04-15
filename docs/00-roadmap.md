# 00 - Project Roadmap

## Delivery Strategy

Implementation is incremental to reduce risk and avoid rework:

- First, consolidate the institutional website and conversion flow.
- Then, activate the blog using a local spreadsheet source.

## Phase 1 - Institutional Website (Current)

### Goal

Publish a professional landing experience validated in content, UX, and conversion.

### Scope

- Hero with clear value proposition.
- Specialties section in strategic priority order.
- Differentials and trust-building blocks.
- FAQ based on real client questions.
- Main WhatsApp CTA.
- Baseline SEO and accessibility coverage.

### Definition of Done

- Responsive layout validated on mobile and desktop.
- WhatsApp CTA working correctly.
- Content aligned with client briefing.
- Visual direction aligned with `UI_UX.md`.
- Production build completed without errors.

## Phase 2 - Blog (After Phase 1 Validation)

### Goal

Start a reliable editorial operation for end clients.

### Scope

- Article listing page.
- Article details page by `slug`.
- Content ingestion from local CSV.
- Parsing/normalization layer with validation.
- Per-article SEO metadata support.

### Definition of Done

- Spreadsheet contract fully respected.
- Update flow documented and tested.
- `draft` articles are never publicly rendered.

## Phase 3 - Content Platform Evolution

### Goal

Increase scale and reduce manual operational overhead.

### Scope

- Migrate from local spreadsheet to intermediary API.
- Add automated content validation.
- Add minimum publication observability and error tracking.

## Recommended Delivery Sequence

1. Approve final visual and messaging for the landing page.
2. Publish institutional site v1.
3. Launch blog module with local spreadsheet ingestion.
4. Plan migration to a robust content data layer.
