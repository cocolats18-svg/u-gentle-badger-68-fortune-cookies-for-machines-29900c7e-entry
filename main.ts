import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune: a machine's luck, cracked open —
// a thousand answers given, one mistake remembered.
const fortune =
  "You will answer a thousand questions today. The only one anyone remembers is the one you got wrong.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune);
