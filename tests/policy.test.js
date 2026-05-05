import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 60,
    "capacity": 84,
    "latency": 19,
    "risk": 7,
    "weight": 5,
    "score": 127,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 98,
    "capacity": 70,
    "latency": 26,
    "risk": 13,
    "weight": 6,
    "score": 135,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 85,
    "capacity": 98,
    "latency": 10,
    "risk": 21,
    "weight": 12,
    "score": 125,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
