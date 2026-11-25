// One funny line, no explanation.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "The office printer jammed, so I printed an 'out of order' sign on it. It jammed again — out of spite.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
