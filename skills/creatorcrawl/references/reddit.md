# Reddit API reference

Base URL: `https://app.creatorcrawl.com/api`. Paths below are relative to this base.

Snapshot: 2026-10-01. Check the [live OpenAPI schema](https://app.creatorcrawl.com/api/openapi.json) when parameters or response fields are uncertain.

## Get post comments

`GET /reddit/post/comments` — 1 credits per successful call.

Returns the parent Post and a flat list of normalized Comment objects (replies inlined in display order).

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Reddit post URL |
| `cursor` | No | Pagination cursor from previous response |

Response: Normalized Reddit post and its comments.

## Search Reddit

`GET /reddit/search` — 1 credits per successful call.

Searches Reddit for posts matching a query across all subreddits. Returns normalized Post objects.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Search query |
| `sort` | No | Sort order Values: `relevance`, `new`, `top`, `comment_count`. |
| `timeframe` | No | Time frame filter Values: `all`, `day`, `week`, `month`, `year`. |
| `after` | No | Pagination cursor from previous response |

Response: Normalized Reddit search results.

## Get subreddit details

`GET /reddit/subreddit/details` — 1 credits per successful call.

Returns a canonical Subreddit object with normalized fields. snake_case, ISO 8601 dates.

| Query parameter | Required | Details |
| --- | --- | --- |
| `subreddit` | No | Subreddit name (e.g. programming) |
| `url` | No | Subreddit URL |

Response: Normalized subreddit details.

## Get subreddit posts

`GET /reddit/subreddit/posts` — 1 credits per successful call.

Returns a list of canonical Post objects from a subreddit with sorting and time filtering. snake_case, ISO 8601 dates.

| Query parameter | Required | Details |
| --- | --- | --- |
| `subreddit` | Yes | Subreddit name (e.g. programming) |
| `timeframe` | No | Time frame filter Values: `all`, `day`, `week`, `month`, `year`. |
| `sort` | No | Sort order Values: `best`, `hot`, `new`, `top`, `rising`. |
| `after` | No | Pagination cursor from previous response |

Response: Normalized subreddit posts.

## Search within a subreddit

`GET /reddit/subreddit/search` — 1 credits per successful call.

Searches posts and comments within a specific subreddit. Returns normalized Post and Comment objects.

| Query parameter | Required | Details |
| --- | --- | --- |
| `subreddit` | Yes | Subreddit name (e.g. programming) |
| `query` | No | Search query |
| `sort` | No | Sort order |
| `timeframe` | No | Time frame filter Values: `all`, `day`, `week`, `month`, `year`. |
| `cursor` | No | Pagination cursor from previous response |

Response: Normalized search results within the subreddit.
