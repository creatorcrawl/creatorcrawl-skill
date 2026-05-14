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

Each returns: follower count, following count, post count, bio, verification status, profile pic.

### Step 3: Pull recent content

```
tiktok_profile_videos({ handle, limit: 10 })
instagram_posts({ handle, limit: 10 })
youtube_channel_videos({ handle, limit: 10 })
twitter_user_tweets({ handle, limit: 10 })
linkedin_company_posts({ url, limit: 10 })  # for companies
```

### Step 4: Calculate engagement metrics

For the recent content from step 3, average:

- Likes per post
- Comments per post
- Engagement rate (likes + comments) / followers
- Posting frequency (posts per week)
- Content type breakdown (videos vs photos vs text)

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

## Verification status
- TikTok: verified
- Instagram: verified
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
