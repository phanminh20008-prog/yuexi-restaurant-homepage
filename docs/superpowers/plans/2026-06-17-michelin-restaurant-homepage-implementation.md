# Michelin Restaurant Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved YUE XI 月汐 modern Chinese fine dining homepage as a static, polished, locally previewable website.

**Architecture:** The site is a static single-page experience with semantic HTML, one stylesheet, one small JavaScript file for mobile navigation and form feedback, and one Node-based static acceptance test. Content lives in the page markup because no CMS or backend is required.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js built-in `fs`/`assert` modules, local static server for visual verification.

---

## File Structure

- Create `index.html`: semantic single-page homepage containing the approved restaurant content, anchored sections, images, actions, and forms.
- Create `styles.css`: all visual styling, responsive layout, luxury palette, typography, motion, and mobile behavior.
- Create `script.js`: mobile navigation toggle, active nav cleanup, reservation/inquiry placeholder feedback, and newsletter feedback.
- Create `tests/static-site.test.js`: Node test that validates required files, sections, content, anchors, accessibility basics, and no forbidden real Michelin claims.
- Modify `.gitignore`: already ignores `.superpowers/`; add no further ignored files unless local runtime artifacts appear.

## Task 1: Static Acceptance Test

**Files:**
- Create: `tests/static-site.test.js`
- Test: `tests/static-site.test.js`

- [ ] **Step 1: Write the failing test**

Create `tests/static-site.test.js` with checks for:

```javascript
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
    `index.html should include #${id} section`
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
  "mobile menu button should have accessible label"
);
assert.ok(
  /<img[^>]+alt="[^"]+"/.test(html),
  "at least one image should include alt text"
);
assert.ok(
  !html.includes("Michelin star") && !html.includes("米其林星"),
  "site should avoid unverified official Michelin star claims"
);
assert.ok(
  css.includes("@media (max-width: 760px)"),
  "styles.css should include mobile breakpoint"
);
assert.ok(
  css.includes("--ink") && css.includes("--brass") && css.includes("--jade"),
  "styles.css should define approved palette tokens"
);
assert.ok(
  js.includes("navToggle") && js.includes("aria-expanded"),
  "script.js should control accessible mobile navigation"
);

console.log("Static site acceptance checks passed");
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/static-site.test.js`

Expected: FAIL with `index.html should exist`.

## Task 2: Homepage Markup

**Files:**
- Create: `index.html`
- Test: `tests/static-site.test.js`

- [ ] **Step 1: Implement semantic page markup**

Create `index.html` with:

- linked `styles.css` and `script.js`
- header navigation with anchors to `#menu`, `#chef`, `#private-dining`, `#visit`, and `#reserve`
- hero with YUE XI 月汐, "一席山海，入夜成宴", "Reserve a Table", and "View Seasonal Menu"
- sections with ids `trust`, `menu`, `chef`, `private-dining`, `visit`, `reserve`
- footer with contact and secondary links

- [ ] **Step 2: Run test to observe remaining failures**

Run: `node tests/static-site.test.js`

Expected: FAIL because `styles.css` and `script.js` do not exist yet.

## Task 3: Visual Styling

**Files:**
- Create: `styles.css`
- Test: `tests/static-site.test.js`

- [ ] **Step 1: Implement complete responsive styling**

Create `styles.css` with:

- palette tokens `--ink`, `--ivory`, `--jade`, `--brass`
- full-bleed cinematic hero with readable overlay
- restrained serif/sans typography
- trust strip, menu cards, chef editorial layout, private dining cards, visit/reserve section, and footer
- mobile breakpoint at `@media (max-width: 760px)`
- stable button dimensions and non-overlapping responsive layouts

- [ ] **Step 2: Run test to observe remaining failures**

Run: `node tests/static-site.test.js`

Expected: FAIL because `script.js` does not exist yet.

## Task 4: Interaction Script

**Files:**
- Create: `script.js`
- Test: `tests/static-site.test.js`

- [ ] **Step 1: Implement small progressive enhancement script**

Create `script.js` with:

- `navToggle` lookup
- `aria-expanded` updates
- mobile nav open/close behavior
- click handling that closes mobile nav when an anchor is selected
- safe placeholder feedback for reservation, private dining, and newsletter forms

- [ ] **Step 2: Run acceptance test to verify green**

Run: `node tests/static-site.test.js`

Expected: PASS with `Static site acceptance checks passed`.

## Task 5: Local Preview And Visual Verification

**Files:**
- Inspect: `index.html`, `styles.css`, `script.js`

- [ ] **Step 1: Start local server**

Run: `python -m http.server 4173`

Expected: server available at `http://localhost:4173`.

- [ ] **Step 2: Verify desktop rendering**

Open `http://localhost:4173` in the in-app browser at desktop size. Check:

- hero image and text render
- next section is hinted below the hero
- navigation anchors work
- no text overlap
- no critical console errors

- [ ] **Step 3: Verify mobile rendering**

Use a mobile viewport around 390px width. Check:

- mobile navigation opens and closes
- hero text and buttons fit
- menu cards and visit details stack cleanly
- no clipped text or overlapping content

- [ ] **Step 4: Fix any visual issues**

Patch `index.html`, `styles.css`, or `script.js` as needed, then rerun:

`node tests/static-site.test.js`

Expected: PASS with `Static site acceptance checks passed`.

## Task 6: Commit

**Files:**
- Add: `index.html`
- Add: `styles.css`
- Add: `script.js`
- Add: `tests/static-site.test.js`
- Add: `docs/superpowers/plans/2026-06-17-michelin-restaurant-homepage-implementation.md`

- [ ] **Step 1: Final verification**

Run:

`node tests/static-site.test.js`

Expected: PASS with `Static site acceptance checks passed`.

- [ ] **Step 2: Review git diff**

Run:

`git diff --check`

Expected: no whitespace errors.

- [ ] **Step 3: Commit**

Run:

```bash
git add index.html styles.css script.js tests/static-site.test.js docs/superpowers/plans/2026-06-17-michelin-restaurant-homepage-implementation.md
git commit -m "Build Michelin-inspired restaurant homepage"
```

Expected: commit succeeds on branch `codex/michelin-homepage`.
