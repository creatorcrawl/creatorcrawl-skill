# Workflow: Viral content analyser

Goal: explain why a specific piece of content went viral and extract reusable patterns.

## When to use this workflow

- User shares a link to a viral video/post and asks "why did this work?"
- User asks for analysis of trending content in a niche
- User wants to understand hook, structure, or messaging of a viral piece
- User asks "what made [creator]'s recent post go viral?"

## Inputs you need

1. The URL or platform handle + post ID of the content
2. Optional: comparison context (e.g. "vs their average post")

## Step-by-step

### Step 1: Fetch the post itself

Match platform to tool:

```
tiktok_video_info({ url })          # TikTok video
instagram_post_info({ url })        # Instagram post
youtube_video({ url })              # YouTube video
twitter_tweet({ url })              # Tweet
linkedin_post({ url })              # LinkedIn post
```

Extract: title/caption, posted time, view count, like count, comment count, share count.

### Step 2: Fetch the transcript (if video)

```
tiktok_transcript({ url })
instagram_transcript({ url })       # for reels
youtube_transcript({ url })
twitter_transcript({ url })         # for video tweets
```

The transcript is gold — it's where you find the **hook** (first 3 seconds) and **call to action**.

### Step 3: Fetch comments for sentiment + amplifiers

```
tiktok_comments({ url, limit: 100 })
instagram_comments({ url, limit: 100 })
youtube_comments({ url, limit: 100 })
reddit_post_comments({ url, limit: 100 })
```

Skim top comments — they reveal:
- What viewers found memorable (most-liked comments echo the moment that landed)
- Repeated questions (signal for follow-up content)
- Negative reactions (failure modes to avoid)

### Step 4: Compare to creator's baseline

Fetch the creator's recent posts:

```
tiktok_profile_videos({ handle, limit: 20 })
```

Compute their median view/like count. If the viral post is 5-10x baseline, it's actually viral. If 1-2x, it's just slightly above-average.

### Step 5: Diagnose what worked

Structure analysis around these levers:

| Lever | Signal in data |
|---|---|
| Hook | First sentence of transcript — does it pattern-interrupt? |
| Timing | Posted day/hour vs creator's usual schedule |
| Topic | Trend-piggyback? Check if hashtags appear in `tiktok_popular_hashtags` |
| Format | Length, pacing, music (if TikTok), thumbnail style |
| Emotional pull | Top-liked comments — what emotion are they expressing? |
| Algorithm boost | Engagement rate in first hour (if data shows it) |

### Step 6: Output the analysis

```
# Why "{post title}" went viral

## The numbers
- Views: 4.2M (vs creator average of 280K — 15x baseline)
- Likes: 510K
- Comments: 8.2K
- Posted: Tuesday 7pm PT

## What worked
1. **Hook**: "Three words my therapist will never let me say" — pattern interrupt, list curiosity gap
2. **Trend timing**: rode #therapytok at peak (240M views in last 7 days)
3. **Format**: 22-second talking head, no music, direct eye contact
4. **Comment community**: Top comment 'I'm crying' got 8K likes — emotional resonance compounded reach

## What to copy
- List-of-three hook with curiosity gap
- 20-30 second length, direct delivery
- Tap a #therapytok-adjacent trend
```

## Credit cost

5-10 credits per analysis (1 video info + 1 transcript + 1 comments fetch + optional 1-2 baseline calls).

## Common pitfalls

- **Transcripts fail** for videos without captions. Use the caption text instead, or watch via description.
- **View counts** on Instagram private accounts return errors.
- **Don't over-attribute** — sometimes "viral" is just a creator's first post in a topic that the algorithm decided to seed. Note when the signal is weak.
