# Signal Ops Cleanup Deck Walkthrough

The fixture is intentionally compact, so the review starts with the cases that pull farthest apart.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 163 | ship |
| stress | rename risk | 167 | ship |
| edge | operator cost | 204 | ship |
| recovery | idempotence | 169 | ship |
| stale | dry-run spread | 223 | ship |

Start with `stale` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `dry-run spread` against `dry-run spread`, not the raw score alone.
