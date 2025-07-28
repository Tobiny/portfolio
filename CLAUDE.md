# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, responsive portfolio website for Luis Fernando Chavez hosted at lfchavez.com. The project uses a clean, modular architecture with separated CSS and JavaScript files, showcasing professional experience, technical skills, and projects with optimized performance and user experience.

## Commands

### Development
- **Local preview**: Use a local server for proper file loading:
  ```bash
  python -m http.server 8000
  # or
  npx http-server
  # or
  php -S localhost:8000
  ```

### Deployment
- The site is deployed via GitHub Pages
- Changes pushed to the main branch are automatically reflected at lfchavez.com
- The CNAME file must remain in the repository for custom domain to work

## Architecture

### File Structure
- `index.html` - Main HTML structure with semantic markup and all content
- `assets/css/styles.css` - Complete stylesheet with CSS custom properties and responsive design
- `assets/js/main.js` - Interactive functionality, animations, and CV download logic
- `assets/images/IMG_1927.JPG` - Profile photo for About section
- `assets/cv/Luis_Fernando_Chavez_CV.pdf` - CV file for download functionality
- `CNAME` - GitHub Pages custom domain configuration

### Content Architecture
The portfolio follows a single-page application structure with five main sections:

1. **Hero Section** - Dynamic rotating text animation showcasing different professional roles
2. **About Section** - Personal background with animated profile photo container
3. **Experience Timeline** - Interactive job history with alternating layout and tech stack icons
4. **Skills Matrix** - Categorized technical skills (AI/ML, Cloud & DevOps, Backend & Databases, Web Development, Data Engineering & Methodologies) with hover tooltips showing proficiency levels
5. **Projects Showcase** - Featured projects with live links and GitHub repositories
6. **Contact Section** - Multiple contact methods with animated cards

### JavaScript Architecture
- **CV Download System**: Programmatic file download with animated notifications
- **Intersection Observer**: Scroll-based animations for performance optimization
- **Dynamic Content**: Rotating text typewriter effect and responsive navigation highlighting
- **Interactive Elements**: Skill tooltips, ripple effects, and smooth scrolling navigation

### CSS Architecture
- **CSS Custom Properties**: Centralized theming system with consistent color palette and gradients
- **Responsive Grid System**: Mobile-first approach with CSS Grid and Flexbox
- **Animation System**: CSS keyframes with cubic-bezier timing functions for smooth transitions
- **Component-based Styling**: Modular CSS with clear component boundaries

## Content Management

### Updating Skills
Skills are organized by category with realistic experience levels. Each skill item includes:
- Title attribute with proficiency level and years of experience
- Color-coded icons representing different technologies
- Hover tooltips for additional information

### Project Management
Projects include live links where available and GitHub repositories. Each project card contains:
- Technology stack tags
- Descriptive content highlighting achievements and technical approach
- Live demo links (when available) and source code access

### Asset Management
- **Profile Photo**: Located at `assets/images/IMG_1927.JPG`
- **CV File**: Located at `assets/cv/Luis_Fernando_Chavez_CV.pdf` for automatic download
- **External Assets**: Font Awesome 6.0.0 icons and Google Fonts Inter loaded via CDN

## Technical Notes

- No build process or dependencies required - direct HTML/CSS/JS editing
- Uses modern CSS features (Grid, Flexbox, custom properties) with fallbacks
- Intersection Observer API for performance-optimized scroll animations
- Semantic HTML structure with proper accessibility considerations
- Optimized for both desktop and mobile viewing experiences