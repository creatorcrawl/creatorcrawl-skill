# Linkedin API reference

Base URL: `https://api.creatorcrawl.com`. Paths below are relative to this base.

Snapshot: 2026-11-02. Check the [live OpenAPI schema](https://api.creatorcrawl.com/openapi.json) when parameters or response fields are uncertain.

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

## Search LinkedIn people

`GET /linkedin/search/people` — 7 credits per successful call.

Search LinkedIn member profiles by name, title, current or past company, school, location, and industry.

| Query parameter | Required | Details |
| --- | --- | --- |
| `search` | No | Name or keywords to search for |
| `title` | No | Job title |
| `firstName` | No | First name |
| `lastName` | No | Last name |
| `currentCompany` | No | Current company URL or ID, or several comma-separated |
| `pastCompany` | No | Past company URL or ID, or several comma-separated |
| `school` | No | School URL or ID, or several comma-separated |
| `location` | No | Location text, e.g. London |
| `geoId` | No | LinkedIn Geo ID; overrides location. Find IDs with /linkedin/search/location |
| `industryId` | No | LinkedIn industry ID, or several comma-separated |
| `keywordsCompany` | No | Keywords in the company name |
| `keywordsSchool` | No | Keywords in the school name |
| `followerOf` | No | Profile URL or ID; returns people who follow that profile |
| `page` | No | Page number, starting at 1 |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Find a LinkedIn profile by email

`GET /linkedin/profile/by-email` — 17 credits per successful call.

Reverse email lookup: find the LinkedIn profile of the person behind a work email address.

| Query parameter | Required | Details |
| --- | --- | --- |
| `email` | Yes | Work email address, e.g. john.smith@acme.com |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Find the email of a LinkedIn profile

`GET /linkedin/profile/email` — 34 credits per successful call.

Get a full LinkedIn profile plus its SMTP-verified work email. Catch-all domains return the email marked risky.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | LinkedIn profile URL, public identifier, or profile ID |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Get LinkedIn profile posts

`GET /linkedin/profile/posts` — 7 credits per successful call.

Get the posts published by a LinkedIn member, newest first, with pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `profile` | Yes | LinkedIn profile URL, public identifier, or profile ID |
| `postedLimit` | No | Only posts from the last: 24h, week, or month |
| `scrapePostedLimit` | No | Drop posts older than: 1h, 24h, week, month, 3months, 6months, or year |
| `page` | No | Page number, starting at 1 |
| `paginationToken` | No | Pagination token from the previous page; send it with the next page number when returned |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Get LinkedIn profile comments

`GET /linkedin/profile/comments` — 7 credits per successful call.

Get the comments a LinkedIn member has left on posts, with pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `profile` | Yes | LinkedIn profile URL, public identifier, or profile ID |
| `postedLimit` | No | Only posts from the last: 24h, week, or month |
| `page` | No | Page number, starting at 1 |
| `paginationToken` | No | Pagination token from the previous page; send it with the next page number when returned |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Get LinkedIn profile reactions

`GET /linkedin/profile/reactions` — 7 credits per successful call.

Get the posts a LinkedIn member has reacted to, with pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `profile` | Yes | LinkedIn profile URL, public identifier, or profile ID |
| `page` | No | Page number, starting at 1 |
| `paginationToken` | No | Pagination token from the previous page; send it with the next page number when returned |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Search LinkedIn companies

`GET /linkedin/search/companies` — 7 credits per successful call.

Search LinkedIn company pages by name, location, size, and industry.

| Query parameter | Required | Details |
| --- | --- | --- |
| `search` | No | Keywords in the company name |
| `location` | No | Location text |
| `geoId` | No | LinkedIn Geo ID; overrides location. Find IDs with /linkedin/search/location |
| `companySize` | No | Headcount band, or several comma-separated: 1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10001+ |
| `industryId` | No | LinkedIn industry ID, or several comma-separated |
| `page` | No | Page number, starting at 1 |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Get LinkedIn company people stats

`GET /linkedin/company/people-stats` — 7 credits per successful call.

Get the People tab statistics of a LinkedIn company: where employees live, where they studied, what they do, and their skills.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | LinkedIn company URL, universal name, or company ID |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Get LinkedIn company insights

`GET /linkedin/company/insights` — 168 credits per successful call.

Get in-depth account insights for a LinkedIn company: revenue, AI summaries of business model, priorities, challenges, and competitors, key people, headcount and hiring charts, job openings, and recent alerts.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | LinkedIn company URL, universal name, or company ID |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Search LinkedIn accounts

`GET /linkedin/search/accounts` — 168 credits per successful call.

Sales Navigator style company search by headcount and growth, revenue, department headcount, hiring, recent activity, and Fortune rank, with exclusions. 25 results per page.

| Query parameter | Required | Details |
| --- | --- | --- |
| `search` | No | Search query; supports LinkedIn search operators |
| `headquarterLocations` | No | Headquarters locations, comma-separated |
| `headquarterGeoIds` | No | Headquarters Geo IDs, comma-separated |
| `industryIds` | No | Industry IDs, comma-separated |
| `companyHeadcount` | No | Headcount bands, comma-separated: 1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10001+ |
| `companyHeadcountGrowth` | No | Headcount growth percent as min-max, e.g. 1-100 |
| `annualRevenue` | No | Annual revenue in millions as min-max;currency, e.g. 1-10;USD |
| `numOfFollowers` | No | Follower bands, comma-separated: 1-50, 51-100, 101-1000, 1001-5000, 5001+ |
| `departmentHeadcount` | No | Department headcount as min-max;department, e.g. 10-100;Engineering |
| `departmentHeadcountGrowth` | No | Department headcount growth percent as min-max;department, e.g. 5-50;Sales |
| `jobOpportunities` | No | Set HIRING_ON_LINKEDIN to find companies hiring on LinkedIn |
| `accountActivities` | No | Comma-separated: SENIOR_LEADERSHIP_CHANGES_LAST_3_MONTHS, FUNDING_EVENTS_PAST_12_MONTHS |
| `fortune` | No | Fortune rank bands, comma-separated: 50, 51_100, 101_250, 251_500 |
| `excludeHeadquarterLocations` | No | Headquarters locations to exclude, comma-separated |
| `excludeHeadquarterGeoIds` | No | Headquarters Geo IDs to exclude, comma-separated |
| `excludeIndustryIds` | No | Industry IDs to exclude, comma-separated |
| `excludeCompanyHeadcount` | No | Headcount bands to exclude, comma-separated |
| `page` | No | Page number, starting at 1 (max 100) |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Search LinkedIn leads

`GET /linkedin/search/leads` — 168 credits per successful call.

Sales Navigator style people search with inclusion and exclusion filters for company, title, seniority, function, location, industry, tenure, and headcount, or a Sales Navigator search URL.

| Query parameter | Required | Details |
| --- | --- | --- |
| `search` | No | Search query; supports LinkedIn search operators |
| `currentCompanies` | No | Current company URLs or IDs, comma-separated |
| `pastCompanies` | No | Past company URLs or IDs, comma-separated |
| `currentJobTitles` | No | Current job titles, comma-separated |
| `pastJobTitles` | No | Past job titles, comma-separated |
| `firstNames` | No | First names, comma-separated |
| `lastNames` | No | Last names, comma-separated |
| `locations` | No | Locations, comma-separated |
| `geoIds` | No | Geo IDs, comma-separated; overrides locations |
| `schools` | No | School URLs or IDs, comma-separated |
| `industryIds` | No | Industry IDs, comma-separated |
| `seniorityLevelIds` | No | Seniority level IDs, comma-separated |
| `functionIds` | No | Job function IDs, comma-separated |
| `yearsAtCurrentCompanyIds` | No | Years-at-current-company IDs, comma-separated |
| `yearsOfExperienceIds` | No | Years-of-experience IDs, comma-separated |
| `companyHeadcount` | No | Company headcount bands, comma-separated |
| `companyHeadquarterLocations` | No | Company headquarters locations, comma-separated |
| `profileLanguages` | No | Profile languages, comma-separated |
| `recentlyChangedJobs` | No | Only people who changed jobs in the last 90 days |
| `postedOnLinkedin` | No | Only people who posted in the last 30 days |
| `excludeLocations` | No | Locations to exclude, comma-separated |
| `excludeGeoIds` | No | Geo IDs to exclude, comma-separated |
| `excludeCurrentCompanies` | No | Current companies to exclude, comma-separated |
| `excludePastCompanies` | No | Past companies to exclude, comma-separated |
| `excludeSchools` | No | Schools to exclude, comma-separated |
| `excludeCurrentJobTitles` | No | Current job titles to exclude, comma-separated |
| `excludePastJobTitles` | No | Past job titles to exclude, comma-separated |
| `excludeIndustryIds` | No | Industry IDs to exclude, comma-separated |
| `excludeSeniorityLevelIds` | No | Seniority level IDs to exclude, comma-separated |
| `excludeFunctionIds` | No | Function IDs to exclude, comma-separated |
| `excludeCompanyHeadquarterLocations` | No | Company headquarters locations to exclude, comma-separated |
| `salesNavUrl` | No | Sales Navigator search URL; overrides every filter except page |
| `page` | No | Page number, starting at 1 (max 100) |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Get LinkedIn job

`GET /linkedin/job` — 2 credits per successful call.

Get a LinkedIn job posting with title, description, company, location, salary, workplace type, and applicant count. Provide at least one of: `url`, `jobId`.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | No | LinkedIn job URL |
| `jobId` | No | LinkedIn job ID |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Search LinkedIn jobs

`GET /linkedin/search/jobs` — 2 credits per successful call.

Search LinkedIn job postings by title, company, location, workplace type, employment type, salary, experience level, and date posted.

| Query parameter | Required | Details |
| --- | --- | --- |
| `search` | No | Job title or keywords |
| `companyId` | No | Company ID, or several comma-separated |
| `location` | No | Location text |
| `geoId` | No | LinkedIn Geo ID; overrides location. Find IDs with /linkedin/search/location |
| `sortBy` | No | relevance or date |
| `workplaceType` | No | Comma-separated: office, hybrid, remote |
| `employmentType` | No | Comma-separated: full-time, part-time, contract, temporary, internship |
| `salary` | No | Minimum salary: 40k+, 60k+, 80k+, 100k+, 120k+, 140k+, 160k+, 180k+, 200k+ |
| `postedLimit` | No | Posted within: 24h, week, or month |
| `experienceLevel` | No | Comma-separated: internship, entry, associate, mid-senior, director, executive |
| `industryId` | No | LinkedIn industry ID, or several comma-separated |
| `functionId` | No | Job function ID, or several comma-separated |
| `under10Applicants` | No | Only jobs with fewer than 10 applicants |
| `easyApply` | No | true for Easy Apply jobs only, false to exclude them |
| `page` | No | Page number, starting at 1 |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Find a LinkedIn Geo ID

`GET /linkedin/search/location` — 2 credits per successful call.

Resolve location text to LinkedIn Geo IDs for the geoId filters on the search endpoints.

| Query parameter | Required | Details |
| --- | --- | --- |
| `search` | Yes | Location text, e.g. San Francisco Bay Area |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Search LinkedIn posts

`GET /linkedin/search/posts` — 7 credits per successful call.

Search LinkedIn posts by keyword, author, company, mentions, group, content type, and date.

| Query parameter | Required | Details |
| --- | --- | --- |
| `search` | No | Keywords in the post |
| `profile` | No | Author profile URLs, public identifiers, or IDs, comma-separated |
| `company` | No | Author company URLs or IDs, comma-separated |
| `authorsCompany` | No | Companies where authors work, comma-separated URLs or IDs |
| `authorsIndustryId` | No | Industry IDs of authors’ companies, comma-separated |
| `authorKeywords` | No | Keywords in author profiles |
| `mentioningMember` | No | Profile URLs or IDs mentioned in the post, comma-separated |
| `mentioningCompany` | No | Company URLs or IDs mentioned in the post, comma-separated |
| `contentType` | No | videos, images, live_videos, documents, collaborative_articles, or jobs |
| `group` | No | LinkedIn group URL or ID |
| `postedLimit` | No | Only posts from the last: 24h, week, or month |
| `scrapePostedLimit` | No | Drop posts older than: 1h, 24h, week, month, 3months, 6months, or year |
| `sortBy` | No | relevance or date |
| `page` | No | Page number, starting at 1 |
| `paginationToken` | No | Pagination token from the previous page; send it with the next page number when returned |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Get LinkedIn post comments

`GET /linkedin/post/comments` — 7 credits per successful call.

Get the comments on a LinkedIn post with author details and pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `post` | Yes | LinkedIn post URL |
| `sortBy` | No | relevance or date |
| `page` | No | Page number, starting at 1 |
| `paginationToken` | No | Token from the previous page; needed for relevance pages after 1 |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Get LinkedIn comment replies

`GET /linkedin/post/comments/replies` — 7 credits per successful call.

Get the replies to a LinkedIn comment with pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | LinkedIn comment URL |
| `paginationToken` | No | Pagination token from the previous page; send it with the next page number when returned |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Get LinkedIn post reactions

`GET /linkedin/post/reactions` — 7 credits per successful call.

Get the people who reacted to a LinkedIn post, with reaction type and profile details.

| Query parameter | Required | Details |
| --- | --- | --- |
| `post` | Yes | LinkedIn post URL |
| `page` | No | Page number, starting at 1 |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Get LinkedIn comment reactions

`GET /linkedin/post/comments/reactions` — 7 credits per successful call.

Get the people who reacted to a LinkedIn comment.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | LinkedIn comment URL |
| `page` | No | Page number, starting at 1 |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Get LinkedIn group

`GET /linkedin/group` — 4 credits per successful call.

Get a LinkedIn group with its description, member count, and rules. Provide at least one of: `url`, `groupId`.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | No | LinkedIn group URL |
| `groupId` | No | LinkedIn group ID |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Search LinkedIn groups

`GET /linkedin/search/groups` — 4 credits per successful call.

Search LinkedIn groups by keyword.

| Query parameter | Required | Details |
| --- | --- | --- |
| `search` | Yes | Keywords to search for |
| `page` | No | Page number, starting at 1 |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.

## Search LinkedIn services

`GET /linkedin/search/services` — 7 credits per successful call.

Search LinkedIn service pages (freelancers and agencies) by keyword and location.

| Query parameter | Required | Details |
| --- | --- | --- |
| `search` | Yes | Service keywords, e.g. web design |
| `location` | No | Location text |
| `geoId` | No | LinkedIn Geo ID; overrides location. Find IDs with /linkedin/search/location |
| `page` | No | Page number, starting at 1 |

Response: `{ data: { element | elements, pagination?, query? }, meta }` with the LinkedIn record passed through.
