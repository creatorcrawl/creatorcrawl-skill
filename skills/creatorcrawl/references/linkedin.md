# Linkedin API reference

Base URL: `https://app.creatorcrawl.com/api`. Paths below are relative to this base.

Snapshot: 2026-10-01. Check the [live OpenAPI schema](https://app.creatorcrawl.com/api/openapi.json) when parameters or response fields are uncertain.

## Get LinkedIn person profile

`GET /linkedin/profile` — 1 credits per successful call.

Fetch a public LinkedIn profile by URL. Returns the normalized person record with current role, experiences (with parsed ISO start/end dates), education, and recent posts.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | LinkedIn person profile URL, e.g. https://www.linkedin.com/in/parrsam/ |

Response: LinkedIn profile data.

## Get LinkedIn company page

`GET /linkedin/company` — 1 credits per successful call.

Fetch a LinkedIn company page by URL. Returns the normalized company record with industry, employee count, headquarters, specialties, funding summary, and similar companies.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | LinkedIn company page URL, e.g. https://linkedin.com/company/shopify |

Response: LinkedIn company page data.

## Get LinkedIn company posts

`GET /linkedin/company/posts` — 1 credits per successful call.

Fetch normalized public posts from a LinkedIn company page. Use the page query parameter to paginate.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | LinkedIn company page URL, e.g. https://linkedin.com/company/shopify |
| `page` | No | Page number for pagination, starting at 1 |

Response: LinkedIn company posts.

## Get LinkedIn post or article

`GET /linkedin/post` — 1 credits per successful call.

Fetch a single LinkedIn post or pulse article by URL. Returns the normalized post with author, engagement counts, comments, and related articles from the same author.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | LinkedIn post or pulse article URL |

Response: LinkedIn post data.

## Search the LinkedIn Ad Library

`GET /linkedin/ads/search` — 1 credits per successful call.

Search public LinkedIn ads by company, keyword, or company ID. Supports optional country and date filters. Returns normalized ad records with creative, advertiser, targeting, impressions, and run dates.

| Query parameter | Required | Details |
| --- | --- | --- |
| `company` | No | Company name to search for, e.g. "microsoft" |
| `keyword` | No | Search keyword |
| `companyId` | No | LinkedIn company ID |
| `countries` | No | Comma-separated ISO country codes, e.g. "US,CA,MX" |
| `startDate` | No | Start date in YYYY-MM-DD format |
| `endDate` | No | End date in YYYY-MM-DD format |
| `paginationToken` | No | Pagination token from a previous response |

Response: LinkedIn ad library search results.

## Get LinkedIn ad details

`GET /linkedin/ad` — 1 credits per successful call.

Fetch a single LinkedIn ad from the Ad Library by URL. Returns the normalized ad record with creative, advertiser, targeting, impressions, run dates, and country breakdown.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | LinkedIn Ad Library detail URL, e.g. https://www.linkedin.com/ad-library/detail/666281156 |

Response: LinkedIn ad details.
