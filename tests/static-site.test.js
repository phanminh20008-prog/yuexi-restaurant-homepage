const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const exists = (file) => fs.existsSync(path.join(root, file));

assert.ok(exists("index.html"), "index.html should exist");
assert.ok(exists("styles.css"), "styles.css should exist");
assert.ok(exists("script.js"), "script.js should exist");

const html = read("index.html");
const css = read("styles.css");
const js = read("script.js");

const requiredSections = [
  "hero",
  "trust",
  "menu",
  "chef",
  "private-dining",
  "visit",
  "reserve",
];

for (const id of requiredSections) {
  assert.ok(
    html.includes(`id="${id}"`),
    `index.html should include #${id} section`,
  );
}

const requiredContent = [
  "YUE XI",
  "月汐",
  "一席山海，入夜成宴",
  "Modern Chinese Fine Dining",
  "Reserve a Table",
  "View Seasonal Menu",
  "Tea Pairing",
  "Wine Pairing",
  "Private Dining",
  "MICHELIN-inspired",
  "山海开席",
  "潮汐海味",
  "炭火时蔬",
  "清汤与陈皮",
  "茶点收尾",
];

for (const text of requiredContent) {
  assert.ok(html.includes(text), `index.html should include "${text}"`);
}

const requiredAnchors = [
  'href="#menu"',
  'href="#chef"',
  'href="#private-dining"',
  'href="#visit"',
  'href="#reserve"',
];

for (const anchor of requiredAnchors) {
  assert.ok(html.includes(anchor), `index.html should include ${anchor}`);
}

assert.ok(
  /<button[^>]+aria-label="Open navigation"/.test(html),
  "mobile menu button should have accessible label",
);
assert.ok(
  /<img[^>]+alt="[^"]+"/.test(html),
  "at least one image should include alt text",
);
assert.ok(
  !html.includes("Michelin star") && !html.includes("米其林星"),
  "site should avoid unverified official Michelin star claims",
);
assert.ok(
  css.includes("@media (max-width: 760px)"),
  "styles.css should include mobile breakpoint",
);
assert.ok(
  css.includes("--ink") && css.includes("--brass") && css.includes("--jade"),
  "styles.css should define approved palette tokens",
);
assert.ok(
  js.includes("navToggle") && js.includes("aria-expanded"),
  "script.js should control accessible mobile navigation",
);

console.log("Static site acceptance checks passed");
