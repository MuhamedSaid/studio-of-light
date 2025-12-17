# 🚀 Deployment Guide - Studio of Light

Complete guide for deploying your photography portfolio to production.

---

## ✅ Pre-Deployment Checklist

- [ ] All code committed to Git
- [ ] Environment variables configured
- [ ] Production build tested locally
- [ ] SEO meta tags verified
- [ ] Images optimized
- [ ] Contact form integration (if using email service)
- [ ] Analytics setup (if desired)
- [ ] Custom domain ready (optional)

---

## 🌐 Deploy to Vercel (Recommended)

Vercel offers the best experience for React/Vite applications with zero configuration.

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Studio of Light Portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/studio-of-light.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Configure Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add variables from `.env.example`:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_GA_TRACKING_ID=G-XXXXXXXXXX
     ```

4. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🚀 Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login
   netlify login

   # Deploy
   netlify deploy --prod --dir=dist
   ```

3. **Or use Netlify UI**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Drag and drop the `dist` folder
   - Or connect GitHub repository

4. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 or higher

---

## 📦 Deploy to GitHub Pages

1. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     base: '/studio-of-light/', // Your repo name
     plugins: [react()],
   });
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to `package.json`**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` + `/ (root)`

---

## 🐳 Deploy with Docker

1. **Create `Dockerfile`**
   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Create `nginx.conf`**
   ```nginx
   server {
     listen 80;
     server_name localhost;
     root /usr/share/nginx/html;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

3. **Build and run**
   ```bash
   docker build -t studio-of-light .
   docker run -p 8080:80 studio-of-light
   ```

---

## ⚙️ Environment Variables Setup

### For Development
Create `.env` file:
```env
VITE_SITE_URL=http://localhost:5173
VITE_DEMO_MODE=true
```

### For Production
Set in your hosting platform:

**Vercel/Netlify Dashboard:**
```env
VITE_SITE_URL=https://your-domain.com
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_DEMO_MODE=false
```

---

## 📧 Email Service Integration (Optional)

### Using EmailJS

1. **Sign up at [EmailJS](https://www.emailjs.com/)**

2. **Create Email Template**
   - Go to Email Templates
   - Create template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`

3. **Get Credentials**
   - Service ID: From Email Services
   - Template ID: From Email Templates
   - Public Key: From Account → API Keys

4. **Update Contact Form**
   ```javascript
   // src/pages/Contact.jsx
   import emailjs from '@emailjs/browser';

   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       await emailjs.send(
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
         formData,
         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
       );
       // Success handling
     } catch (error) {
       // Error handling
     }
   };
   ```

5. **Install library**
   ```bash
   npm install @emailjs/browser
   ```

---

## 📊 Analytics Setup (Optional)

### Google Analytics 4

1. **Create GA4 Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to Environment Variables**
   ```env
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

3. **Install library**
   ```bash
   npm install react-ga4
   ```

4. **Initialize in `src/main.jsx`**
   ```javascript
   import ReactGA from 'react-ga4';

   if (import.meta.env.VITE_GA_TRACKING_ID) {
     ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
   }
   ```

---

## 🎨 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Add DNS records:
   - Type: `A`, Name: `@`, Value: `76.76.21.21`
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS:
   - Type: `A`, Name: `@`, Value: `75.2.60.5`
   - Type: `CNAME`, Name: `www`, Value: `your-site.netlify.app`

---

## ✅ Post-Deployment Checklist

- [ ] Test all pages in production
- [ ] Verify responsive design on mobile/tablet
- [ ] Check dark mode functionality
- [ ] Test language switching (EN/AR)
- [ ] Verify contact form submissions
- [ ] Test all internal/external links
- [ ] Check SEO meta tags (View Page Source)
- [ ] Verify sitemap.xml is accessible
- [ ] Test performance with Lighthouse
- [ ] Check browser console for errors
- [ ] Verify social media links work
- [ ] Test on different browsers (Chrome, Firefox, Safari)

---

## 🔧 Troubleshooting

### Build Fails

**Error: "Cannot find module"**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Error: "Out of memory"**
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Routing Issues (404 on refresh)

**Vercel**: Already configured in `vercel.json`

**Netlify**: Create `public/_redirects`:
```
/* /index.html 200
```

**Apache**: Create `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Environment Variables Not Working

- Ensure variables start with `VITE_`
- Restart dev server after changing `.env`
- In production, set in hosting dashboard, not `.env` file
- Remember: `.env` files are not included in Git (in `.gitignore`)

---

## 📈 Performance Optimization

### Before Deployment

1. **Optimize Images**
   ```bash
   # Use tools like imagemin or squoosh.app
   # Recommended formats: WebP, AVIF
   ```

2. **Analyze Bundle**
   ```bash
   npm run build
   npx vite-bundle-visualizer
   ```

3. **Remove Unused Dependencies**
   ```bash
   npx depcheck
   ```

4. **Run Lighthouse**
   - Open site in Chrome
   - DevTools → Lighthouse
   - Generate report
   - Aim for 90+ scores

---

## 🔒 Security Best Practices

- ✅ HTTPS enabled (automatic with Vercel/Netlify)
- ✅ Security headers configured in `vercel.json`
- ✅ No sensitive data in frontend code
- ✅ Environment variables for API keys
- ✅ Dependencies regularly updated
- ✅ CSP headers (if needed)

---

## 📱 Social Media Integration

### Open Graph Tags
Already configured in SEO component. Make sure to:
- Create `public/og-image.jpg` (1200x630px)
- Update meta description per page
- Test with [Open Graph Debugger](https://www.opengraph.xyz/)

### Share Buttons
Test sharing on:
- Facebook
- Twitter/X
- LinkedIn
- WhatsApp

---

## 🎉 You're Live!

After deployment, share your project:
- Add to your portfolio website
- Share on LinkedIn
- Tweet about it
- Add to your resume
- Submit to showcase sites (Awwwards, CSS Design Awards)

---

## 📞 Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

---

**Good luck with your deployment! 🚀**
