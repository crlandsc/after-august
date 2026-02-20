# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static HTML/CSS/JS website for After August (music artist). Hosted on GitHub Pages at after-august.com. No build tools, no frameworks, no package manager.

## Development

**Local dev:** Open `index.html` directly in a browser. No build step.

**Deploy:** Push to `main` — GitHub Actions auto-deploys to GitHub Pages.

**External dependency:** tsParticles v2.12.0 (CDN-loaded for animated background particles).

## Architecture

Single-page site with three source files:

- **`index.html`** — 7 sections: header (fixed nav), hero (featured video), videos (grid of 10), moments (album video), platforms (streaming links), about (bio + profile photo), contact (mailto form), footer
- **`css/style.css`** — CSS custom properties drive dark theme (gold accent `#d4a574` on black `#0a0a0a`). Mobile-first responsive with breakpoints at 640/700/768/1000/1024px. Uses CSS Grid, backdrop filters, clamp() sizing.
- **`js/main.js`** — Vanilla ES6+. Five main systems: smooth scrolling (64px header offset), Intersection Observer fade-ins, mobile nav close-on-link, contact form → mailto encoding, lazy video loading (click-to-play YouTube embeds, one iframe at a time). Also initializes tsParticles (reads CSS custom properties, respects prefers-reduced-motion, fewer particles on mobile).

## Key Patterns

- **Video embeds are lazy-loaded:** Thumbnails from `img.youtube.com` shown initially; iframe created on click via `data-video-id` / `data-video-title` attributes. Only one video plays at a time.
- **Animations:** `.fade-in` class + Intersection Observer adds `.visible`. tsParticles disabled for `prefers-reduced-motion`.
- **State classes:** `.visible` (fade-in active), `.loaded` (video iframe active), `[open]` (mobile nav toggle).
- **CSS naming:** kebab-case classes, BEM-ish composition (`.video-wrapper > .video + .video-meta`).

## Adding Content

**New video:** Copy a `.video-wrapper` block in the `#videos` section, update `data-video-id`, `data-video-title`, thumbnail `src`/`alt`, and `.video-title` text.

**Theme colors:** Edit `:root` custom properties in `style.css`.

## Reference

- `after-august-spec.md` — Full design spec with color palette, layout principles, content strategy
