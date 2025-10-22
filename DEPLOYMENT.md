# Deployment Guide

This guide covers how to deploy your portfolio website to various platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect it's a Vite project
7. Click "Deploy"

**Custom Domain:**
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### 2. Netlify

**Steps:**
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop your `dist` folder
4. Or connect your GitHub repository for auto-deploy

**Custom Domain:**
1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain
3. Configure DNS as instructed

### 3. GitHub Pages

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`
4. Enable GitHub Pages in repository settings

## 🔧 Build Configuration

### Environment Variables
Create a `.env` file for production:
```env
VITE_SITE_URL=https://sadiqmuhammad.dev
VITE_CONTACT_EMAIL=sadiqmuhammad795@gmail.com
```

### Build Optimization
The project is already optimized with:
- Code splitting
- Tree shaking
- Minification
- Image optimization
- CSS purging

## 📱 Performance Optimization

### Before Deployment
1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images (aim for <100KB)
   - Use appropriate sizes for different devices

2. **Test Performance:**
   ```bash
   npm run build
   npm run preview
   ```
   Test with Lighthouse for performance scores

3. **SEO Checklist:**
   - Update meta tags in `index.html`
   - Update structured data
   - Verify sitemap.xml
   - Check robots.txt

## 🌐 Domain Setup

### DNS Configuration
For custom domains, configure:
- A record pointing to your hosting provider
- CNAME for www subdomain
- SSL certificate (usually auto-configured)

### SSL Certificate
Most platforms provide free SSL certificates:
- Vercel: Automatic
- Netlify: Automatic
- GitHub Pages: Automatic

## 📊 Analytics & Monitoring

### Google Analytics
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring
Consider adding:
- Google PageSpeed Insights
- Web Vitals monitoring
- Uptime monitoring

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🛠️ Troubleshooting

### Common Issues

1. **Build Fails:**
   - Check Node.js version (18+ recommended)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Images Not Loading:**
   - Ensure images are in `public` folder
   - Check file paths are correct
   - Verify image formats are supported

3. **Styling Issues:**
   - Check Tailwind CSS is properly configured
   - Verify all imports are correct
   - Clear browser cache

### Performance Issues
1. **Slow Loading:**
   - Optimize images
   - Enable compression
   - Use CDN if available

2. **SEO Issues:**
   - Verify meta tags
   - Check structured data
   - Test with Google Search Console

## 📈 Post-Deployment

### Testing Checklist
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Mobile responsiveness
- [ ] SEO meta tags
- [ ] Social media previews
- [ ] Performance scores (90+)
- [ ] Accessibility compliance

### Monitoring
- Set up Google Analytics
- Monitor Core Web Vitals
- Check for broken links
- Regular content updates

## 🔒 Security

### Security Headers
Add to your hosting platform:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### Content Security Policy
Consider adding CSP headers for additional security.

---

Your portfolio website is now ready for deployment! 🎉
