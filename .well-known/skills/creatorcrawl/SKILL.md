---
name: creatorcrawl
description: Use this skill whenever the user wants to research, audit, analyse, monitor, scrape, or extract current structured data from TikTok, Instagram, YouTube, LinkedIn, Twitter/X, or Reddit. It bundles the CreatorCrawl CLI for creator research, influencer audits, viral-content analysis, trends, competitor monitoring, transcripts, comments, ads, profiles, posts, social listening, and cross-platform intelligence.
---

# CreatorCrawl

Structured social media data for AI agents. This skill teaches you how to use CreatorCrawl to research, audit, and extract data from TikTok, Instagram, YouTube, LinkedIn, Twitter/X, and Reddit.

## Breaking changes (2026-05)

CreatorCrawl now returns a **unified, normalized response envelope** across every endpoint and every platform. Old platform-native shapes (`user.uniqueId`, `edge_followed_by.count`, `legacy.screen_name`, `signature`, `biography`, Unix timestamps, etc.) are gone.

- All responses are wrapped: `{ data, page?, meta }`
- Single-item endpoints return `data: Creator | Post | Comment | Transcript`
- List endpoints return `data: T[]`, optional `page: { cursor, has_more, total? }`, and `meta: { platform, fetched_at }`
- Fields are **snake_case** and consistent across all 6 platforms (e.g. `follower_count`, `like_count`, `view_count`, `comment_count`)
- Dates are **ISO 8601 UTC strings** (e.g. `"2026-05-14T18:32:00Z"`), not Unix epoch ints
- MCP tool results use the **dual-response pattern**: `content` is a short LLM-readable summary; **`structuredContent` holds the full typed payload**. Agents should read `structuredContent` for programmatic access — never re-parse `content`.

See the "Response shape" section below for the canonical types.

## When to use this skill

Invoke this skill whenever the user asks you to:

- **Research a creator** across one or more platforms (followers, engagement, content style)
- **Audit a profile** (TikTok, Instagram, YouTube, LinkedIn, Twitter, Reddit)
- **Analyse viral content** (why it went viral, engagement patterns, comments)
- **Track competitors** on social media
- **Find influencers** for marketing campaigns
- **Research trending hashtags, sounds, topics, or formats** on any platform
- **Extract transcripts** from TikTok, YouTube, Instagram reels, or Twitter videos
- **Scrape comments** from any post or video
- **Look up LinkedIn ads** in the ad library
- **Monitor a subreddit** or specific Reddit post
- **Search across a platform** by keyword, hashtag, or user

If the user asks any social-media question that needs **real, current data** rather than your training-data knowledge, use this skill.

## Bundled CLI

This skill includes a self-contained CLI at `scripts/creatorcrawl`. Resolve the path relative to this `SKILL.md` and invoke that file directly. Do not assume a global installation and do not configure an MCP server.

```bash
<skill-dir>/scripts/creatorcrawl --help
<skill-dir>/scripts/creatorcrawl tiktok profile khaby.lame
<skill-dir>/scripts/creatorcrawl youtube transcript 'https://youtu.be/...'
```

The CLI requires Node.js 18 or newer. It reads `CREATORCRAWL_API_KEY` from the environment or accepts `--api-key`. Never print the key or persist it without explicit instruction.

Default output is compact JSON. Add `--pretty` for human-readable output and use `jq` for deterministic filtering when available.

## TypeScript SDK

If the user wants to write code, use `@creatorcrawl/sdk` on npm:

```bash
npm install @creatorcrawl/sdk
```

```ts
import { CreatorCrawl } from '@creatorcrawl/sdk'

const cc = new CreatorCrawl({ apiKey: process.env.CREATORCRAWL_API_KEY! })

const profile = await cc.tiktok.profile({ handle: 'khaby.lame' })
const transcript = await cc.youtube.transcript({ url: 'https://youtu.be/...' })
const company = await cc.linkedin.company({ url: 'https://www.linkedin.com/company/openai' })
```

The user gets an API key at https://creatorcrawl.com — 250 free credits on signup, no card required.

## Response shape

Every endpoint returns the same envelope. Fields are snake_case, dates are ISO 8601 UTC, and the same `Creator` / `Post` / `Comment` types apply to TikTok, Instagram, Twitter, YouTube, Reddit, and LinkedIn.

### Envelope

```ts
// single item
{ data: T, meta: { platform: 'tiktok' | 'instagram' | 'twitter' | 'youtube' | 'reddit' | 'linkedin', fetched_at: string } }

// list
{
  data: T[],
  page?: { cursor: string | null, has_more: boolean, total?: number },
  meta: { platform, fetched_at }
}
```

### Creator

```ts
{
  id: string,
  handle: string,              // e.g. "khaby.lame" — never user.uniqueId / legacy.screen_name / data.user.username
  name: string,                // display name
  bio: string,                 // never signature / biography / description / about
  url: string,
  avatar_url: string,
  verified: boolean,
  verified_tier?: 'standard' | 'blue' | 'gov' | 'business' | 'creator',
  follower_count: number,      // never edge_followed_by.count / followers_count / followerCount
  following_count?: number,
  post_count?: number,
  total_likes?: number,
  view_count?: number,
  external_url?: string,
  is_private?: boolean,
  is_business?: boolean,
  category?: string,
  language?: string,
  region?: string,
  location?: string,
  created_at?: string,         // ISO 8601 UTC, never Unix timestamp
  platform: 'tiktok' | 'instagram' | 'twitter' | 'youtube' | 'reddit' | 'linkedin'
}
```

### Post

```ts
{
  id: string,
  url: string,
  type: 'video' | 'image' | 'carousel' | 'text' | 'short' | 'reel' | 'tweet' | 'ad',
  created_at: string,          // ISO 8601 UTC
  text: string,                // caption / title / tweet body
  media: { type, url, thumbnail_url?, width?, height?, duration_seconds? }[],
  view_count?: number,
  like_count: number,
  comment_count: number,
  share_count?: number,
  save_count?: number,
  author: MiniCreator,         // { id, handle, name, avatar_url, verified, platform }
  hashtags?: string[],
  mentions?: string[],
  is_pinned?: boolean,
  is_ad?: boolean,
  is_sponsored?: boolean,
  is_ai_generated?: boolean,
  duration_seconds?: number,
  music?: { id, title, author, url? },
  platform
}
```

### Comment

```ts
{
  id: string,
  text: string,
  created_at: string,
  like_count: number,
  reply_count?: number,
  author: MiniCreator,
  parent_id?: string,
  is_pinned?: boolean,
  is_author_reply?: boolean,
  platform
}
```

### Transcript

```ts
{
  language: string,            // e.g. "en"
  text: string,                // full transcript
  segments?: { start_seconds: number, end_seconds: number, text: string }[]
}
```

### MCP dual-response

Every MCP tool returns both:

- `content` — a short, human/LLM-readable summary string (good for chat output)
- `structuredContent` — the **full typed envelope above**. Always prefer this for programmatic access (filtering, ranking, scoring, calculations).

```ts
// pseudocode
const res = await mcp.call('tiktok_profile', { handle: 'khaby.lame' })
const creator = res.structuredContent.data       // Creator
const followers = creator.follower_count          // number
const isVerified = creator.verified               // boolean
```

## Common workflows

Detailed workflow guides live in the `workflows/` directory. Read the one that matches the task:

- **Creator audit** — `workflows/creator-audit.md`. Cross-platform creator presence + stats.
- **Viral content analyser** — `workflows/viral-content-analyser.md`. Why a post went viral.
- **Trend research** — `workflows/trend-research.md`. Find trending hashtags, sounds, formats.
- **Competitor monitoring** — `workflows/competitor-monitoring.md`. Track competitor accounts over time.
- **Influencer prospecting** — `workflows/influencer-prospecting.md`. Find creators for partnerships.

## CLI reference

### TikTok
- `tiktok_profile` — user info, stats, recent videos
- `tiktok_profile_videos` — paginated videos for a profile
- `tiktok_video_info` — single video metadata + stats
- `tiktok_transcript` — video transcript
- `tiktok_search_keyword` — keyword search
- `tiktok_search_users` — user search
- `tiktok_comments` — comments on a video
- `tiktok_popular_creators`, `tiktok_popular_hashtags`, `tiktok_popular_songs`, `tiktok_popular_videos`, `tiktok_trending_feed` — trending discovery

### Instagram
- `instagram_profile`, `instagram_basic_profile` — profile data
- `instagram_posts`, `instagram_reels` — content lists
- `instagram_post_info` — single post
- `instagram_comments` — comments
- `instagram_transcript` — reel transcript
- `instagram_story_highlights`, `instagram_highlights_details` — stories
- `instagram_search_reels` — reel search
- `instagram_embed` — embeddable post HTML

### YouTube
- `youtube_channel`, `youtube_channel_videos`, `youtube_channel_shorts` — channel data
- `youtube_video` — single video info
- `youtube_search`, `youtube_search_hashtag` — search
- `youtube_transcript` — video transcript
- `youtube_comments` — comments
- `youtube_playlist` — playlist contents
- `youtube_trending_shorts` — trending shorts

### LinkedIn
- `linkedin_profile` — person profile
- `linkedin_company` — company page
- `linkedin_company_posts` — company posts
- `linkedin_post` — single post
- `linkedin_ads_search`, `linkedin_ad` — LinkedIn Ad Library

### Twitter / X
- `twitter_profile` — user profile
- `twitter_tweet` — single tweet
- `twitter_user_tweets` — user's tweets
- `twitter_transcript` — video tweet transcript
- `twitter_community`, `twitter_community_tweets` — communities

### Reddit
- `reddit_search` — site-wide search
- `reddit_subreddit_details`, `reddit_subreddit_posts`, `reddit_subreddit_search` — subreddit data
- `reddit_post_comments` — comments on a post

## Important notes for agents

1. **Always check if the MCP server is available first** — call any `creatorcrawl_*` or `tiktok_*` etc tool. If the tools aren't present, the user hasn't installed the MCP server. In that case either: (a) tell them how to install it (see Option A above), or (b) suggest they use the SDK (Option B) and write a script.

2. **Each call costs credits.** The user has a credit budget. Be efficient — don't make redundant calls. If you've already fetched a profile, reuse the data.

3. **Respect rate limits.** If you hit a rate-limit error (HTTP 429), back off and retry, or batch differently.

4. **Transcripts may fail** for videos without captions. Handle gracefully — fall back to the post description or comments.

5. **Public data only.** CreatorCrawl scrapes public social media. Private accounts return errors. Don't try to extract data the user shouldn't have access to.

## Quickstart for new users

If the user is new to CreatorCrawl:

1. They sign up at https://creatorcrawl.com (250 free credits, no card)
2. They copy their API key from the dashboard
3. They install either the MCP server or the SDK (Option A or B above)
4. They ask you their social-media question — you use the tools

That's it.

## Links

- Marketing site: https://creatorcrawl.com
- App / dashboard: https://app.creatorcrawl.com
- API docs: https://creatorcrawl.com/mcp-docs
- MCP endpoint: https://app.creatorcrawl.com/api/mcp
- TypeScript SDK on npm: https://www.npmjs.com/package/@creatorcrawl/sdk
- TypeScript SDK source: https://github.com/creatorcrawl/sdk-typescript
- This skill's source: https://github.com/creatorcrawl/creatorcrawl-skill
- Pricing: https://creatorcrawl.com/#pricing
