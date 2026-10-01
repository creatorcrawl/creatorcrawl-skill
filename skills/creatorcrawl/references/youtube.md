# Youtube API reference

Base URL: `https://app.creatorcrawl.com/api`. Paths below are relative to this base.

Snapshot: 2026-10-01. Check the [live OpenAPI schema](https://app.creatorcrawl.com/api/openapi.json) when parameters or response fields are uncertain.

## Get YouTube channel

`GET /youtube/channel` — 1 credits per successful call.

Fetches a YouTube channel by channel ID, handle, or URL.

| Query parameter | Required | Details |
| --- | --- | --- |
| `channelId` | No | YouTube channel ID |
| `handle` | No | YouTube channel handle (e.g. @MrBeast) |
| `url` | No | YouTube channel URL |

Response: YouTube channel data.

## Get YouTube channel shorts

`GET /youtube/channel/shorts` — 1 credits per successful call.

Fetches shorts from a YouTube channel. Supports sorting and pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | No | YouTube channel handle |
| `channelId` | No | YouTube channel ID |
| `sort` | No | Sort order for shorts Values: `newest`, `popular`. |
| `continuationToken` | No | Token for pagination from previous response |

Response: YouTube channel shorts.

## Get YouTube channel videos

`GET /youtube/channel/videos` — 1 credits per successful call.

Fetches videos from a YouTube channel. Supports sorting and pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `channelId` | No | YouTube channel ID |
| `handle` | No | YouTube channel handle |
| `sort` | No | Sort order for videos Values: `latest`, `popular`. |
| `continuationToken` | No | Token for pagination from previous response |
| `includeExtras` | No | Include extra data in response |

Response: YouTube channel videos.

## Get YouTube video comments

`GET /youtube/video/comments` — 1 credits per successful call.

Fetches comments from a YouTube video. Supports pagination and ordering.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | YouTube video URL |
| `continuationToken` | No | Token for pagination from previous response |
| `order` | No | Comment sort order Values: `top`, `newest`. |

Response: YouTube video comments.

## Get YouTube playlist

`GET /youtube/playlist` — 1 credits per successful call.

Fetches a YouTube playlist by playlist ID.

| Query parameter | Required | Details |
| --- | --- | --- |
| `playlist_id` | Yes | YouTube playlist ID |

Response: YouTube playlist data.

## Search YouTube

`GET /youtube/search` — 1 credits per successful call.

Searches YouTube for videos, channels, playlists, and shorts.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Search query |
| `uploadDate` | No | Filter by upload date |
| `sortBy` | No | Sort results |
| `type` | No | Result type Values: `videos`, `shorts`, `channels`, `playlists`. |
| `duration` | No | Video duration Values: `under_3_min`, `between_3_and_20_min`, `over_20_min`. |
| `region` | No | Two-letter country code |
| `continuationToken` | No | Token for pagination from previous response |
| `includeExtras` | No | Include extra data in response |

Response: YouTube search results.

## Search YouTube by hashtag

`GET /youtube/search/hashtag` — 1 credits per successful call.

Searches YouTube for videos by hashtag.

| Query parameter | Required | Details |
| --- | --- | --- |
| `hashtag` | Yes | Hashtag to search for |
| `continuationToken` | No | Token for pagination from previous response |
| `type` | No | Filter by content type Values: `all`, `shorts`. |

Response: YouTube hashtag search results.

## Get YouTube video transcript

`GET /youtube/video/transcript` — 1 credits per successful call.

Fetches the transcript for a YouTube video by URL.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | YouTube video URL |
| `language` | No | Two-letter language code for the transcript (e.g. en, es, fr) |

Response: YouTube video transcript.

## Get trending YouTube shorts

`GET /youtube/shorts/trending` — 1 credits per successful call.

Fetches currently trending YouTube shorts.

Response: Trending YouTube shorts.

## Get YouTube video details

`GET /youtube/video` — 1 credits per successful call.

Fetches details for a YouTube video by URL.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | YouTube video URL |

Response: YouTube video data.
