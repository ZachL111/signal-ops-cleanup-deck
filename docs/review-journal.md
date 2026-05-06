# Review Journal

The review surface for `signal-ops-cleanup-deck` is deliberately narrow: one fixture, one scoring rule, and one local check.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 163, lane `ship`
- `stress`: `rename risk`, score 167, lane `ship`
- `edge`: `operator cost`, score 204, lane `ship`
- `recovery`: `idempotence`, score 169, lane `ship`
- `stale`: `dry-run spread`, score 223, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
