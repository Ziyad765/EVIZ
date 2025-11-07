# Eco Vista Industrial Zone - Static Website

This is a static HTML/CSS/JS version ready for GitHub Pages deployment.

## File Structure
```
public/
├── index.html          # Main HTML file
├── styles.css          # All styles (converted from Tailwind)
├── script.js           # Interactive functionality
├── images/             # All images
│   ├── hero-bg.jpg
│   ├── about-bg.jpg
│   ├── infrastructure-bg.jpg
│   ├── sustainability-bg.jpg
│   ├── founder.jpg
│   └── industry-*.jpg
└── README.md           # This file
```

## Deployment to GitHub Pages

### Method 1: Direct Upload
1. Create a new GitHub repository
2. Upload all files from the `public/` folder to the repository root
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose `main` branch
5. Click Save
6. Your site will be live at `https://yourusername.github.io/repository-name/`

### Method 2: GitHub Desktop
1. Create a new repository on GitHub
2. Clone it locally using GitHub Desktop
3. Copy all files from `public/` folder to your local repository
4. Commit and push changes
5. Enable GitHub Pages in repository settings

### Method 3: Command Line
```bash
# Navigate to the public folder
cd public

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in your repository settings.

## Features Included
✅ Fully responsive design
✅ Smooth scrolling navigation
✅ Tab-based section navigation
✅ Scroll-triggered animations
✅ SEO optimized meta tags
✅ All images included
✅ Mobile-friendly navigation
✅ Professional styling

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## No Dependencies Required
This is a pure HTML/CSS/JS website with no build process or dependencies. 
Font Awesome icons are loaded via CDN.

## Local Testing
Simply open `index.html` in your browser or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Customization
- Edit content in `index.html`
- Modify colors/styles in `styles.css` (see CSS variables at the top)
- Update images in the `images/` folder
- Adjust behavior in `script.js`

## Support
For issues or questions, contact: info@ecovista.in
