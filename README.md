# CreatorCrawl Skill

Agent Skill that teaches Claude, Cursor, Codex, Gemini, Windsurf, Copilot, and 40+ other AI coding agents how to research, audit, and extract data from TikTok, Instagram, YouTube, LinkedIn, Twitter (X), and Reddit using the **CreatorCrawl** social media data API.

Once installed, your agent will autonomously invoke this skill whenever you ask about creators, viral content, hashtag trends, competitor monitoring, influencer prospecting, or anything that needs **real, current social-media data**.

## Install

### Universal — works for any agent (recommended)

```bash
npx skillkit@latest install creatorcrawl/creatorcrawl-skill
```

This auto-detects every AI agent on your machine and installs the skill to all of them.

Alternative universal installer:

```bash
npx agent-skills-cli add creatorcrawl/creatorcrawl-skill
```

### Per-agent — manual install

| Agent | Command |
|---|---|
| Claude Code | `git clone https://github.com/creatorcrawl/creatorcrawl-skill ~/.claude/skills/creatorcrawl` |
| Cursor | `git clone https://github.com/creatorcrawl/creatorcrawl-skill ~/.cursor/skills/creatorcrawl` |
| Codex / Gemini CLI / Kiro / Antigravity | `git clone https://github.com/creatorcrawl/creatorcrawl-skill ~/.agents/skills/creatorcrawl` |
| Windsurf | `git clone https://github.com/creatorcrawl/creatorcrawl-skill ~/.codeium/windsurf/skills/creatorcrawl` |
| OpenClaw | `clawhub install creatorcrawl` |
| Aider | `git clone https://github.com/creatorcrawl/creatorcrawl-skill ~/.aider/skills/creatorcrawl` |

Restart your agent (or start a new session). The skill will activate automatically when your prompt matches its trigger description.

## After install — set up the data source

The skill teaches your agent **how** to use CreatorCrawl. You also need the data source itself, which is one of:

### CreatorCrawl MCP server (recommended for chat-driven workflows)

```bash
# Claude Code
claude mcp add creatorcrawl --transport streamable-http \
  --header x-api-key=YOUR_API_KEY \
  -- https://app.creatorcrawl.com/api/mcp
```

For Cursor / Windsurf, add to your `mcp.json`:

```json
{
  "mcpServers": {
    "creatorcrawl": {
      "type": "streamable-http",
      "url": "https://app.creatorcrawl.com/api/mcp",
      "headers": { "x-api-key": "YOUR_API_KEY" }
    }
  }
}
```

### CreatorCrawl SDK (for code-driven workflows)

```bash
npm install @creatorcrawl/sdk
```

```ts
import { CreatorCrawl } from '@creatorcrawl/sdk'

const cc = new CreatorCrawl({ apiKey: process.env.CREATORCRAWL_API_KEY! })
const profile = await cc.tiktok.profile({ handle: 'khaby.lame' })
```

Get an API key at [creatorcrawl.com](https://creatorcrawl.com). **250 credits free on signup, no card required.**

## What the skill teaches the agent

The agent reads `SKILL.md` plus on-demand workflow guides in `workflows/`:

- `workflows/creator-audit.md` — cross-platform creator presence and stats
- `workflows/viral-content-analyser.md` — why a post went viral
- `workflows/trend-research.md` — trending hashtags, sounds, topics
- `workflows/competitor-monitoring.md` — track competitor accounts
- `workflows/influencer-prospecting.md` — find creators for partnerships

## Six platforms covered

- **TikTok** — profile, videos, comments, transcripts, search, trending
- **Instagram** — profile, posts, reels, comments, transcripts, stories, search
- **YouTube** — channel, videos, shorts, transcripts, comments, playlists, search
- **LinkedIn** — profile, company, posts, ad library
- **Twitter / X** — profile, tweets, transcripts, communities
- **Reddit** — search, subreddits, post comments

60+ tools total. See `SKILL.md` for the full reference.

## Links

- [creatorcrawl.com](https://creatorcrawl.com) — sign up
- [API docs](https://creatorcrawl.com/mcp-docs)
- [TypeScript SDK on npm](https://www.npmjs.com/package/@creatorcrawl/sdk)
- [Issues](https://github.com/creatorcrawl/creatorcrawl-skill/issues)

## License

MIT
