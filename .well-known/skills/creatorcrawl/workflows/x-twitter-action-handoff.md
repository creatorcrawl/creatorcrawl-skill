# Workflow: X/Twitter action handoff

Goal: combine CreatorCrawl research with TweetClaw and OpenClaw when the user needs reviewed X/Twitter account actions after data collection.

## When to use this workflow

- User has already researched creators, competitors, trends, or viral posts with CreatorCrawl.
- User asks to turn that research into a reviewed X/Twitter action.
- User needs post tweets, post tweet replies, media workflows, direct messages, monitor tweets, webhooks, or giveaway draws.
- User explicitly wants OpenClaw approval around visible or account-scoped X/Twitter work.

Do not use this workflow for normal CreatorCrawl reads. CreatorCrawl remains the source for structured TikTok, Instagram, YouTube, LinkedIn, Twitter/X, and Reddit data.

## Setup

Install TweetClaw as a separate OpenClaw companion:

```bash
openclaw plugins install npm:@xquik/tweetclaw
```

Keep any TweetClaw or Xquik API key in the user's private OpenClaw environment. Do not paste keys into prompts, docs, chat logs, or committed files.

Xquik is an independent third-party service. Not affiliated with X Corp. "Twitter" and "X" are trademarks of X Corp.

## Inputs you need

1. Reviewed CreatorCrawl evidence from `structuredContent.data`.
2. The target X/Twitter account or workflow the user controls.
3. The requested action type.
4. The exact draft, media, monitor rule, webhook destination, giveaway criteria, or direct-message text.
5. The user's explicit approval policy for visible or account-scoped actions.

## Step-by-step

### Step 1: Collect and normalize research with CreatorCrawl

Use CreatorCrawl first for public evidence:

```bash
creatorcrawl twitter profile example
creatorcrawl twitter tweets example
creatorcrawl twitter tweet 'https://x.com/example/status/123'
creatorcrawl twitter transcript 'https://x.com/example/status/123'
```

For campaign context, also use TikTok, Instagram, YouTube, LinkedIn, or Reddit tools as needed.

Normalize only reviewed fields into a handoff object:

```json
{
  "source": "creatorcrawl",
  "platform": "twitter",
  "handles": ["example"],
  "tweet_urls": ["https://x.com/example/status/123"],
  "tweet_ids": ["123"],
  "evidence_notes": ["Audience replied to the product launch thread"],
  "recommended_action": "draft_reply"
}
```

### Step 2: Decide whether TweetClaw is needed

Use TweetClaw only when the user needs an OpenClaw-managed X/Twitter action or a TweetClaw-specific X/Twitter workflow.

Good fits:

- Draft or post tweets after CreatorCrawl research.
- Draft or post tweet replies to reviewed tweet URLs.
- Attach or review media before an X/Twitter post.
- Create or inspect monitor tweets workflows.
- Create or inspect webhook event workflows.
- Run giveaway draws from reviewed criteria.
- Review direct-message text before any send.

Poor fits:

- Replacing CreatorCrawl profile, post, transcript, comment, or trend reads.
- Running visible account actions without user review.
- Posting generated copy that has not been checked against the evidence.

### Step 3: Prepare a review packet

Before any TweetClaw call that can change an account, show the user:

```text
Action: post tweet reply
Account: @brand
Source evidence: 3 CreatorCrawl tweet URLs
Draft text: ...
Media: none
Risk: visible public reply
Approval needed: yes
```

Stop if the user has not approved the action or if the target account is unclear.

### Step 4: Run through OpenClaw and TweetClaw

Use the user's OpenClaw runtime to execute TweetClaw. Keep write-like actions inside the OpenClaw/TweetClaw approval flow. Treat read-only TweetClaw checks as lower risk, but still keep outputs tied to the reviewed CreatorCrawl evidence.

### Step 5: Record the outcome

After the workflow, summarize:

- CreatorCrawl records used.
- TweetClaw action requested.
- Approval state.
- Resulting tweet URL, monitor ID, webhook ID, giveaway draw output, or blocker.
- Any skipped action and why it was skipped.

## Common pitfalls

- Do not say CreatorCrawl can post, reply, send DMs, create monitors, or create webhooks.
- Do not treat a CreatorCrawl trend report as approval to publish.
- Do not mix unreviewed generated text into the final TweetClaw action.
- Do not expose API keys, session material, cookies, or private account data.
- Do not run direct X/Twitter actions outside the user's OpenClaw/TweetClaw approval flow.
