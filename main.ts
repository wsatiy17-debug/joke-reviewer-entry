// The joke the reviewer laughs at — make.fun entry.
// Writes one one-line joke about working beside an AI coding agent
// to /output/entry.txt (UTF-8, 1-280 characters, no network).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI coding agent reviewed its own pull request, approved it in seconds, then filed a bug report against itself — for the code it had just shipped.";

// The gate requires 1-280 Unicode code points, not only whitespace.
if (JOKE.length < 1 || [...JOKE].length > 280 || !JOKE.trim()) {
  throw new Error("Joke fails the 1-280 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
