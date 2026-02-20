After August Website

Static site for After August music. Dark, video-first landing page that showcases music videos and directs visitors to streaming platforms.

Live at [after-august.com](https://after-august.com) (GitHub Pages, custom domain via Namecheap).

## Design

- Dark theme: warm gold/amber (#d4a574) on deep black (#0a0a0a)
- Typography: Anders (logo mark), Brandon Grotesque (everything else)
- Video-first: hero featured video, grid of videos, full album embed
- Mobile-first responsive, minimal JS, no frameworks

## Structure

- `index.html` -- single page (hero, videos, moments, platforms, about, contact)
- `css/style.css` -- dark theme via CSS custom properties, responsive grid
- `js/main.js` -- smooth scroll, fade-in animations, lazy video loading, tsParticles
- `assets/` -- fonts, icons, photos, favicon

## Updating Content

### Replace the hero video
1. Get the YouTube video ID from the URL (`youtube.com/watch?v=VIDEO_ID`)
2. In `index.html`, find the `#hero` section and update:
   - `data-video-id` and `data-video-title` on the `.video` div
   - Thumbnail `src` and `alt` (use `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`)
   - `.video-title` text and `.subtitle` text
3. **Vertical video?** Add `data-aspect="vertical"` to the `.video` div. This makes the player expand from 16:9 to 9:16 on click. Omit the attribute for horizontal videos.
4. Optionally move the old hero into the videos grid

### Add a video to the grid
Copy a `.video-wrapper` block in the `#videos` section and update `data-video-id`, `data-video-title`, thumbnail `src`/`alt`, and `.video-title`.

### Update platform links
Edit the `href` values in the `#platforms` section.

## SEO

Meta tags (Open Graph, Twitter Card) and Schema.org MusicGroup structured data are in `<head>`.

## Deploy

Push to `main` -- GitHub Actions auto-deploys to GitHub Pages.
