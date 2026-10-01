# API behavior

## Authentication and verification

Send `x-api-key: $CREATORCRAWL_API_KEY`. Verify with `GET /validate-key`, which returns `{ "success": true, "authenticated": true }` and costs zero credits. An OAuth access token can instead be sent as a Bearer token. Keep credentials in the caller's environment or secret store.

Do not call `/credits/status` with an API key: it requires an app session. Review balance in the app dashboard; successful data calls expose `X-Credits-Remaining` and `X-Credits-Used` response headers. If headers are needed, write them to a temporary file with curl's `--dump-header`, then remove it after reading.

## Credits

Most referenced endpoints cost one credit per successful call. `/tiktok/creator/transcripts` costs 11 credits, even with a smaller requested count; `/twitter/videos/search` costs three. `/tiktok/profile/region` currently costs zero. A request for another page is another call. Costs are listed in each platform reference and can change; check the current pricing before large runs. Failed requests are not charged by the API credit middleware.

New accounts receive 50 free credits. Current credit packs: $29 for 5,000 credits, $99 for 20,000, or $299 for 100,000. Credits are not equivalent to a fixed number of requests. [Pricing](https://creatorcrawl.com/#pricing).

## Response fields

Normalized `/api/<platform>/...` data endpoints use `{ data, page?, meta }`. Creator fields include `handle`, `name`, `bio`, `follower_count`, `following_count`, `post_count`, and `url` when available. Post fields include `text`, `url`, `created_at`, `like_count`, `comment_count`, `view_count`, `share_count`, and `author` when available. Transcripts contain `text`, `language`, and optional timed `segments`. Inspect the live response schema for the exact endpoint; utility routes can return different objects.

`meta.fetched_at` is retrieval time, not content publication time. Missing or omitted fields indicate unavailable data. Avoid treating missing counters as zero. Example snippets and workflow formulas are not evidence of actual performance.

## Errors and retries

Error bodies vary: some use `{ success: false, error: "..." }`, others use `{ error: { code, message } }`. Use HTTP status plus the actual body.

- 400/422: correct the documented inputs before retrying.
- 401/403: check credential validity or whether the source content is restricted. Do not repeatedly retry unchanged authentication or a private profile.
- 402: insufficient credits; stop and direct the user to billing.
- 404: content is unavailable; report it and continue other requested subjects.
- 429: respect `Retry-After` when present; avoid automatic pagination storms.
- 5xx: report partial results. Retry a transient failure at most once with a short delay; do not repeatedly run the same unavailable upstream call.

For paginated lists, use only the documented cursor parameter for that endpoint and stop at the requested sample size. Calculate `(likes + comments) / followers * 100` only when all inputs are present and followers are positive; label it as an engagement estimate.
