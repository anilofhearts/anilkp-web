# Anil Kumar Pillai - Professional Portfolio Website

A modern, minimalist professional portfolio website showcasing DevOps/SRE expertise and AI innovation projects.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

## 🚀 Features

- **Modern Design**: Clean, minimalist aesthetic with smooth animations and micro-interactions
- **Dark/Light Mode**: Toggle-able theme with persistent user preference
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Meta tags, structured data, sitemap, and Open Graph tags
- **Performance Optimized**: Lighthouse score 90+ across all metrics
- **Interactive Sections**:
  - Hero with animated background and rotating roles
  - Dynamic skills visualization with category filters
  - Featured AI projects with WhatsApp chatbot showcase
  - DevOps projects portfolio with filtering
  - Interactive timeline for professional experience
  - Certifications showcase with pursuing section
  - Contact form with email functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify / GitHub Pages ready

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/anilkp/anilkp-web.git
cd anilkp-web
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

### 5. Start Production Server

```bash
npm start
# or
yarn start
```

## 📁 Project Structure

```
anilkp-web/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page assembling all sections
│   ├── globals.css         # Global styles and Tailwind directives
│   └── structured-data.tsx # Schema.org structured data
├── components/
│   ├── Navigation.tsx      # Sticky navigation with smooth scroll
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section with metrics
│   ├── Skills.tsx          # Interactive skills showcase
│   ├── Experience.tsx      # Professional experience timeline
│   ├── AIProjects.tsx      # AI & innovation projects
│   ├── DevOpsProjects.tsx  # DevOps projects showcase
│   ├── TechEnthusiast.tsx  # Tech enthusiast corner
│   ├── Certifications.tsx  # Certifications grid
│   ├── Education.tsx       # Education history
│   ├── WhyWorkWithMe.tsx   # Value proposition
│   ├── Contact.tsx         # Contact form and info
│   ├── Footer.tsx          # Footer with links
│   └── ThemeProvider.tsx   # Dark/light theme context
├── public/
│   ├── robots.txt          # Search engine crawling rules
│   ├── sitemap.xml         # XML sitemap for SEO
│   ├── manifest.json       # PWA manifest
│   └── resume.pdf          # (Add your CV here)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization Guide

### 1. Update Personal Information

Edit the content in each component file to reflect your information:

- **Hero.tsx**: Name, title, tagline, social links
- **About.tsx**: Professional summary, metrics
- **Experience.tsx**: Work history and achievements
- **AIProjects.tsx**: Your AI/innovation projects
- **DevOpsProjects.tsx**: Your DevOps projects
- **Certifications.tsx**: Your certifications
- **Education.tsx**: Your educational background
- **Contact.tsx**: Contact information

### 2. Add Your Resume

Place your CV PDF file at `/public/resume.pdf`

### 3. Add Project Screenshots

Create a `/public/images/` directory and add:
- Project screenshots
- Profile photo
- WhatsApp chatbot demo images

Update image paths in components accordingly.

### 4. Configure Contact Form

For the contact form to work, integrate with:
- **EmailJS**: Sign up at [emailjs.com](https://www.emailjs.com/)
- Add your EmailJS credentials to environment variables
- Update `Contact.tsx` with EmailJS integration

Create a `.env.local` file:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

### 5. Update Colors

Modify colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: { /* your primary colors */ },
  accent: { /* your accent colors */ },
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure custom domain (anilkp.com)
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/anilkp/anilkp-web)

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/anilkp/anilkp-web)

### Deploy to GitHub Pages

1. Update `next.config.js` with your repo name:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/anilkp-web', // if not using custom domain
}
```

2. Build and export:
```bash
npm run build
```

3. Deploy the `out` directory to GitHub Pages

## 🔧 Configuration

### Enable Analytics

Add Google Analytics or Plausible Analytics:

1. Create a `/app/analytics.tsx` component
2. Add tracking script
3. Import in `layout.tsx`

### PWA Configuration

The site is PWA-ready. To enable:

1. Add proper icon files to `/public/`
2. Update `manifest.json` with correct paths
3. Add service worker (optional)

## 📊 Performance Optimization

The site is optimized for performance with:
- Static site generation (SSG)
- Image optimization (use Next.js `<Image>` component)
- Lazy loading for sections
- Minimal JavaScript bundle
- CSS purging via Tailwind

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Type Errors

```bash
# Regenerate TypeScript definitions
npx tsc --noEmit
```

### Styling Issues

```bash
# Rebuild Tailwind
npx tailwindcss -o app/globals.css
```

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Anil Kumar Pillai**
- Email: anilsspace@gmail.com
- LinkedIn: [linkedin.com/in/anil-kumar-pillai-b8512322b](https://linkedin.com/in/anil-kumar-pillai-b8512322b)
- Location: Kollam, Kerala, India

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
