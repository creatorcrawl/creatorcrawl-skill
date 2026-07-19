# CreatorCrawl Skill

Agent-agnostic skill for researching, auditing, and extracting current data from TikTok, Instagram, YouTube, LinkedIn, Twitter/X, and Reddit using CreatorCrawl.

Once installed, your agent will autonomously invoke this skill whenever you ask about creators, viral content, hashtag trends, competitor monitoring, influencer prospecting, or anything that needs **real, current social-media data**.

## Install

Use the hosted one-shot installer:

```bash
curl -fsSL https://creatorcrawl.com/install.sh | sh
```

It installs the CLI, detects supported agents, installs or updates this standalone skill, provides a runtime when necessary, and opens secure browser-based OAuth login in interactive terminals.

For headless agents and CI, inject an existing API key:

```bash
curl -fsSL https://creatorcrawl.com/install.sh |
  CREATORCRAWL_API_KEY="$CREATORCRAWL_API_KEY" sh
```

## After install

Check authentication:

```bash
creatorcrawl auth status
```

Use `creatorcrawl auth login` to replace a saved credential. Environment credentials take precedence over saved credentials. Get an API key at [creatorcrawl.com](https://creatorcrawl.com). New accounts include free credits and require no card.

## What the skill teaches the agent

The agent reads `SKILL.md` plus on-demand workflow guides in `workflows/`:

- `workflows/creator-audit.md` - cross-platform creator presence and stats
- `workflows/viral-content-analyser.md` - why a post went viral
- `workflows/trend-research.md` - trending hashtags, sounds, topics
- `workflows/competitor-monitoring.md` - track competitor accounts
- `workflows/influencer-prospecting.md` - find creators for partnerships
- `workflows/x-twitter-action-handoff.md` - prepare reviewed TweetClaw actions after CreatorCrawl research

## Six platforms covered

- **TikTok** - profile, videos, comments, transcripts, search, trending
- **Instagram** - profile, posts, reels, comments, transcripts, stories, search
- **YouTube** - channel, videos, shorts, transcripts, comments, playlists, search
- **LinkedIn** - profile, company, posts, ad library
- **Twitter / X** - profile, tweets, transcripts, communities
- **Reddit** - search, subreddits, post comments

60+ operations are available through the bundled CLI. See `SKILL.md` for the full reference.

## Optional X/Twitter action handoff

CreatorCrawl remains the source for structured social-media research. When a user separately requests reviewed X/Twitter account actions, use TweetClaw as an optional OpenClaw companion.

```bash
openclaw plugins install npm:@xquik/tweetclaw
```

See `skills/creatorcrawl/workflows/x-twitter-action-handoff.md` for the review packet and execution boundary. Xquik is an independent third-party service. Not affiliated with X Corp. "Twitter" and "X" are trademarks of X Corp.

## Links

- [creatorcrawl.com](https://creatorcrawl.com) - sign up
- [API docs](https://creatorcrawl.com/mcp-docs)
- [TypeScript SDK on npm](https://www.npmjs.com/package/@creatorcrawl/sdk)
- [Issues](https://github.com/creatorcrawl/creatorcrawl-skill/issues)

## License

MIT
