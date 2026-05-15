# Workflow: Influencer prospecting

Goal: find creators who fit a brand brief and produce a vetted shortlist.

## When to use this workflow

- User asks to find influencers in a niche
- User wants to build an outreach list for a campaign
- User asks "who are the top creators for [topic]?"
- User wants to vet a creator before reaching out

## Inputs you need

1. Niche / topic / keyword (e.g. "fitness motivation", "indie hacker", "vegan recipes")
2. Platform(s) to focus on
3. Audience-size range (nano 1K-10K / micro 10K-100K / mid 100K-1M / mega 1M+)
4. Geography (optional)
5. Brief budget context (optional — informs realistic targeting)

## Step-by-step

### Step 1: Surface candidates

**TikTok:**
```
tiktok_search_users({ query: 'fitness motivation' })
tiktok_search_keyword({ query: 'fitness motivation' })  # then map videos → creators
tiktok_popular_hashtags({ country: 'US' })              # find adjacent niche tags
```

**Instagram:**
```
instagram_search_reels({ query: 'fitness motivation' })  # find creators via top reels
```

**YouTube:**
```
youtube_search({ query: 'fitness motivation' })  # filter to channels in results
```

**Twitter:**
```
twitter_user_tweets({ handle })   # if user gave seed creators, walk their replies
```

### Step 2: Filter by audience size

For each candidate, pull profile:

```
tiktok_profile({ handle })
instagram_profile({ handle })
youtube_channel({ handle })
twitter_profile({ handle })
```

Each returns `{ data: Creator, meta }`. Drop any where `data.follower_count` is outside the target range. Also drop `data.is_private === true`.

### Step 3: Score on engagement rate

Fake influence is rampant. Engagement rate is the truth-teller. For each candidate, sample 5 recent posts:

```
tiktok_profile_videos({ handle, limit: 5 })
```

For each `Post` in `structuredContent.data`, compute `(post.like_count + post.comment_count) / creator.follower_count` and average across the 5 posts. Benchmarks:
- Nano (1K-10K): 5-10%+ healthy
- Micro (10K-100K): 3-6%
- Mid (100K-1M): 1-3%
- Mega (1M+): 0.5-1.5%

Drop creators well below these benchmarks — they may have inflated follower counts.

### Step 4: Vet for fit

For each remaining creator:
- Check `data.bio` for brand alignment (note: bio is always `data.bio` now — never `signature` / `biography` / `description` / `about`)
- Scan top 5 recent `post.text` (captions / titles / tweet body) — does the content match the brief?
- Check for red flags (controversy, off-brand topics, `data.created_at` shows new account, inactivity inferred from `post.created_at` gaps)
- Check geography — `data.region` / `data.language` / `data.location` on Creator

### Step 5: Score and rank

For each creator, output:

```
| Handle | Platform | Followers | ER | Avg views | Posts/wk | Geo | Fit |
|---|---|---|---|---|---|---|---|
| @creator1 | TikTok | 240K | 4.8% | 45K | 4 | US | 9/10 |
| @creator2 | Instagram | 89K | 6.1% | 12K | 2 | UK | 7/10 |
```

Sort by fit score, then engagement rate.

### Step 6: Output a brief shortlist

Pick top 10-20 and write a short summary per creator:

```
## Top 10 creators — fitness motivation, US, 50K-500K range

### @creator1 (TikTok, 240K, ER 4.8%)
Posts 4x/week, mostly 30-second talking-head motivation content. Audience skews male 18-34. Top recent post: "5 habits that changed my life" (2.4M views). Bio links to a Linktree with paid coaching. Strong commercial intent — open to brand deals. **Fit: 9/10.**

[link to TikTok profile]
[link to top post]

---

### @creator2 ...
```

## Credit cost

20-50 credits per prospecting run. Scales with how many candidates you vet. Tell the user a typical run is 10-15 credits for a 5-creator shortlist, 30-50 for a 20-creator one.

## Common pitfalls

- **Don't trust follower count alone** — bought followers are common. Engagement rate is the truth.
- **Hashtag search can mislead** — high-volume hashtags surface generic content. Combine with keyword search.
- **Skip creators who never reply to comments** — they won't be responsive partners either. Check `tiktok_comments` on their top post and filter for `is_author_reply: true`.
- **Geography is hard** — check bio + post-language. Not all "US-based" creators actually live there.
- **Avoid micro-influencers with all-promo feeds** — they've already saturated. Look for creators with 70% organic, 30% sponsored.
