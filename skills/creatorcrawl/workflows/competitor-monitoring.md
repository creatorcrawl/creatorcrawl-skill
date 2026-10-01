# Competitor comparisons

Compare competitor accounts from current snapshots or snapshots the user has already supplied.

Use the relevant `../references/<platform>.md` for exact paths and parameters. Call the REST API directly as described in `../SKILL.md`; read returned values from `data`.

1. Resolve the official accounts for each named competitor. Confirm regional accounts and sub-brands before fetching.
2. Fetch profiles and a bounded sample of recent content with the relevant platform endpoints.
3. Compare followers, posting frequency, median views, engagement estimates, recurring topics, and formats using the same timeframe and formulas.
4. Measure change only if the user supplies an earlier snapshot or authorizes saving one. A single request cannot establish follower growth.
5. Present a dated comparison with source URLs, sample sizes, missing data, and suggested follow-up.

This workflow does not create scheduled jobs or monitoring subscriptions. Scheduling requires the user’s chosen automation tool and explicit instructions. Estimate cost as the sum of endpoint calls and pages per competitor.
