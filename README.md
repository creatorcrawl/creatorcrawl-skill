# CreatorCrawl Skill

Agent Skill that teaches Claude, Cursor, Codex, Gemini, Windsurf, Copilot, and 40+ other AI coding agents how to research, audit, and extract data from TikTok, Instagram, YouTube, LinkedIn, Twitter (X), and Reddit using the **CreatorCrawl** social media data API.

Once installed, your agent will autonomously invoke this skill whenever you ask about creators, viral content, hashtag trends, competitor monitoring, influencer prospecting, or anything that needs **real, current social-media data**.

## Install

### Universal — works for any agent (recommended)

```bash
npx --yes skillkit@latest install creatorcrawl/creatorcrawl-skill --all --global --yes
```

This auto-detects supported agents and installs the complete skill folder, including its bundled CreatorCrawl CLI.

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

## After install

The CLI is bundled at `scripts/creatorcrawl`, so no second package installation is required. Node.js 18 or newer must be available.

Set the API key in the agent's environment:

```bash
export CREATORCRAWL_API_KEY=cc_...
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

60+ operations are available through the bundled CLI. See `SKILL.md` for the full reference.

## Links

- [creatorcrawl.com](https://creatorcrawl.com) — sign up
- [API docs](https://creatorcrawl.com/mcp-docs)
- [TypeScript SDK on npm](https://www.npmjs.com/package/@creatorcrawl/sdk)
- [Issues](https://github.com/creatorcrawl/creatorcrawl-skill/issues)

## License

MIT
