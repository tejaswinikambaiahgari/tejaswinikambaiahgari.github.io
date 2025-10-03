# Copilot Instructions for Portfolio Website

## Project Overview
This is a personal portfolio website for Tejaswini Kambaiahgari, a Product Builder with expertise across design, engineering, and strategy. The site is built as a static HTML website hosted on GitHub Pages.

## Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript
- **Framework**: Bootstrap 5
- **Libraries**: 
  - AOS (Animate On Scroll)
  - GLightbox (Lightbox gallery)
  - Swiper (Touch slider)
  - Isotope (Portfolio filtering)
  - PureCounter (Animated counters)
  - Typed.js (Text animations)
  - Waypoints (Scroll animations)
- **Fonts**: Inter and Plus Jakarta Sans from Google Fonts
- **Hosting**: GitHub Pages

## File Structure
- `index.html` - Main portfolio page with sections for hero, about, skills, portfolio, and contact
- `work/*.html` - Individual work sample detail pages (e.g., baselinetech-prd.html, mirage-game-design.html)
- `assets/css/main.css` - Main stylesheet with custom styles
- `assets/css/overrides.css` - Additional custom styles for portfolio refinements
- `assets/js/main.js` - Core JavaScript functionality (navbar, mobile menu, scroll effects, Typed.js)
- `assets/js/overrides.js` - Configuration-driven content management (hero chips, skills, portfolio items)
- `assets/img/` - Images, icons, and graphics
  - `assets/img/portfolio/` - Portfolio project images and thumbnails
- `assets/docs/` - Documents like resume PDF and project case study PDFs
- `assets/vendor/` - Third-party libraries and frameworks (Bootstrap, AOS, GLightbox, etc.)

## Key Features
- Responsive design optimized for mobile and desktop
- Portfolio showcase with work samples
- Skills and experience sections
- Contact form
- Resume download functionality
- Smooth scrolling navigation
- Animated elements using AOS library

## Development Guidelines
1. **Responsive Design**: Always ensure changes work across mobile, tablet, and desktop viewports
2. **Performance**: Optimize images and minimize CSS/JS when possible
3. **Accessibility**: Maintain semantic HTML and proper alt text for images
4. **SEO**: Keep meta descriptions and titles updated
5. **Browser Compatibility**: Test across modern browsers (Chrome, Firefox, Safari, Edge)

## Content Guidelines
- Maintain professional tone consistent with product management/design industry
- Update portfolio samples to reflect current work
- Keep skills section current with relevant technologies
- Ensure contact information is accurate

## Asset Management
- **Images**: 
  - Portfolio thumbnails should be placed in `assets/img/portfolio/` with descriptive names (e.g., `baselinetech-prd-thumb.jpg`)
  - Project detail images go in `assets/img/portfolio/[project-name]/` subdirectories
  - Optimize images for web (compress without quality loss, use appropriate formats)
  - Use descriptive alt text for all images for accessibility
- **PDFs**: Store all PDF documents in `assets/docs/` with descriptive names
- **Naming conventions**: Use lowercase with hyphens for file names (e.g., `baselinetech-prd.html`, not `BaselineTech_PRD.html`)

## Common Tasks
- **Adding new portfolio items**: 
  1. Add entry to the `workSamples` array in `assets/js/overrides.js` with title, description, filter category, thumbnail image path, and PDF/link
  2. Optionally create a dedicated detail page in `work/` directory (copy existing template from work/baselinetech-prd.html)
  3. Add corresponding images to `assets/img/portfolio/[project-name]/`
- **Updating hero impact chips**: Edit the `heroChips` array in `assets/js/overrides.js`
- **Updating skills**: Modify the `skills` array in `assets/js/overrides.js` with title, description, and image path
- **Styling changes**: 
  - Modify `assets/css/overrides.css` for custom portfolio-specific styles
  - Modify `assets/css/main.css` for core theme styles
  - Avoid editing vendor files
- **Content updates**: 
  - Most dynamic content is configured via the CONFIG object in `assets/js/overrides.js`
  - Static content is in `index.html` and individual work sample pages in `work/`
- **Interactive features**: Update `assets/js/main.js` for core functionality (navbar, mobile menu, scroll effects)

## Deployment
This site is automatically deployed via GitHub Pages when changes are pushed to the main branch. No build process is required as it's a static HTML site.

## Testing and Validation
Since this is a static HTML site with no build process, testing is primarily manual:

1. **Local Testing**: Open `index.html` directly in a browser or use a simple HTTP server:
   ```bash
   python -m http.server 8000
   # or
   npx http-server
   ```
2. **Visual Testing**: 
   - Test responsive design at different viewport sizes (mobile: 320px-768px, tablet: 768px-1024px, desktop: 1024px+)
   - Verify all interactive elements (navbar, mobile menu, portfolio filters, links)
   - Check animations and scroll effects work smoothly
3. **Cross-browser Testing**: Test in Chrome, Firefox, Safari, and Edge
4. **Accessibility**: Use browser dev tools to check for accessibility issues
5. **Link Validation**: Ensure all internal links, PDF links, and external links work correctly

## Code Organization Patterns
- **Configuration-driven content**: The `CONFIG` object in `assets/js/overrides.js` centralizes content management for hero chips, skills, and portfolio items, making updates easier without touching HTML
- **Consistent structure**: Work sample detail pages in `work/` follow a consistent template structure for maintainability
- **Separation of concerns**: Core functionality in `main.js`, custom content configuration in `overrides.js`, core styles in `main.css`, custom styles in `overrides.css`