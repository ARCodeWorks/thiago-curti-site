# 07 - Client Handoff

## Deliverables

- Institutional React website.
- Blog module powered by local spreadsheet source.
- Operational documentation under `/docs`.

## How to Update Articles (Current Version)

1. Open `data/blog_posts.csv`.
2. Insert or update a row following the column contract.
3. Save file using UTF-8 encoding.
4. Validate list and article pages locally.
5. Publish the update.

## Attention Points

- Do not remove or rename spreadsheet columns.
- Do not duplicate `slug` values.
- Use `draft` for content under review.
- Review spelling and metadata before publishing.

## Temporary Approach Limitations (Local Spreadsheet)

- Manual flow with human-error risk.
- No role-based editorial panel.
- Limited scalability as article volume grows.

## Recommended Next Improvement

Implement an API-based content layer with automatic validation and audit trail.

## Suggested Responsibilities

- Legal/editorial owner: approve content quality and legal framing.
- Technical owner: validate data contract and publication integrity.
- Commercial owner: track conversion metrics and optimize CTAs.
