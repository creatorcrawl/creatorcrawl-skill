# Workflow: Competitor monitoring

Goal: track a competitor's social media activity over time and surface what's changed.

## When to use this workflow

- User asks "what is [competitor] posting about?"
- User wants to compare their brand vs a competitor
- User sets up ongoing tracking ("alert me when X posts something")
- User asks for competitor's content velocity / engagement trends

## Inputs you need

1. Competitor name or handles (per platform)
2. Which platforms to monitor
3. Optional: timeframe for comparison

## Step-by-step

### Step 1: Identify competitor handles

If user only gave a brand name, find their accounts:

```
tiktok_search_users({ query: 'BrandName' })
youtube_search({ query: 'BrandName official' })
twitter_profile({ handle: 'brandname' })  # guess + verify
```

Verify each: blue check / large follower count / claims of "official" in bio.

### Step 2: Snapshot current state

```
tiktok_profile({ handle })
instagram_profile({ handle })
youtube_channel({ handle })
twitter_profile({ handle })
linkedin_company({ url })
```

Record: followers, post count, engagement baseline.

### Step 3: Pull recent posts (last 30-90 days)

```
tiktok_profile_videos({ handle, limit: 30 })
instagram_posts({ handle, limit: 30 })
youtube_channel_videos({ handle, limit: 30 })
twitter_user_tweets({ handle, limit: 50 })
linkedin_company_posts({ url, limit: 30 })
```

### Step 4: Analyse what they're doing

For each platform, compute:

- **Posting frequency** — posts per week trend (up/down)
- **Content mix** — what topics / formats / hashtags appear most
- **Engagement winners** — top 3 posts by engagement rate (not absolute)
- **Engagement floor** — bottom 3 posts (what's not working)
- **CTAs** — what they're driving traffic to (their site, app downloads, etc)

### Step 5: Detect changes vs baseline

If running for the first time, this is the baseline. Save the date.

If user has a previous snapshot, compare:
- Has follower growth accelerated / slowed?
- Have they shifted topics?
- Are they posting more or less frequently?
- New campaigns / product mentions?

### Step 6: Output a brief

```
# Competitor brief: {Brand}, {date}

## Latest snapshot
- TikTok: 540K followers (+12K in 30d, growth slowing)
- Instagram: 1.2M followers (+18K in 30d)
- YouTube: 230K subs (flat)
- LinkedIn: 89K followers (+3K)

## What they're talking about
- 60% product / feature announcements
- 25% behind-the-scenes / culture
- 15% customer stories

## Top-performing content (30d)
1. "X feature reveal" — TikTok, 2.4M views, 4.5x baseline
2. "Customer story: Y" — LinkedIn, 12K reactions
3. ...

## What's new vs last snapshot ({prev date})
- Started posting LinkedIn ads (4 new ads in library)
- Shifted from product-focused to culture-focused on TikTok
- New hashtag campaign: #BrandThing
```

### LinkedIn Ad Library tracking (bonus)

Run this monthly to surface their paid content:

```
linkedin_ads_search({ query: 'BrandName' })
linkedin_ad({ url: 'https://www.linkedin.com/ad-library/...' })  # for each new ad
```

Compare ad count + creative themes month-over-month.

## Credit cost

15-30 credits per competitor per platform (snapshot + recent posts). Multiple competitors / platforms add up — warn user of cost.

## Common pitfalls

- **Don't confuse brand with sub-brand accounts** — many companies run regional or product-specific handles separately. Confirm with user before scraping the wrong one.
- **LinkedIn ad library shows only currently-active ads** — historic ads are not retrievable.
- **Engagement-rate matters more than absolute numbers** for small brands. A 50-follower account with 25 likes is more engaging than a 5M-follower account with 1K likes.
