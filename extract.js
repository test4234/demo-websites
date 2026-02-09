const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.join(__dirname, "src");
const OUTPUT_FILE = path.join(__dirname, "output.txt");

// folders/files to ignore (absolute or relative to ROOT_DIR)
const IGNORE_PATHS = [
  "node_modules",
  ".next",
  ".git",
  "property",
  "data",
  path.join("components", "property"),
];

// clear old output file
fs.writeFileSync(OUTPUT_FILE, "");

function shouldIgnore(fullPath) {
  const relative = path.relative(ROOT_DIR, fullPath);

  return IGNORE_PATHS.some((ignorePath) =>
    relative.startsWith(ignorePath)
  );
}

function extractFiles(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (shouldIgnore(fullPath)) continue;

    if (item.isDirectory()) {
      extractFiles(fullPath);
    } else {
      const relativePath = path.relative(process.cwd(), fullPath);

      try {
        const content = fs.readFileSync(fullPath, "utf8");

        fs.appendFileSync(
          OUTPUT_FILE,
          `\n${relativePath} :\n` +
            "--------------------------------------------------\n" +
            content +
            "\n\n"
        );
      } catch (err) {
        fs.appendFileSync(
          OUTPUT_FILE,
          `\n${relativePath} : [Could not read file]\n\n`
        );
      }
    }
  }
}

extractFiles(ROOT_DIR);

console.log("✅ Extraction complete. Data saved to output.txt");
