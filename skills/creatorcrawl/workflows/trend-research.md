# Workflow: Trend research

Goal: identify trending hashtags, sounds, topics, or content formats on a given platform.

## When to use this workflow

- User asks "what's trending on TikTok / YouTube / etc?"
- User wants content ideas for their next post
- User researches a niche before launching campaign
- User asks about hashtag performance

## Inputs you need

1. Platform (TikTok, Instagram, YouTube, Twitter)
2. Optional: niche / vertical / keyword to scope to
3. Optional: geography (country / language)

## Step-by-step

### TikTok trends

```
tiktok_popular_hashtags({ country: 'US' })
tiktok_popular_songs({ country: 'US' })
tiktok_popular_videos({ country: 'US' })
tiktok_popular_creators({ country: 'US' })
tiktok_trending_feed({ country: 'US' })
```

If user gave a niche keyword, also run:

```
tiktok_search_hashtag({ keyword: 'fitness' })
tiktok_search_keyword({ query: 'fitness motivation' })
```

### Instagram trends

Instagram doesn't expose a public "trending" endpoint — work around it:

```
instagram_search_reels({ query: 'fitness' })  # find what's surfacing
```

Then sample 10 reels — for each `Post` in `structuredContent.data`, compute `(like_count + comment_count) / author.follower_count` and tally common `hashtags[]` entries.

### YouTube trends

```
youtube_search({ query: 'AI tools' })            # see what's ranking
youtube_search_hashtag({ hashtag: 'aitools' })   # hashtag search
youtube_trending_shorts({ country: 'US' })       # trending shorts
```

### Twitter / X trends

No native trends endpoint in our API. Use search:

```
twitter_user_tweets({ handle: 'someone-in-niche', limit: 20 })
```

Look at top tweets, find recurring themes.

### Reddit trends

```
reddit_subreddit_posts({ subreddit: 'fitness', sort: 'top', timeframe: 'week' })
```

Top posts of the week = what's resonating right now. Returns `{ data: Post[], page, meta }`; sort/inspect by `post.like_count` and `post.comment_count`. Reddit "score" and "upvotes" are normalized into `like_count`.

## Synthesise into a trend report

Output structure:

```
# Trend report: TikTok, US, niche: fitness motivation (2026-05-14)

## Top hashtags this week
| Tag | Views (7d) | Trend |
|---|---|---|
| #gymmotivation | 1.2B | flat |
| #75hard | 380M | rising |
| #cozygym | 92M | rising fast |

## Top sounds
| Sound | Used by | Notes |
|---|---|---|
| "Velocidades" remix | 3.1M videos | usage spiking |
| ...

## Content patterns
- 30-second POV transformation reels dominate
- #cozygym is a counter-trend to high-intensity content — opportunity
- Top sound trends last 7-14 days then fade

## Suggested content ideas
1. ... (3-5 specific ideas)
```

## Credit cost

5-10 credits per trend report depending on platform.

## Common pitfalls

- **Country filtering matters** — "trending" in US is different from UK is different from JP. Always confirm the geography.
- **Trends fade fast** — TikTok sounds last 7-14 days, hashtags 14-30. Mark the date in the output.
- **Distinguish signal from noise** — if a hashtag has 1B views over 5 years, that's not a "trend", that's saturated. Look at recent (7d) growth, not lifetime totals.
