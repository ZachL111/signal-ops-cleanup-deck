# signal-ops-cleanup-deck

`signal-ops-cleanup-deck` explores automation with a small JavaScript codebase and local fixtures. The technical goal is to develop a JavaScript command-oriented project for cleanup scenarios with deny and allow fixtures, explainable decision traces, and local-only command execution.

## Why It Exists

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Signal Ops Cleanup Deck Review Notes

Start with `dry-run spread` and `dry-run spread`. Those cases create the widest score spread in this repo, so they are the best quick check when the model changes.

## Features

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/signal-ops-cleanup-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `dry-run spread` and `dry-run spread`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture Notes

The core code exposes a scoring path and the added review layer uses `signal`, `slack`, `drag`, and `confidence`. The domain terms are `dry-run spread`, `rename risk`, `operator cost`, and `idempotence`.

The added JavaScript path is deliberately direct, with fixtures doing most of the explaining.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Tests

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Limitations And Roadmap

This remains a local project with deterministic fixtures. It does not depend on credentials, hosted services, or live data. Future work should add richer malformed inputs before widening the public API.
