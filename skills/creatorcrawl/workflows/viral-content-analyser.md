# Viral content analysis

Explain a post’s performance using returned post data, transcript, comments, and a creator baseline.

Use the relevant `../references/<platform>.md` for exact paths and parameters. Call the REST API directly as described in `../SKILL.md`; read returned values from `data`.

1. Fetch the post using the relevant `/tiktok/video`, `/instagram/post`, `/youtube/video`, `/twitter/tweet`, or `/linkedin/post` endpoint with its documented parameters.
2. For video, fetch a transcript when available. Example: `/youtube/video/transcript` with `url`. If it is unavailable, work from the caption and state the limitation.
3. Fetch one page of comments when the platform supports them, then inspect recurring questions and the most liked comments.
4. Fetch recent creator posts for a baseline. Calculate the median of available view counts and the post’s multiple of that median; do not call it viral just because its absolute count is large.
5. Report the numbers, opening hook, themes, audience reactions, and reusable ideas. Describe possible explanations as interpretations; public metrics cannot prove algorithmic causation.

Typically three to five one-credit calls plus any requested pagination. Check endpoint costs before execution.
