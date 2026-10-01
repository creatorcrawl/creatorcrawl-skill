# Instagram API reference

Base URL: `https://app.creatorcrawl.com/api`. Paths below are relative to this base.

Snapshot: 2026-10-01. Check the [live OpenAPI schema](https://app.creatorcrawl.com/api/openapi.json) when parameters or response fields are uncertain.

## Get Instagram basic profile

`GET /instagram/basic-profile` — 1 credits per successful call.

Returns a canonical Creator for an Instagram user ID. Use /instagram/profile if you only have a handle.

| Query parameter | Required | Details |
| --- | --- | --- |
| `userId` | Yes | Instagram user ID (e.g. 314216) |

Response: Normalized Instagram creator.

## Get Instagram post comments

`GET /instagram/post/comments` — 1 credits per successful call.

Returns normalized comments from an Instagram post or reel with cursor pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | The URL of the post or reel to get comments from |
| `cursor` | No | Cursor from previous response to get more comments |

Response: Normalized Instagram comments.

## Get Instagram embed HTML

`GET /instagram/user/embed` — 1 credits per successful call.

Returns an HTML embed snippet for an Instagram profile.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | Instagram handle (e.g. jane) |

Response: Instagram embed HTML.

## Get Instagram highlight details

`GET /instagram/user/highlight/detail` — 1 credits per successful call.

Returns details about a specific Instagram story highlight including all media items.

| Query parameter | Required | Details |
| --- | --- | --- |
| `id` | Yes | The ID of the highlight (e.g. 18067016518767507) |

Response: Normalized Instagram highlight.

## Get Instagram post/reel info

`GET /instagram/post` — 1 credits per successful call.

Returns a canonical Post for a public Instagram post or reel. View counts only reflect Instagram views, not combined IG + FB views.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Instagram post or reel URL |

Response: Normalized Instagram post.

## Get Instagram user posts

`GET /instagram/user/posts` — 1 credits per successful call.

Returns normalized public posts from an Instagram user with cursor pagination. video_view_count for reels is unreliable; use /instagram/user/reels for reel views.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | Instagram handle (e.g. barstoolsports) |
| `next_max_id` | No | Cursor to get next page of results |

Response: Normalized Instagram posts.

## Get Instagram profile

`GET /instagram/profile` — 1 credits per successful call.

Returns a canonical Creator with normalized fields plus recent posts when available. snake_case, ISO 8601 dates.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | Instagram handle (e.g. adrianhorning) |

Response: Normalized Instagram creator.

## Get Instagram user reels

`GET /instagram/user/reels` — 1 credits per successful call.

Returns normalized public reels from a profile with cursor pagination. Use user_id for faster responses. Does not include pinned reels.

| Query parameter | Required | Details |
| --- | --- | --- |
| `user_id` | No | Instagram user ID for faster response times (e.g. 2700692569) |
| `handle` | No | Instagram handle. Use user_id for faster response times. |
| `max_id` | No | Cursor from previous response to get more reels |

Response: Normalized Instagram reels.

## Search Instagram reels

`GET /instagram/reels/search` — 1 credits per successful call.

Returns normalized reels matching a keyword. Uses Google Search to find reels since Instagram puts search behind login.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | The keyword to search for (e.g. dogs) |
| `page` | No | The page number to return |

Response: Normalized Instagram reels.

## Get Instagram story highlights

`GET /instagram/user/highlights` — 1 credits per successful call.

Returns a list of story highlight summaries for an Instagram user. Use /instagram/user/highlight/detail for media items.

| Query parameter | Required | Details |
| --- | --- | --- |
| `user_id` | No | Instagram user ID for faster response times |
| `handle` | No | Instagram handle. Use user_id for faster response times. |

Response: Instagram story highlight summaries.

## Get Instagram post/reel transcript

`GET /instagram/media/transcript` — 1 credits per successful call.

Returns the AI-generated transcript of an Instagram post or reel. Carousel items are joined into a single transcript. Works for videos under 2 minutes and may take 10-30 seconds.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Instagram post or reel URL |

Response: Normalized Instagram transcript.
