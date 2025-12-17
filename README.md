# 📸 Studio of Light - Modern Photography Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-25.5.3-26A69A?style=for-the-badge&logo=i18next&logoColor=white)

**A production-ready, bilingual photography portfolio built with modern web technologies**

[Live Demo](https://studio-of-light-demo.vercel.app) • [Report Bug](https://github.com/yourusername/studio-of-light/issues) • [Request Feature](https://github.com/yourusername/studio-of-light/issues)

</div>

---

## 🌟 Project Overview

**Studio of Light** is a fully-featured, production-ready photography portfolio website built as a demonstration of modern web development capabilities. This project showcases professional-grade implementation of responsive design, internationalization, and user experience best practices.

> **Note**: This is a portfolio/demo project created to showcase technical skills. All business information is fictional for demonstration purposes.

### ✨ Key Highlights

- ✅ **Fully Bilingual**: Complete English & Arabic support with RTL layouts
- ✅ **4 Complete Pages**: Home, About, Portfolio, Services, Contact + Legal pages
- ✅ **Production Ready**: Optimized builds, SEO, accessibility, and performance
- ✅ **Modern Tech Stack**: React 19, Vite, Tailwind CSS, Framer Motion
- ✅ **Responsive Design**: Mobile-first approach, works on all devices
- ✅ **Dark Mode**: Seamless theme switching with system preference detection
- ✅ **Professional UI/UX**: Smooth animations, intuitive navigation, polished design

---

## 🖼️ Screenshots

<div align="center">

### Homepage
![Homepage Screenshot](screenshots/homepage.png)

### Portfolio Gallery
![Portfolio Screenshot](screenshots/portfolio.png)

### Services Page
![Services Screenshot](screenshots/services.png)

</div>

---

## 🚀 Tech Stack

### Core Technologies
- **React 19.1.1** - Modern UI library with latest features
- **Vite 7.1.7** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **React Router DOM 7.9.3** - Client-side routing

### Key Libraries
- **Framer Motion 12.23.22** - Smooth animations and transitions
- **i18next 25.5.3** - Internationalization framework
- **React Hook Form 7.63.0** - Efficient form handling
- **Lucide React 0.545.0** - Beautiful icon library
- **React Helmet Async 2.0.5** - SEO meta tag management

### Development Tools
- **ESLint** - Code linting and quality checks
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## ⚡ Features

### 📱 Pages & Functionality

#### Homepage
- Hero section with animated call-to-action
- Statistics showcase
- Featured services preview
- Client testimonials carousel
- Recent portfolio highlights

#### About Page
- Company story and mission
- Team member profiles
- Core values showcase
- Achievement timeline
- "Why choose us" section

#### Portfolio Gallery
- Advanced image gallery with lightbox
- Category filtering (All, Weddings, Portraits, Events)
- Lazy loading for performance
- Keyboard navigation support
- Responsive grid layout

#### Services
- **4 Service Categories**: Weddings, Portraits, Events, Commercial
- **10 Detailed Packages** with pricing and features
- Service comparison
- WhatsApp & phone integration
- Process timeline visualization

#### Contact
- Functional contact form with validation
- Success/error message handling
- Business hours display
- Multiple contact methods (Email, Phone, WhatsApp, Location)
- FAQ section
- Social media integration

#### Legal Pages
- Privacy Policy (GDPR-compliant)
- Terms of Service
- Professional legal content

### 🌍 Internationalization (i18n)

- **Full bilingual support**: English & Arabic
- **4000+ translation keys** across 8 namespace files
- **RTL (Right-to-Left) support** for Arabic
- **Language switcher** in navigation
- **Professional translations** (not auto-generated)
- **Direction-aware components** using Tailwind utilities

### 🎨 Design Features

- **Dark Mode**: Toggle between light/dark themes with smooth transitions
- **Responsive Design**: Mobile-first approach, breakpoints for all devices
- **Professional Animations**: Framer Motion for smooth page transitions
- **Custom Color System**: Gold accent color with dark mode variants
- **Glass Morphism Effects**: Modern UI design patterns
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

### 🔧 Technical Features

- **SEO Optimized**: 
  - Dynamic meta tags per page
  - XML sitemap
  - robots.txt
  - Open Graph tags ready
  
- **Performance**:
  - Lazy loading for images
  - Code splitting
  - Optimized bundle size
  - Fast page transitions

- **Developer Experience**:
  - Hot Module Replacement (HMR)
  - ESLint configuration
  - Prettier formatting
  - TypeScript-ready structure

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/studio-of-light.git
   cd studio-of-light
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint errors
npm run format     # Format code with Prettier
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure (auto-detected settings are usually perfect)
   - Deploy!

3. **Environment Variables** (if needed)
   - Add in Vercel dashboard under Settings → Environment Variables
   - Use `.env.example` as reference

### Other Deployment Options

<details>
<summary><b>Netlify</b></summary>

```bash
npm run build
# Upload dist folder to Netlify or use Netlify CLI
```
</details>

<details>
<summary><b>GitHub Pages</b></summary>

Update `vite.config.js` with base path, then:
```bash
npm run build
# Use gh-pages npm package or manual upload
```
</details>

---

## 📂 Project Structure

```
studio-of-light/
├── public/                 # Static assets
│   ├── locales/           # Translation files
│   │   ├── en/           # English translations
│   │   └── ar/           # Arabic translations
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # SEO sitemap
├── src/
│   ├── components/        # React components
│   │   ├── common/       # Reusable components (Navbar, Footer)
│   │   └── home/         # Page-specific components
│   ├── contexts/         # React contexts (Theme)
│   ├── data/             # Static data files
│   │   ├── portfolioData.js
│   │   ├── servicesData.js
│   │   └── siteConfig.js
│   ├── i18n/             # i18n configuration
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── Privacy.jsx
│   │   └── Terms.jsx
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── .env.example          # Environment variables template
├── vercel.json           # Vercel configuration
├── tailwind.config.js    # Tailwind CSS config
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies
```

---

## 🎯 Features Breakdown

### Contact Form
- **Validation**: Required fields, email format, phone format
- **State Management**: React hooks for form data
- **User Feedback**: Success/error messages
- **Loading States**: Submit button shows loading spinner
- **Ready for Integration**: Placeholder for EmailJS/API integration

### Service Packages System
- **Data-Driven**: Centralized `servicesData.js`
- **10 Packages**: Across 4 categories
- **Bilingual**: All content in EN/AR
- **Featured Packages**: Highlight recommended options
- **Pricing Display**: Professional pricing tables
- **Add-Ons**: Additional service options

### Portfolio Gallery
- **Image Management**: Centralized `portfolioData.js`
- **Categories**: Wedding, Portrait, Event, Commercial
- **Lightbox**: Full-screen image viewing
- **Navigation**: Previous/next, keyboard shortcuts
- **Performance**: Lazy loading, optimized images
- **Responsive**: Grid adapts to screen size

---

## 🌐 Internationalization Details

### Supported Languages
- 🇺🇸 English (en)
- 🇸🇦 Arabic (ar)

### Translation Files
```
public/locales/
├── en/
│   ├── common.json        # Common UI elements
│   ├── home.json          # Homepage content
│   ├── about.json         # About page content
│   ├── contact.json       # Contact page content
│   ├── privacy.json       # Privacy policy
│   └── terms.json         # Terms of service
└── ar/
    └── (same structure)
```

### RTL Support
- Automatic direction switching based on language
- RTL-aware Tailwind utilities (`ms-`, `me-`, `ps-`, `pe-`)
- Mirrored layouts for Arabic
- Custom Tailwind RTL plugin

---

## 🎨 Customization Guide

### Update Branding

1. **Site Name & Info**
   ```javascript
   // src/data/siteConfig.js
   export const siteConfig = {
     name: 'Your Business Name',
     email: 'your@email.com',
     phone: '+1 234 567 8900',
     // ... other settings
   };
   ```

2. **Colors**
   ```javascript
   // tailwind.config.js
   colors: {
     gold: {
       50: '#your-color',
       // ... customize color palette
     }
   }
   ```

3. **Content**
   - Update translations in `public/locales/en/` and `public/locales/ar/`
   - Modify service packages in `src/data/servicesData.js`
   - Add portfolio items in `src/data/portfolioData.js`

### Add New Language

1. Create language folder: `public/locales/fr/`
2. Copy EN translation files
3. Translate content
4. Update `src/i18n/config.js`:
   ```javascript
   supportedLngs: ['en', 'ar', 'fr']
   ```

---

## 📊 Performance

- **Lighthouse Score**: 90+ (target)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Lazy loading, modern formats

---

## 🧪 Testing

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

---

## 🤝 Contributing

This is a portfolio project, but feedback and suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Developer

**Your Name**
- Portfolio: [yourwebsite.com](https://yourwebsite.com)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- Design inspiration from leading photography portfolios
- Icons by [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)
- Images from [Unsplash](https://unsplash.com) (demo purposes)

---

## 📧 Contact

For questions or opportunities, reach out at: **your.email@example.com**

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ and React

</div>
