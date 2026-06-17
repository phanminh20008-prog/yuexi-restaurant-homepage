# YUE XI 月汐

Modern Chinese fine dining homepage reference site with a Michelin-level visual direction.

## Preview Locally

```bash
python -m http.server 4173
```

Open:

```text
http://localhost:4173
```

## Publish Long-Term For Free

This is a static site and can be hosted on GitHub Pages.

Recommended GitHub Pages settings:

- Source: Deploy from a branch
- Branch: `codex/michelin-homepage` or `main`
- Folder: `/root`

The `.nojekyll` file is included so GitHub Pages serves the files directly.

## Files

- `index.html`: homepage content and structure
- `styles.css`: visual design and responsive layout
- `script.js`: mobile navigation and form feedback
- `tests/static-site.test.js`: static acceptance checks
