# Creator audit

Produce a dated report of a creator’s reach, recent content, and engagement.

Use the relevant `../references/<platform>.md` for exact paths and parameters. Call the REST API directly as described in `../SKILL.md`; read returned values from `data`.

1. Resolve the correct profile for each requested platform. Confirm identities using profile links and bios rather than assuming matching handles belong to the same person.
2. Fetch the profile and one page of recent content using the platform reference. Examples: `/tiktok/profile` and `/tiktok/profile/videos` with `handle`; `/instagram/profile` and `/instagram/user/posts` with `handle`; `/youtube/channel` and `/youtube/channel/videos` with the documented channel identifier.
3. Read `data` from each response. Preserve the source URL and publication dates. Filter to the requested time range and paginate only if necessary.
4. Report followers, sample size, median views, average likes/comments, and posting frequency when available. Engagement estimate: `(likes + comments) / followers * 100`; only compute with present counters and positive followers.
5. Compare themes from captions and transcripts. Separate measured findings from interpretations and report unavailable platforms.

A profile plus one content-list call usually costs two credits per platform. Check the platform reference before estimating a larger run.
