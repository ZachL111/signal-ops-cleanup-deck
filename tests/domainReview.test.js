import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 46, slack: 30, drag: 10, confidence: 71 };
assert.equal(domainReviewScore(item), 163);
assert.equal(domainReviewLane(item), "ship");
