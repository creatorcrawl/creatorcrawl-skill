# Tiktok API reference

Base URL: `https://app.creatorcrawl.com/api`. Paths below are relative to this base.

Snapshot: 2026-10-01. Check the [live OpenAPI schema](https://app.creatorcrawl.com/api/openapi.json) when parameters or response fields are uncertain.

## Get transcripts for a creator's top videos

`GET /tiktok/creator/transcripts` — 11 credits per successful call.

Fetches a creator's top videos and pairs each with its transcript. Costs ~11 credits (1 for video list + 10 for transcripts). Returns canonical Post + Transcript objects.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | TikTok handle (e.g. charlidamelio) |
| `count` | No | Number of top videos to fetch (1-10, default 10) |
| `language` | No | Transcript language (2-letter code, e.g. en) |

Response: Creator top video transcripts.

## Get TikTok video comments

`GET /tiktok/video/comments` — 1 credits per successful call.

Returns canonical Comment objects for a TikTok video. snake_case, ISO 8601 dates. Supports cursor pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | TikTok video URL |
| `cursor` | No | Cursor from a previous response to fetch the next page |

Response: Normalized TikTok comments.

## Get TikTok user followers

`GET /tiktok/user/followers` — 1 credits per successful call.

Returns canonical Creator objects for the followers of a TikTok account. Cursor pagination via min_time.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | No | TikTok handle (e.g. stoolpresidente) |
| `user_id` | No | User id. Use this for faster response times. |
| `cursor` | No | Cursor from a previous response (the min_time field) to fetch the next page |

Response: Normalized TikTok followers list.

## Get TikTok user following

`GET /tiktok/user/following` — 1 credits per successful call.

Returns canonical Creator objects for the accounts a TikTok user follows. Cursor pagination via min_time.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | TikTok handle (e.g. stoolpresidente) |
| `cursor` | No | Cursor from a previous response (the min_time field) to fetch the next page |

Response: Normalized TikTok following list.

## Get TikTok live stream

`GET /tiktok/user/live` — 1 credits per successful call.

Returns the live stream status for a TikTok user including viewer count, room info, and host. Normalized snake_case shape.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | TikTok handle (e.g. thejustalex) |

Response: Normalized TikTok live stream data.

## Get popular creators

`GET /tiktok/creators/popular` — 1 credits per successful call.

Returns currently popular TikTok creators with their recent videos. Filter by follower count, country, and sort by engagement, follower count, or average views.

| Query parameter | Required | Details |
| --- | --- | --- |
| `page` | No | Page number |
| `sortBy` | No | Sort creators by engagement, follower count, or average views Values: `engagement`, `follower`, `avg_views`. |
| `followerCount` | No | Filter by follower count range Values: `10K-100K`, `100K-1M`, `1M-10M`, `10M+`. |
| `creatorCountry` | No | Country code of the creator (e.g. US, GB) |
| `audienceCountry` | No | Country code of the audience/follower (e.g. US, GB) |

Response: Normalized popular creators.

## Get popular hashtags

`GET /tiktok/hashtags/popular` — 1 credits per successful call.

Returns currently popular TikTok hashtags with rank and trend data. Filter by period, country, and industry.

| Query parameter | Required | Details |
| --- | --- | --- |
| `period` | No | Time period in days (7, 30, or 120) Values: `7`, `30`, `120`. |
| `page` | No | Page number |
| `countryCode` | No | Country code (e.g. US, GB, FR, DE, JP, KR, BR) |
| `newOnBoard` | No | Show only newly trending hashtags |
| `industry` | No | Industry filter (e.g. beauty-and-personal-care, food-and-beverage, tech-and-electronics) |

Response: Normalized popular hashtags.

## Get popular songs

`GET /tiktok/songs/popular` — 1 credits per successful call.

Returns currently popular TikTok songs with rank and metadata. This endpoint can take up to 30 seconds.

| Query parameter | Required | Details |
| --- | --- | --- |
| `page` | No | Page number |
| `timePeriod` | No | Time period to get popular songs from Values: `7`, `30`, `130`. |
| `rankType` | No | Get popular or surging songs Values: `popular`, `surging`. |
| `newOnBoard` | No | New to top 100 |
| `commercialMusic` | No | Approved for business use |
| `countryCode` | No | Country code (e.g. US, GB, DE) |

Response: Normalized popular songs.

## Get popular videos

`GET /tiktok/videos/popular` — 1 credits per successful call.

Returns currently popular TikTok videos. Filter by period, country, and sort by likes, views, comments, or reposts.

| Query parameter | Required | Details |
| --- | --- | --- |
| `period` | No | Time period in days (7 or 30) Values: `7`, `30`. |
| `page` | No | Page number |
| `orderBy` | No | Sort by likes, views (hot), comments, or reposts Values: `like`, `hot`, `comment`, `repost`. |
| `countryCode` | No | Country code (e.g. US, GB) |

Response: Normalized popular videos.

## Get TikTok profile

`GET /tiktok/profile` — 1 credits per successful call.

Returns a canonical Creator with normalized fields plus up to ~30 recent posts. snake_case, ISO 8601 dates, no platform-specific bloat.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | TikTok handle (e.g. stoolpresidente) |

Response: Normalized TikTok creator.

## Get TikTok profile region

`GET /tiktok/profile/region` — 0 credits per successful call.

Returns the region/country code for a TikTok profile.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | TikTok handle (e.g. stoolpresidente) |

Response: Profile region.

## Get TikTok profile videos

`GET /tiktok/profile/videos` — 1 credits per successful call.

Returns canonical Post objects for videos from a TikTok profile. snake_case, ISO 8601 dates. Cursor pagination via max_cursor.

| Query parameter | Required | Details |
| --- | --- | --- |
| `handle` | Yes | TikTok handle (e.g. stoolpresidente) |
| `user_id` | No | TikTok user id. Use this for faster responses. |
| `sort_by` | No | What to sort by (latest or popular) Values: `latest`, `popular`. |
| `cursor` | No | Cursor from a previous response (the max_cursor field) to fetch the next page |
| `region` | No | Region (Country) for the proxy. Defaults to US. |

Response: Normalized TikTok profile videos.

## Get song details

`GET /tiktok/song` — 1 credits per successful call.

Returns a canonical Song object for a TikTok song/clip.

| Query parameter | Required | Details |
| --- | --- | --- |
| `clipId` | Yes | The clip ID (not the song ID) |

Response: Normalized TikTok song.

## Get TikToks using a song

`GET /tiktok/song/videos` — 1 credits per successful call.

Returns canonical Post objects for TikTok videos that use a specific song/clip. Cursor pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `clipId` | Yes | The clip ID from the song URL |
| `cursor` | No | Cursor from a previous response to fetch the next page |

Response: Normalized TikTok videos using the song.

## Search TikTok by hashtag

`GET /tiktok/search/hashtag` — 1 credits per successful call.

Returns canonical Post objects for TikTok videos using a hashtag. Cursor pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `hashtag` | Yes | Hashtag to search for (without #) |
| `region` | No | Region the proxy will be set to (e.g. US) |
| `cursor` | No | Cursor from a previous response to fetch the next page |

Response: Normalized TikTok hashtag search results.

## Search TikTok by keyword

`GET /tiktok/search/keyword` — 1 credits per successful call.

Returns canonical Post objects for TikTok videos matching a keyword. Supports sorting, date and duration filtering, and cursor pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Keyword to search for |
| `date_posted` | No | Time frame filter Values: `yesterday`, `this-week`, `this-month`, `last-3-months`, `last-6-months`, `all-time`. |
| `sort_by` | No | Sort by Values: `relevance`, `most-liked`, `date-posted`. |
| `region` | No | Region for the proxy (2 letter country code e.g. US, GB) |
| `max_duration_seconds` | No | Only return videos with a known duration at or below this many seconds |
| `cursor` | No | Cursor from a previous response to fetch the next page |

Response: Normalized TikTok keyword search results.

## Top search on TikTok

`GET /tiktok/search/top` — 1 credits per successful call.

Returns canonical Post objects for top TikTok search results (videos and photo carousels). Cursor pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Keyword to search for |
| `publish_time` | No | Time frame filter Values: `yesterday`, `this-week`, `this-month`, `last-3-months`, `last-6-months`, `all-time`. |
| `sort_by` | No | Sort by Values: `relevance`, `most-liked`, `date-posted`. |
| `region` | No | Region for the proxy (2 letter country code e.g. US, GB) |
| `cursor` | No | Cursor from a previous response to fetch the next page |

Response: Normalized TikTok top search results.

## Search TikTok users

`GET /tiktok/search/users` — 1 credits per successful call.

Returns canonical Creator objects for users matching a search query. Cursor pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Search query for users |
| `cursor` | No | Cursor from a previous response to fetch the next page |

Response: Normalized TikTok user search results.

## Get TikTok video transcript

`GET /tiktok/video/transcript` — 1 credits per successful call.

Returns a canonical Transcript object for a TikTok video. Optionally specify language and AI fallback.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | TikTok video URL |
| `language` | No | Language of the transcript. 2 letter language code, e.g. 'en', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'zh' |
| `use_ai_as_fallback` | No | Set to 'true' to use AI as a fallback if the transcript is not found. Only works for videos under 2 minutes. |

Response: Normalized TikTok video transcript.

## Get trending feed

`GET /tiktok/get-trending-feed` — 1 credits per successful call.

Returns canonical Post objects for the current TikTok trending feed, filtered by region.

| Query parameter | Required | Details |
| --- | --- | --- |
| `region` | Yes | Proxy region. Use 2 letter country codes like US, GB, FR, etc. |

Response: Normalized TikTok trending feed.

## Get TikTok video info

`GET /tiktok/video` — 1 credits per successful call.

Returns a canonical Post object for a TikTok video. Pass get_transcript=true to include a normalized Transcript.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | TikTok video URL |
| `get_transcript` | No | Set to true to get the transcript of the video |
| `region` | No | Region of the proxy. Use 2 letter country codes like US, GB, FR, PH, etc. |

Response: Normalized TikTok video.
