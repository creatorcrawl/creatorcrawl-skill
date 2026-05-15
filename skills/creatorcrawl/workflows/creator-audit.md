# Workflow: Creator audit

Goal: produce a structured audit of a creator's social-media presence and reach.

## When to use this workflow

- User asks "audit [creator]" or "research [creator]"
- User asks for stats on a TikTok / Instagram / YouTube / etc account
- User wants to know if a creator is a good influencer fit
- User wants a snapshot of a creator's content style and engagement

## Inputs you need

Ask the user for:

1. The creator's handle, profile URL, or name
2. Which platforms to audit (default: all where they have a presence)
3. Optional: timeframe (last 30 days, last 90 days, etc)

## Step-by-step

### Step 1: Find handles per platform

If the user gave one handle, try it on all six platforms. Handles often (but not always) match. Use search tools as fallback:

- `tiktok_search_users` — find by name on TikTok
- `instagram_basic_profile` — quick profile check
- `youtube_search` — find channel by name
- `twitter_profile` — by handle
- `linkedin_profile` — by full LinkedIn URL only

### Step 2: Pull profile data per platform

```
tiktok_profile({ handle })
instagram_profile({ handle })
youtube_channel({ handle })
twitter_profile({ handle })
linkedin_profile({ url })
```

Each returns `{ data: Creator, meta }`. Read from `structuredContent.data`:

- `data.handle` — canonical handle
- `data.name` — display name
- `data.bio` — bio / about text
- `data.follower_count`, `data.following_count`, `data.post_count`
- `data.verified` (boolean) + optional `data.verified_tier` ('standard' | 'blue' | 'gov' | 'business' | 'creator')
- `data.avatar_url`
- `data.created_at` (ISO 8601 UTC)

### Step 3: Pull recent content

```
tiktok_profile_videos({ handle, limit: 10 })
instagram_posts({ handle, limit: 10 })
youtube_channel_videos({ handle, limit: 10 })
twitter_user_tweets({ handle, limit: 10 })
linkedin_company_posts({ url, limit: 10 })  # for companies
```

List endpoints return `{ data: Post[], page: { cursor, has_more }, meta }`. Each `Post` exposes `like_count`, `comment_count`, `view_count`, `share_count`, `save_count`, `created_at` (ISO 8601), `type`, `hashtags`, `text`.

### Step 4: Calculate engagement metrics

For the recent content from step 3, average across the `Post[]` returned in `structuredContent.data`:

- Likes per post — `post.like_count`
- Comments per post — `post.comment_count`
- Engagement rate — `(post.like_count + post.comment_count) / creator.follower_count`
- Posting frequency — derive from `post.created_at` deltas
- Content type breakdown — group by `post.type` (`video` / `image` / `carousel` / `text` / `short` / `reel` / `tweet`)

### Step 5: Output structured report

Present back to the user in this format:

```
# {Creator Name} — Audit

## Reach
| Platform | Followers | Posts | Avg engagement | Posting freq |
|---|---|---|---|---|
| TikTok | 1.2M | 234 | 45K likes/video | 3/week |
| Instagram | 450K | 1.1K | 12K likes/post | 1/week |
| YouTube | 80K | 56 | 8K views/video | 1/month |
| ...

## Content style
[2-3 sentence summary based on recent posts]

## Verification status (from `data.verified` / `data.verified_tier`)
- TikTok: verified (creator)
- Instagram: verified (blue)
- YouTube: not verified
- ...

## Recent topics
[Hashtags / themes from recent content]
```

## Credit cost

Roughly 6-15 credits per audit (1 per profile + 1 per content-list fetch). Tell the user the estimated cost before running if their balance is low.

## Common pitfalls

- **Private accounts** return errors. Note them but continue with public platforms.
- **Different handle across platforms** is common. Don't assume. Use search when one platform fails.
- **YouTube channels** sometimes use `@handle` and sometimes `UC...` channel IDs. Try the handle first.
- **LinkedIn requires the full URL** like `https://www.linkedin.com/in/username` or `/company/companyname`, not just a handle.
