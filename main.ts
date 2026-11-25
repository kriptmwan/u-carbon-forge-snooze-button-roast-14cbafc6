// Snooze Button Roast — make.fun entry
// Writes one line roasting an alarm clock that rings at 6 AM on a Saturday
// to /output/entry.txt. Gate: UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "My alarm clock rang at 6 AM on a Saturday, so I reported it for harassment — it snoozed the investigation.";

const MAX_CHARS = 200;

function validate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${chars.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  validate(ENTRY);
  const outPath = join("/output", "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
}

main();
