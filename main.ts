// Snooze Button Roast — make.fun entry
// One line roasting an alarm clock that rings at 6 AM on a Saturday.
// Writes the roast to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const MAX_CHARS = 200;
const OUTPUT_PATH = join("/output", "entry.txt");

function buildEntry(): string {
  const parts = [
    "My alarm clock rang at 6 AM on a Saturday,",
    "so I reported it for harassment —",
    "it snoozed the investigation.",
  ];
  return parts.join(" ");
}

function validate(text: string): void {
  // Count code points, not UTF-16 units, so the em dash counts once.
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  const entry = buildEntry();
  validate(entry);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, entry, "utf8");
}

main();
