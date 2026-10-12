# Facebook API reference

Base URL: `https://api.creatorcrawl.com`. Paths below are relative to this base.

Snapshot: 2026-10-12. Check the [live OpenAPI schema](https://api.creatorcrawl.com/openapi.json) when parameters or response fields are uncertain.

## Get Facebook Ad Library ad

`GET /facebook/adLibrary/ad` — 1 credits per successful call.

Get a Meta Ad Library ad, creative assets, delivery data, and status.

| Query parameter | Required | Details |
| --- | --- | --- |
| `id` | No | Meta Ad Library ad ID |
| `url` | No | Meta Ad Library ad URL |
| `trim` | No | Set true for a smaller response |
| `cache_max_age` | No | Upstream cache age: 1d, 3d, 7d, 14d, or 30d |

Response: Facebook data.

## Get Facebook Marketplace item

`GET /facebook/marketplace/item` — 1 credits per successful call.

Get Marketplace item details by ID or URL.

| Query parameter | Required | Details |
| --- | --- | --- |
| `id` | No | Marketplace item ID |
| `url` | No | Marketplace item URL |

Response: Facebook data.

## Get Facebook ad transcript

`GET /facebook/adLibrary/ad/transcript` — 1 credits per successful call.

Get the transcript of a public Meta Ad Library video ad.

| Query parameter | Required | Details |
| --- | --- | --- |
| `id` | No | Meta Ad Library ad ID |
| `url` | No | Meta Ad Library ad URL |
| `cache_max_age` | No | Upstream cache age: 1d, 3d, 7d, 14d, or 30d |

Response: Facebook data.

## Get Facebook city events

`GET /facebook/events` — 1 credits per successful call.

Get public events from a Facebook city events page.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Facebook city events page URL |
| `time` | No | today, this_week, or next_week |
| `cursor` | No | Cursor from the previous response |

Response: Facebook data.

## Get Facebook comment replies

`GET /facebook/post/comment/replies` — 1 credits per successful call.

Get replies to a Facebook comment with cursor pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `feedback_id` | Yes | Comment feedback ID |
| `expansion_token` | Yes | Comment expansion token |
| `cursor` | No | Cursor from the previous response |

Response: Facebook data.

## Get Facebook company ads

`GET /facebook/adLibrary/company/ads` — 1 credits per successful call.

Get ads for a company from the Meta Ad Library with filters and pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `pageId` | No | Meta Ad Library page ID |
| `companyName` | No | Company name |
| `country` | No | Two-letter country code |
| `status` | No | ALL, ACTIVE, or INACTIVE |
| `media_type` | No | ALL, IMAGE, VIDEO, MEME, IMAGE_AND_MEME, or NONE |
| `language` | No | Two-letter language code |
| `sort_by` | No | total_impressions or relevancy_monthly_grouped |
| `start_date` | No | Start date in YYYY-MM-DD format |
| `end_date` | No | End date in YYYY-MM-DD format |
| `cursor` | No | Cursor from the previous response |
| `trim` | No | Set true for a smaller response |

Response: Facebook data.

## Get Facebook company ads with a JSON body

`POST /facebook/adLibrary/company/ads` — 1 credits per successful call.

POST variant for large Meta Ad Library pagination cursors.

Response: Facebook company ads.

## Get Facebook event details

`GET /facebook/event/details` — 1 credits per successful call.

Get a public Facebook event by ID or URL.

| Query parameter | Required | Details |
| --- | --- | --- |
| `id` | No | Facebook event ID |
| `url` | No | Facebook event URL |

Response: Facebook data.

## Get Facebook group

`GET /facebook/group` — 1 credits per successful call.

Get public Facebook group details by URL or numeric group ID.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | No | Facebook group URL |
| `group_id` | No | Numeric Facebook group ID |

Response: Facebook data.

## Get Facebook group posts

`GET /facebook/group/posts` — 1 credits per successful call.

Get public group posts with sorting and cursor pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | No | Facebook group URL |
| `group_id` | No | Numeric Facebook group ID |
| `sort_by` | No | TOP_POSTS, RECENT_ACTIVITY, CHRONOLOGICAL, or CHRONOLOGICAL_LISTINGS |
| `cursor` | No | Cursor from the previous response |

Response: Facebook data.

## Get Facebook post

`GET /facebook/post` — 1 credits per successful call.

Get a public Facebook post or reel, its metrics, media, and author.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Facebook post or reel URL |
| `cache_max_age` | No | Upstream cache age: 1d, 3d, 7d, 14d, or 30d |

Response: Facebook data.

## Get Facebook post comments

`GET /facebook/post/comments` — 1 credits per successful call.

Get comments from a Facebook post or reel by URL or feedback ID.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | No | Facebook post or reel URL |
| `feedback_id` | No | Feedback ID returned by the post endpoint |
| `cursor` | No | Cursor from the previous response |

Response: Facebook data.

## Get Facebook profile

`GET /facebook/profile` — 1 credits per successful call.

Get public Facebook page details, contact fields, follower counts, and ad status.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Facebook profile URL |
| `get_business_hours` | No | Set true to include business hours |
| `include_gated_profile` | No | Set true to include limited gated profile fields |
| `cache_max_age` | No | Upstream cache age: 1d, 3d, 7d, 14d, or 30d |

Response: Facebook data.

## Get Facebook profile events

`GET /facebook/profile/events` — 1 credits per successful call.

Get events published by a public Facebook page.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Public Facebook page URL |
| `cursor` | No | Cursor from the previous response |

Response: Facebook data.

## Get Facebook profile photos

`GET /facebook/profile/photos` — 1 credits per successful call.

Get photos from a public Facebook page with pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Facebook page URL |
| `next_page_id` | No | Next page ID from the previous response |
| `cursor` | No | Cursor from the previous response |

Response: Facebook data.

## Get Facebook profile posts

`GET /facebook/profile/posts` — 1 credits per successful call.

Get public Facebook page posts by URL or page ID with cursor pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | No | Facebook profile URL |
| `pageId` | No | Facebook page ID |
| `cursor` | No | Cursor from the previous response |

Response: Facebook data.

## Get Facebook profile reels

`GET /facebook/profile/reels` — 1 credits per successful call.

Get up to 10 reels from a public Facebook page with pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Facebook page URL |
| `next_page_id` | No | Next page ID from the previous response |
| `cursor` | No | Cursor from the previous response |

Response: Facebook data.

## Get Facebook video transcript

`GET /facebook/post/transcript` — 1 credits per successful call.

Get transcript text from a public Facebook video or reel under two minutes.

| Query parameter | Required | Details |
| --- | --- | --- |
| `url` | Yes | Facebook post or reel URL |
| `cache_max_age` | No | Upstream cache age: 1d, 3d, 7d, 14d, or 30d |

Response: Facebook data.

## Search Facebook Ad Library ads

`GET /facebook/adLibrary/search/ads` — 1 credits per successful call.

Search Meta Ad Library ads by keyword with filters and pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Keyword to search for |
| `sort_by` | No | total_impressions or relevancy_monthly_grouped |
| `search_type` | No | keyword_unordered or keyword_exact_phrase |
| `ad_type` | No | all or political_and_issue_ads |
| `country` | No | Two-letter country code |
| `language` | No | Two-letter language code |
| `status` | No | ALL, ACTIVE, or INACTIVE |
| `media_type` | No | ALL, IMAGE, VIDEO, MEME, IMAGE_AND_MEME, or NONE |
| `start_date` | No | Start date in YYYY-MM-DD format |
| `end_date` | No | End date in YYYY-MM-DD format |
| `cursor` | No | Cursor from the previous response |
| `trim` | No | Set true for a smaller response |

Response: Facebook data.

## Search Facebook Ad Library ads with a JSON body

`POST /facebook/adLibrary/search/ads` — 1 credits per successful call.

POST variant for large Meta Ad Library pagination cursors.

Response: Facebook ads.

## Search Facebook Ad Library companies

`GET /facebook/adLibrary/search/companies` — 1 credits per successful call.

Search Meta Ad Library companies and return page IDs.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Company name to search for |

Response: Facebook data.

## Search Facebook Marketplace

`GET /facebook/marketplace/search` — 1 credits per successful call.

Search Marketplace listings by keyword and coordinates with filters and pagination.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Listing search keyword |
| `lat` | Yes | Search latitude |
| `lng` | Yes | Search longitude |
| `radius_km` | No | Search radius in kilometres |
| `min_price` | No | Minimum price |
| `max_price` | No | Maximum price |
| `count` | No | Number of listings to return |
| `sort_by` | No | suggested, distance_ascend, creation_time_descend, price_ascend, or price_descend |
| `delivery_method` | No | all, local_pickup, or shipping |
| `condition` | No | new, used_like_new, used_good, or used_fair |
| `date_listed` | No | Listing age filter |
| `availability` | No | available, sold, or all |
| `cursor` | No | Cursor from the previous response |

Response: Facebook data.

## Search Facebook Marketplace locations

`GET /facebook/marketplace/location/search` — 1 credits per successful call.

Find Marketplace locations and coordinates for listing search.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Location search query |

Response: Facebook data.

## Search Facebook events

`GET /facebook/events/search` — 1 credits per successful call.

Search public Facebook events by name.

| Query parameter | Required | Details |
| --- | --- | --- |
| `query` | Yes | Event search query |
| `cursor` | No | Cursor from the previous response |

Response: Facebook data.
