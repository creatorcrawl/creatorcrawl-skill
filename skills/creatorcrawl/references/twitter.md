# Twitter API reference

Base URL: `https://app.creatorcrawl.com/api`. Paths below are relative to this base.

Snapshot: 2026-10-01. Check the [live OpenAPI schema](https://app.creatorcrawl.com/api/openapi.json) when parameters or response fields are uncertain.

## Get Twitter/X profile

`GET /twitter/profile` — 1 credits per successful call.

Returns a canonical Creator for a Twitter/X user. snake_case, ISO 8601 dates, no platform-specific bloat. Verified is collapsed into a single boolean plus optional tier (standard / blue / gov).

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | Twitter handle (e.g. elonmusk) |

Response: Normalized Twitter creator.

## Search Twitter/X videos by keyword

`GET /twitter/videos/search` — 3 credits per successful call.

Returns normalized video posts matching a keyword. Supports Latest or Top sorting, duration filtering, and cursor pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Keyword, phrase, or X advanced-search query |
| `query_type` | No | Search result ordering Values: `Latest`, `Top`. |
| `max_duration_seconds` | No | Only return videos at or below this duration |
| `cursor` | No | Cursor from the previous response |

Response: Normalized Twitter/X video search results.

## Get Twitter/X user tweets

`GET /twitter/user/tweets` — 1 credits per successful call.

Returns canonical Post objects for a user.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | Twitter handle (e.g. elonmusk) |

Response: Normalized Twitter posts.

## Get Twitter/X tweet

`GET /twitter/tweet` — 1 credits per successful call.

Returns a canonical Post for a single tweet URL with engagement counts, media, and author.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Twitter/X tweet URL |

Response: Normalized Twitter tweet.

## Get Twitter/X tweet transcript

`GET /twitter/tweet/transcript` — 1 credits per successful call.

Returns a canonical Transcript for the video in a Twitter/X tweet URL.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Twitter/X tweet URL containing a video |

Response: Normalized Twitter tweet transcript.

## Get Twitter/X community

`GET /twitter/community` — 1 credits per successful call.

Returns a canonical community object including name, description, member count, and rules.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Twitter/X community URL |

Response: Normalized Twitter community.

## Get Twitter/X community tweets

`GET /twitter/community/tweets` — 1 credits per successful call.

Returns canonical Post objects from a community.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Twitter/X community URL |

Response: Normalized Twitter community tweets.

## Search Twitter/X posts

`GET /twitter/search/tweets` — 1 credits per successful call.

Searches public posts with X advanced-search syntax and cursor pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Keyword, phrase, or X advanced-search query |
| `query_type` | No | Search result ordering Values: `Latest`, `Top`. |
| `cursor` | No | Opaque cursor from the previous response |

Response: Search Twitter/X posts.

## Search Twitter/X users

`GET /twitter/search/users` — 1 credits per successful call.

Searches public Twitter/X accounts by keyword.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Name, handle, or profile keyword |
| `cursor` | No | Opaque cursor from the previous response |

Response: Search Twitter/X users.

## Get Twitter/X user followers

`GET /twitter/user/followers` — 1 credits per successful call.

Returns full public profiles for the followers of an account.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | Twitter handle without @ |
| `cursor` | No | Opaque cursor from the previous response |
| `page_size` | No | Profiles per page, from 20 to 200 |

Response: Get Twitter/X user followers.

## Get Twitter/X accounts followed by a user

`GET /twitter/user/following` — 1 credits per successful call.

Returns full public profiles for accounts followed by a user.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | Twitter handle without @ |
| `cursor` | No | Opaque cursor from the previous response |
| `page_size` | No | Profiles per page, from 20 to 200 |

Response: Get Twitter/X accounts followed by a user.

## Get posts mentioning a Twitter/X user

`GET /twitter/user/mentions` — 1 credits per successful call.

Returns recent posts that mention a public account.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | Twitter handle without @ |
| `since_time` | No | Include posts at or after this Unix timestamp |
| `until_time` | No | Include posts before this Unix timestamp |
| `cursor` | No | Opaque cursor from the previous response |

Response: Get posts mentioning a Twitter/X user.

## Get Twitter/X tweet replies

`GET /twitter/tweet/replies` — 1 credits per successful call.

Returns replies to a tweet with selectable relevance, recency, or likes sorting.

| Query parameter | Required | Details |
| --- | --- | --- |
| `tweet_id` | Yes | Tweet ID |
| `query_type` | No | Reply ordering Values: `Relevance`, `Latest`, `Likes`. |
| `cursor` | No | Opaque cursor from the previous response |

Response: Get Twitter/X tweet replies.

## Get Twitter/X quote tweets

`GET /twitter/tweet/quotes` — 1 credits per successful call.

Returns posts that quote a tweet, newest first.

| Query parameter | Required | Details |
| --- | --- | --- |
| `tweet_id` | Yes | Tweet ID |
| `cursor` | No | Opaque cursor from the previous response |

Response: Get Twitter/X quote tweets.

## Get Twitter/X tweet retweeters

`GET /twitter/tweet/retweeters` — 1 credits per successful call.

Returns public profiles that retweeted a tweet.

| Query parameter | Required | Details |
| --- | --- | --- |
| `tweet_id` | Yes | Tweet ID |
| `cursor` | No | Opaque cursor from the previous response |

Response: Get Twitter/X tweet retweeters.

## Get Twitter/X tweet thread context

`GET /twitter/tweet/thread` — 1 credits per successful call.

Returns the surrounding conversation thread for a tweet.

| Query parameter | Required | Details |
| --- | --- | --- |
| `tweet_id` | Yes | Tweet ID |
| `cursor` | No | Opaque cursor from the previous response |

Response: Get Twitter/X tweet thread context.

## Get Twitter/X list tweets

`GET /twitter/list/tweets` — 1 credits per successful call.

Returns the timeline for a public Twitter/X list.

| Query parameter | Required | Details |
| --- | --- | --- |
| `list_id` | Yes | Twitter/X list ID |
| `cursor` | No | Opaque cursor from the previous response |

Response: Get Twitter/X list tweets.
