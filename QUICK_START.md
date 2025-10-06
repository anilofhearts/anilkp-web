# Quick Start Guide

Get your portfolio website running in 5 minutes!

## 🚀 Fast Track Setup

### Step 1: Install Dependencies (1 minute)

```bash
npm install
```

### Step 2: Run Development Server (30 seconds)

```bash
npm run dev
```

🎉 **Open http://localhost:3000** - Your site is running!

## 📝 Essential Customization (30 minutes)

### Priority 1: Update Contact Info

**File: `components/Contact.tsx`**

Find and replace:
- `anilsspace@gmail.com` → Your email
- `+91-7012068542` → Your phone
- `Kollam, Kerala, India` → Your location
- LinkedIn URL → Your LinkedIn
- GitHub URL → Your GitHub

### Priority 2: Update Hero Section

**File: `components/Hero.tsx`**

Replace on line 9:
```typescript
const roles = [
  'Your Primary Role',
  'Your Secondary Role',
  'Your Tertiary Role',
  'Your Fourth Role',
]
```

Update name on line 87:
```typescript
<h1>YOUR NAME HERE</h1>
```

### Priority 3: Add Your Resume

```bash
# Add your CV as resume.pdf to the public folder
cp /path/to/your/resume.pdf public/resume.pdf
```

## 🎨 Quick Theme Customization

Want to change colors? Edit `tailwind.config.ts`:

```typescript
primary: {
  500: '#YOUR_COLOR',  // Main brand color
  600: '#DARKER_SHADE', // Hover state
}
```

## 🔨 Build & Deploy

### Build for Production

```bash
npm run build
```

### Test Production Build Locally

```bash
npm start
```

### Deploy to Vercel (2 minutes)

1. Push code to GitHub:
```bash
git add .
git commit -m "Initial portfolio setup"
git push
```

2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! ✅

## 📋 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production build locally |
| `npm run lint` | Check for code issues |

## 🐛 Troubleshooting

### Build errors?
```bash
rm -rf .next
npm run build
```

### Styling not updating?
```bash
# Hard refresh browser
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### Port 3000 already in use?
```bash
# Use different port
npm run dev -- -p 3001
```

## 📚 Next Steps

1. ✅ Site is running
2. 📝 Update contact info
3. 📄 Add resume.pdf
4. 🎨 Customize content (see CUSTOMIZATION_CHECKLIST.md)
5. 🚀 Deploy to production

## 💡 Pro Tips

- **Test on mobile**: Use Chrome DevTools (F12 → Toggle Device Toolbar)
- **Check dark mode**: Click theme toggle in navigation
- **Smooth scroll**: Click navigation links to test
- **Performance**: Run Lighthouse audit in Chrome DevTools

## 🆘 Need More Help?

- **Full Documentation**: See README.md
- **Detailed Setup**: See SETUP_GUIDE.md
- **Customization Guide**: See CUSTOMIZATION_CHECKLIST.md
- **Project Overview**: See PROJECT_SUMMARY.md

## ⚡ Quick Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy
```

---

**That's it!** You now have a professional portfolio website running locally.

Customize the content, add your resume, and deploy! 🎉
