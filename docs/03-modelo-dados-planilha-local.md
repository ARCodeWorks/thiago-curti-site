# 03 - Local Spreadsheet Data Model

## Status

Temporary source for blog content: local spreadsheet/CSV.

## Expected Location

- CSV file at `data/blog_posts.csv`
- Encoding: UTF-8
- Delimiter: comma

## Column Contract

| Column | Required | Type | Example | Notes |
|---|---|---|---|---|
| `id` | Yes | string | `post-001` | Stable unique identifier. |
| `slug` | Yes | string | `how-to-appeal-disability-denial` | Used in article route. |
| `title` | Yes | string | `How to Appeal a Disability Benefit Denial` | Main page title (`h1`). |
| `excerpt` | Yes | string | `Practical steps to act safely...` | Summary for listing cards. |
| `content_md` | Yes | string | `## Introduction ...` | Markdown article content. |
| `category` | Yes | string | `Social Security` | Editorial category. |
| `keywords` | No | string | `benefit;appeal;social-security` | Delimited by `;`. |
| `cover_image` | No | string | `/images/blog/appeal.jpg` | Local path or URL. |
| `meta_description` | Yes | string | `Step-by-step guide...` | SEO metadata. |
| `author` | Yes | string | `Thiago Curti` | Displayed article author. |
| `published_at` | Yes | date (`YYYY-MM-DD`) | `2026-04-13` | Publication date. |
| `status` | Yes | enum | `published` | Allowed values: `draft` or `published`. |

## Validation Rules

- `slug` must be unique.
- `title` should ideally be under 70 characters.
- `meta_description` should ideally be 140-160 characters.
- `draft` records must never be rendered publicly.

## Minimal CSV Example

```csv
id,slug,title,excerpt,content_md,category,keywords,cover_image,meta_description,author,published_at,status
post-001,how-to-appeal-disability-denial,How to Appeal a Disability Benefit Denial,"Practical steps to improve your appeal outcome.","## Introduction\n...",Social Security,"benefit;appeal;social-security",/images/blog/appeal.jpg,"Objective guide on what to do after a denial.",Thiago Curti,2026-04-13,published
```

## Important Note

Do not rename columns without updating the parsing/normalization layer in code.
