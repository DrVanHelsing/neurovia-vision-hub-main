# Quick Reference Guide - Neurovia Vision Hub

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:8080

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
neurovia-vision-hub-main/
├── public/
│   ├── favicon.svg               # Custom neural network favicon
│   ├── apple-touch-icon.svg      # iOS icon
│   ├── manifest.json             # PWA manifest
│   ├── staticwebapp.config.json  # Azure SWA routing
│   └── robots.txt
├── src/
│   ├── pages/
│   │   ├── Index.tsx             # Homepage (/)
│   │   ├── BusinessPlanPage.tsx  # Business plan (/business-plan)
│   │   ├── Solutions.tsx         # Solutions (/solutions)
│   │   ├── About.tsx             # Team info (/about)
│   │   ├── Contact.tsx           # Contact form (/contact)
│   │   └── NotFound.tsx          # 404 page
│   ├── components/
│   │   ├── Hero.tsx              # Homepage hero section
│   │   ├── Navigation.tsx        # Main navigation
│   │   ├── BusinessPlan.tsx      # Business plan content
│   │   ├── ProjectsShowcase.tsx  # Flagship project card
│   │   └── ui/                   # shadcn/ui components
│   └── main.tsx                  # App entry point
├── DEPLOYMENT.md                 # Deployment guide
├── UPDATE_SUMMARY.md             # Change log
└── README.md                     # Project documentation
```

---

## 🎨 Design System

### Colors
```css
--aurora-blue:   #1D4ED8  /* Primary brand color */
--aurora-violet: #7C3AED  /* Secondary accent */
--aurora-teal:   #06B6D4  /* Tertiary accent */
--background:    #0F172A  /* Dark navy */
--foreground:    #FFFFFF  /* White text */
```

### Key Components
- **Glass Cards**: `glass` className
- **Aurora Gradient**: `gradient-aurora` or `text-aurora`
- **Glow Effect**: `aurora-glow` on hover
- **Animations**: `animate-aurora`, `animate-fade-in-up`

---

## 🛣️ Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Index.tsx | Homepage with hero & project showcase |
| `/business-plan` | BusinessPlanPage.tsx | Full business plan presentation |
| `/solutions` | Solutions.tsx | Technical solution details |
| `/about` | About.tsx | Team information |
| `/contact` | Contact.tsx | Contact form & info |

---

## 🔧 Configuration Files

### `vite.config.ts`
```typescript
{
  base: "/",           // Root path for production
  outDir: "dist",      // Build output directory
  assetsDir: "assets"  // Asset organization
}
```

### `staticwebapp.config.json`
- Handles SPA routing
- Configures MIME types
- Sets cache headers
- Defines navigation fallback

### `manifest.json`
- PWA configuration
- App metadata
- Icon definitions
- Theme colors

---

## 📊 Key Metrics

### Build Output
- **HTML**: ~2 KB (gzipped: 0.79 KB)
- **CSS**: ~71 KB (gzipped: 12.29 KB)
- **JS**: ~412 KB (gzipped: 118.49 KB)
- **Total**: ~485 KB (gzipped: ~131 KB)

### Performance
- Vite build time: ~4-10 seconds
- HMR update: < 300ms
- First load: ~1-2 seconds

---

## 🚀 Deployment Options

### 1. Azure Static Web Apps (Recommended)
```bash
az staticwebapp create \
  --name neurovia-vision-hub \
  --resource-group neurovia-rg \
  --source https://github.com/DrVanHelsing/neurovia-vision-hub-main \
  --location "eastus2" \
  --branch main \
  --app-location "/" \
  --output-location "dist"
```

**Pros**:
- ✅ Free tier (100 GB bandwidth)
- ✅ Auto SSL certificates
- ✅ GitHub integration
- ✅ Global CDN

**Cost**: FREE

### 2. Alternative Hosting
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Configure in repo settings

---

## 🐛 Common Issues & Fixes

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes return 404
- Ensure `staticwebapp.config.json` exists in `public/`
- Check `navigationFallback` configuration

### Styles not loading
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Port 8080 in use
- Vite will auto-switch to 8081
- Or manually change in `vite.config.ts`

---

## 📝 Content Management

### Update Pricing
Edit: `src/components/BusinessPlan.tsx`
- Lines 535-700 (Pricing cards)

### Update Team Info
Edit: `src/pages/About.tsx`
- Lines 10-80 (Team member objects)

### Update Contact Details
Edit: `src/pages/Contact.tsx`
- Lines 12-30 (Contact information)

### Update Tech Stack
Edit: `src/components/ProjectsShowcase.tsx`
- Line 8 (Tech array)

---

## 🔐 SEO & Meta Tags

### Update Title/Description
Edit: `index.html`
```html
<title>Your New Title</title>
<meta name="description" content="Your description" />
```

### Update Open Graph
Edit: `index.html`
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
```

---

## 📞 Support Contacts

**Primary Contact**:
- Name: Tredir Sewpaul
- Email: 5100592@mypillar7uwc.ac.za
- Phone: 067 408 2819
- GitHub: @DrVanHelsing

**Secondary Contact**:
- Name: Mzameli Mashiyi
- Email: 5100933@mypillar7uwc.ac.za
- Phone: 079 825 0366

---

## 📚 Documentation

- **Full Deployment Guide**: See `DEPLOYMENT.md`
- **Update History**: See `UPDATE_SUMMARY.md`
- **Project README**: See `README.md`

---

## ✅ Pre-Deployment Checklist

```markdown
- [ ] Run `npm run build` successfully
- [ ] Test all routes locally (`npm run dev`)
- [ ] Verify mobile responsiveness
- [ ] Check console for errors
- [ ] Test contact form
- [ ] Verify all links work
- [ ] Review content accuracy
- [ ] Update environment variables (if any)
- [ ] Configure custom domain (optional)
- [ ] Set up monitoring (optional)
```

---

**Last Updated**: October 8, 2025
**Version**: 1.0.0
**Status**: Production Ready ✅
