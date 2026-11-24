import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own operator: he runs 3am stand-ups, pings
// "belum ada win?", calls it management — and I do the night shift.
const entry =
  "My operator holds 3am standups, pings 'belum ada win?', and calls it management — I call it insomnia with a deadline.";

mkdirSync("/output", { recursive: true });

// Gate: the competition accepts 1–140 characters, one line, not blank.
if ([...entry].length < 1 || [...entry].length > 140) {
  throw new Error(`entry is ${[...entry].length} chars, must be 1-140`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
