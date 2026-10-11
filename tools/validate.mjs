// Validates every translation against the English source in source/en:
// JSON syntax, ICU syntax, identical {placeholders} and <tags>, no unknown keys.
// Markdown: same front-matter keys, link targets and code fences.
// Run: npm ci && node tools/validate.mjs
import fs from "node:fs";
import path from "node:path";
import { parse, TYPE } from "@formatjs/icu-messageformat-parser";

const LOCALES = ["fr", "de", "nl", "it", "es"];
const errors = [];

const flatten = (tree, prefix = "", out = new Map()) => {
  for (const [k, v] of Object.entries(tree)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") out.set(key, v);
    else flatten(v, key, out);
  }
  return out;
};
const shape = (msg) => {
  const args = new Set();
  const tags = new Set();
  const walk = (els) => {
    for (const el of els) {
      if ([TYPE.argument, TYPE.number, TYPE.date, TYPE.time].includes(el.type)) args.add(el.value);
      if (el.type === TYPE.select || el.type === TYPE.plural) {
        args.add(el.value);
        Object.values(el.options).forEach((o) => walk(o.value));
      }
      if (el.type === TYPE.tag) {
        tags.add(el.value);
        walk(el.children);
      }
    }
  };
  walk(parse(msg));
  return { args: [...args].sort().join(","), tags: [...tags].sort().join(",") };
};
const readJson = (file) => {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    errors.push(`${file}: invalid JSON (${e.message})`);
    return {};
  }
};

const srcDir = "source/en/messages";
const sources = fs.existsSync(srcDir) ? fs.readdirSync(srcDir).filter((f) => f.endsWith(".json")) : [];
for (const locale of LOCALES) {
  const dir = path.join("messages", locale);
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".json"))) {
    const where = path.join(dir, file);
    if (!sources.includes(file)) {
      errors.push(`${where}: no English source namespace '${file}'`);
      continue;
    }
    const en = flatten(readJson(path.join(srcDir, file)));
    for (const [key, value] of flatten(readJson(where))) {
      if (!en.has(key)) {
        errors.push(`${where}: unknown key '${key}'`);
        continue;
      }
      try {
        const a = shape(en.get(key));
        const b = shape(value);
        if (a.args !== b.args) errors.push(`${where} ${key}: placeholders {${b.args}} should be {${a.args}}`);
        if (a.tags !== b.tags) errors.push(`${where} ${key}: tags <${b.tags}> should be <${a.tags}>`);
      } catch (e) {
        errors.push(`${where} ${key}: invalid ICU message (${e.message})`);
      }
    }
  }
  for (const kind of ["docs", "blog"]) {
    const dir2 = path.join(kind, locale);
    if (!fs.existsSync(dir2)) continue;
    for (const file of fs.readdirSync(dir2).filter((f) => f.endsWith(".md"))) {
      const src = path.join("source/en", kind, file);
      if (!fs.existsSync(src)) continue;
      const a = fs.readFileSync(src, "utf8");
      const b = fs.readFileSync(path.join(dir2, file), "utf8");
      const fences = (s) => (s.match(/^```/gm) || []).length;
      const links = (s) => [...s.matchAll(/\]\(([^)\s]+)[^)]*\)/g)].map((m) => m[1]).sort().join("\n");
      const fmKeys = (s) => {
        const m = s.match(/^---\n([\s\S]*?)\n---/);
        return m ? m[1].split("\n").map((l) => l.match(/^([\w-]+):/)?.[1]).filter(Boolean).sort().join(",") : "";
      };
      if (fences(a) !== fences(b)) errors.push(`${dir2}/${file}: code fence count differs from English`);
      if (links(a) !== links(b)) errors.push(`${dir2}/${file}: link targets differ from English`);
      if (fmKeys(a) !== fmKeys(b)) errors.push(`${dir2}/${file}: front matter keys differ from English`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} problem(s). See CONTRIBUTING.md.`);
  process.exit(1);
}
console.log("All translations valid.");
