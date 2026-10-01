# Influencer prospecting

Find and assess creators against the user’s niche, geography, platform, and partnership criteria.

Use the relevant `../references/<platform>.md` for exact paths and parameters. Call the REST API directly as described in `../SKILL.md`; read returned values from `data`.

1. Establish the requested niche, platforms, audience geography, and shortlist size from the prompt. Use documented discovery endpoints such as `/tiktok/search/users`, `/tiktok/search/keyword`, `/youtube/search`, or `/instagram/reels/search`.
2. Start with one search page. Fetch candidate profiles only when their content appears relevant.
3. Review a bounded sample of recent posts for topic fit, consistency, and engagement. Do not treat creator location as proof of audience location.
4. Rank candidates using criteria you can measure, and explain each score. Mark unavailable contact or demographic information as unknown.
5. Return a shortlist with source URLs, evidence, sample sizes, and caveats. Do not message creators as part of research.

Budget search calls plus profile and content calls for the candidates actually reviewed; stop at the requested shortlist size.
