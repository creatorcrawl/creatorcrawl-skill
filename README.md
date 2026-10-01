# CreatorCrawl Skill

Agent-agnostic skill for researching, auditing, and extracting current data from TikTok, Instagram, YouTube, LinkedIn, Twitter/X, and Reddit using CreatorCrawl.

Once installed, your agent will autonomously invoke this skill whenever you ask about creators, viral content, hashtag trends, competitor monitoring, influencer prospecting, or anything that needs **real, current social-media data**.

## Install

Install with the same multi-agent installer used by SocialClaw:

```bash
npx skills add creatorcrawl/creatorcrawl-skill
```

Choose your coding agent and project or global installation. The bundle includes
`SKILL.md`, five workflow guides, and a self-contained CreatorCrawl CLI. Node.js 18 or
newer is required; no separate npm package installation is needed.

For a non-interactive global installation:

```bash
npx skills add creatorcrawl/creatorcrawl-skill --skill creatorcrawl --all --global --yes
```

## Authenticate

Ask your agent to run the bundled CLI's `auth login` command. It opens CreatorCrawl in
your browser or displays a sign-in link. Sign in or create an account, approve access,
and return to your agent. Credentials refresh automatically; no API key is required. For Codex, a project installation can be used directly:

```bash
node .agents/skills/creatorcrawl/scripts/creatorcrawl.cjs auth login
node .agents/skills/creatorcrawl/scripts/creatorcrawl.cjs auth status
```

For headless agents and CI, set `CREATORCRAWL_API_KEY` in the agent environment.
Environment credentials take precedence over saved credentials. New accounts include
free credits and require no card.

## Standalone CLI

The macOS/Linux installer also installs a global `creatorcrawl` command and provides
Node.js when necessary:

```bash
curl -fsSL https://creatorcrawl.com/install.sh | sh
creatorcrawl auth login
```

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
