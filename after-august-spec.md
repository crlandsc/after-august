# After August Music Website - Complete Specification

## Project Overview

**Site Purpose**: A dark, clean hub showcasing After August's music videos and directing visitors to streaming platforms and social media. Functions as a sophisticated "landing page" for all music-related content.

**Target Audience**: Music fans discovering After August, existing fans seeking all content in one place, potential collaborators/press.

**Core Philosophy**: Video-first experience with clean, dark aesthetic that efficiently redirects to external platforms where long-term engagement happens.

## Technical Requirements

### Platform & Hosting
- Static HTML/CSS/JavaScript site
- GitHub Pages hosting
- Custom domain: after-august.com (via Namecheap)
- No frameworks or build tools required
- Mobile-first responsive design

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

### Performance Targets
- Fast loading on mobile connections
- Optimized YouTube embed loading
- Minimal JavaScript for core functionality

## Site Structure & Content

### 1. Hero Section
- **Content**: Featured YouTube video embed
- **Purpose**: Immediate music experience
- **Elements**:
  - Large video player (responsive)
  - "After August" branding with SVG logo
  - Optional tagline
  - Subtle scroll indicator

### 2. Music Videos Section
- **Content**: 5-8 key YouTube video embeds
- **Layout**: Responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- **Elements**:
  - Equal-sized video players
  - YouTube's default titles
  - Clean spacing and hover effects

### 3. Streaming Platforms Section
- **Content**: Links to music platforms
- **Priority Order**: YouTube → Spotify → Apple Music → Instagram → Facebook → SoundCloud
- **Elements**:
  - Platform logos/buttons
  - Hover animations
  - "Listen on [Platform]" labels
  - Opens in new tabs

### 4. About Section
- **Content**: Concise artist bio
- **Focus**: Musical range and influences
- **Length**: 2-3 paragraphs maximum
- **Tone**: Professional but approachable

### 5. Social Media Section
- **Content**: Links to social profiles
- **Platforms**: YouTube, Instagram, Facebook, etc.
- **Style**: Similar to personal site but music-focused
- **Behavior**: Opens in new tabs

### 6. Contact Section
- **Functionality**: Identical to personal site
- **Purpose**: Booking, collaboration, press inquiries
- **Behavior**: Pre-fills email client with form data

## Design Specifications

### Color Palette
```css
:root {
  /* Dark theme base */
  --bg-primary: #0a0a0a;           /* Deep black */
  --bg-secondary: #1a1a1a;        /* Charcoal */
  --text-primary: #e0e0e0;        /* Light gray */
  --text-secondary: #a0a0a0;      /* Medium gray */
  --accent-primary: #d4a574;      /* Warm gold/amber */
  --accent-secondary: #b8935f;    /* Darker amber */
  --border: #333333;              /* Dark border */
}
```

### Typography
- **Logo**: Custom SVG incorporating Anders font "A" concept
- **Headers**: Sans-serif, slightly more stylized than personal site
- **Body**: Clean, readable sans-serif
- **Hierarchy**: Clear contrast between sections

### Layout Principles
- **Dark backgrounds** optimized for video content
- **High contrast** for readability
- **Clean grids** for organized content
- **Generous whitespace** despite dark theme
- **Mobile-optimized** video viewing

### Interactive Elements
- **Hover effects** on all clickable elements
- **Smooth transitions** (0.3s ease)
- **YouTube embed** standard behavior (click-to-play)
- **Platform buttons** with subtle animations
- **Contact form** identical to personal site functionality

## File Structure
```plaintext
after-august.com/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── logo/
│   │   └── after-august-logo.svg
│   ├── platform-icons/
│   │   ├── spotify.svg
│   │   ├── apple-music.svg
│   │   ├── youtube.svg
│   │   └── [other platforms].svg
│   └── favicon/
│       ├── favicon.ico
│       └── [favicon variants]
├── README.md
└── .gitignore
```

## Implementation Guidelines

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags, SEO, Open Graph -->
</head>
<body>
  <header>
    <!-- Logo and minimal navigation -->
  </header>
  
  <main>
    <section class="hero">
      <!-- Featured video -->
    </section>
    
    <section class="videos">
      <!-- Video grid -->
    </section>
    
    <section class="platforms">
      <!-- Streaming platform links -->
    </section>
    
    <section class="about">
      <!-- Artist bio -->
    </section>
    
    <section class="social">
      <!-- Social media links -->
    </section>
    
    <section class="contact">
      <!-- Contact form -->
    </section>
  </main>
  
  <footer>
    <!-- Copyright, minimal info -->
  </footer>
</body>
</html>
```

### CSS Architecture
- **Adapt personal site's CSS custom properties system**
- **Use CSS Grid for video layouts**
- **Implement dark theme from the start**
- **Maintain mobile-first approach**
- **Include hover states for all interactive elements**

### JavaScript Functionality
- **Smooth scrolling** (adapt from personal site)
- **Contact form handling** (identical to personal site)
- **Intersection Observer** for fade-in animations
- **YouTube embed optimization** (lazy loading attributes)
- **Mobile navigation** if needed

### YouTube Embed Implementation
```html
<iframe 
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  loading="lazy">
</iframe>
```

## Content Management Workflow

### Adding New Videos
1. **Get YouTube embed code** for new video
2. **Add to videos section** in desired position
3. **Update featured video** in hero section if needed
4. **Test responsive behavior**
5. **Deploy via GitHub Pages**

### Updating Platform Links
1. **Update href attributes** in platforms section
2. **Add new platforms** by adding new grid items
3. **Include appropriate platform icons**

### Maintenance Schedule
- **Major updates**: When new music is released (2-3 times/year)
- **Minor updates**: As needed for new platforms or content

## SEO & Social Sharing

### Meta Tags Required
```html
<meta name="description" content="After August - Rock, folk, and multi-genre music. Listen on Spotify, Apple Music, and watch music videos.">
<meta property="og:title" content="After August - Music">
<meta property="og:description" content="Rock, folk, and multi-genre music from After August">
<meta property="og:image" content="[hero-image-url]">
<meta property="og:url" content="https://after-august.com">
<meta name="twitter:card" content="summary_large_image">
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "After August",
  "url": "https://after-august.com",
  "genre": ["Rock", "Folk", "Singer-Songwriter"]
}
```

## Performance Optimization

### Video Loading Strategy
- **Load YouTube embeds immediately** (core content)
- **Use `loading="lazy"` attribute** as fallback
- **Implement proper aspect ratios** to prevent layout shift

### Image Optimization
- **SVG icons** for scalability and performance
- **Optimized favicon set** for all devices
- **Compressed images** if any photos are used

### Code Optimization
- **Minimal JavaScript** following personal site patterns
- **Critical CSS inlined** if needed
- **External resources** (fonts, etc.) loaded efficiently

## Deployment Instructions

### GitHub Setup
1. **Create repository**: `after-august-website`
2. **Enable GitHub Pages** in repository settings
3. **Configure custom domain**: after-august.com
4. **Update DNS** at Namecheap to point to GitHub Pages

### Domain Configuration
- **Add CNAME file** with `after-august.com`
- **Configure Namecheap DNS** to point to GitHub Pages IPs
- **Enable HTTPS** in GitHub Pages settings

### Development Workflow
1. **Develop locally** and test
2. **Commit changes** to main branch
3. **Push to GitHub** - site updates automatically
4. **Verify deployment** at after-august.com

## Future Enhancement Possibilities

### Phase 2 Features (if desired later)
- **Background animations** (smoke/water effects)
- **Custom video titles** instead of YouTube defaults
- **Analytics tracking** if simple solution emerges
- **Newsletter signup** if fan engagement grows
- **Merchandise section** if that becomes relevant

### Technical Debt Prevention
- **Clean, commented code** following personal site standards
- **Modular CSS** for easy updates
- **Documented content update process**
- **Version control** best practices
