# Firebase App Hosting Deployment Guide

Complete guide to deploy your Next.js portfolio to Firebase App Hosting.

## 🎯 What is Firebase App Hosting?

Firebase App Hosting is the newest hosting solution from Google, specifically designed for Next.js applications with:
- ✅ Native Next.js support (SSR, API routes, etc.)
- ✅ Global CDN with Cloud Run integration
- ✅ Easy custom domain setup
- ✅ Built-in CI/CD with GitHub
- ✅ Automatic HTTPS/SSL
- ✅ Zero-config deployment

---

## 📋 Prerequisites

1. **Google Account** - [Sign up](https://accounts.google.com)
2. **Firebase Project** - We'll create one below
3. **GitHub Repository** - Your code should be on GitHub
4. **Node.js 18+** - Already installed

---

## 🚀 Quick Deployment (Recommended)

### Step 1: Install Firebase CLI

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login
```

### Step 2: Initialize Firebase Project

```bash
# Create new Firebase project (run this in your project root)
firebase projects:create anilkp-portfolio

# Select the project
firebase use anilkp-portfolio

# Initialize App Hosting
firebase init apphosting
```

**Answer the prompts:**
- Select: "Create a new web app"
- Web app name: "anilkp-portfolio"
- Framework: "Next.js"
- Root directory: "." (current directory)
- Build command: "npm run build"

### Step 3: Deploy

```bash
# Deploy to Firebase App Hosting
firebase deploy --only apphosting
```

✅ **Done!** Your site will be live at: `https://anilkp-portfolio.web.app`

---

## 🌐 Setup with GitHub (Recommended for CI/CD)

This connects your GitHub repo to Firebase for automatic deployments.

### Step 1: Go to Firebase Console

1. Visit [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project" or select existing project
3. Project name: `anilkp-portfolio`
4. Disable Google Analytics (optional)
5. Create project

### Step 2: Enable App Hosting

1. In Firebase Console, go to **App Hosting** (in left sidebar)
2. Click **Get Started**
3. Click **Connect GitHub**
4. Authorize Firebase to access your GitHub
5. Select repository: `anilkp/anilkp-web`
6. Select branch: `main`

### Step 3: Configure Build Settings

Firebase will auto-detect Next.js. Verify settings:

- **Root directory**: `/`
- **Build command**: `npm run build`
- **Output directory**: `.next` (auto-detected)

Click **Save and Deploy**

### Step 4: Wait for Deployment

- First build takes 2-5 minutes
- Watch build logs in real-time
- You'll get a preview URL when done

✅ **Your site is now live with automatic deployments!**

Every push to `main` branch auto-deploys! 🎉

---

## 🔧 Configuration Files

### Create firebase.json

Create `firebase.json` in your project root:

```json
{
  "apphosting": {
    "site": "anilkp-portfolio",
    "source": {
      "directory": ".",
      "framework": "nextjs"
    },
    "build": {
      "command": "npm run build",
      "outputDirectory": ".next"
    }
  }
}
```

### Create .firebaserc

Create `.firebaserc` in your project root:

```json
{
  "projects": {
    "default": "anilkp-portfolio"
  }
}
```

### Update .gitignore

Add to your `.gitignore`:

```
# Firebase
.firebase
*-debug.log
.runtimeconfig.json
```

---

## 🌐 Add Custom Domain (anilkp.com)

### Option 1: Through Firebase Console (Easiest)

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Go to **App Hosting** → **Custom domains**
4. Click **Add custom domain**
5. Enter: `anilkp.com`
6. Follow the verification steps

Firebase will provide DNS records:

```
Type: A
Name: @
Value: 199.36.158.100

Type: TXT (for verification)
Name: @
Value: [provided by Firebase]
```

7. Add these records at your domain registrar
8. Click **Verify**
9. Repeat for `www.anilkp.com`

### Option 2: Using Firebase CLI

```bash
# Add domain
firebase apphosting:domains:create anilkp.com

# Add www subdomain
firebase apphosting:domains:create www.anilkp.com
```

**SSL Certificate**: Automatically provisioned in 10-15 minutes

✅ **Your site will be live at https://anilkp.com**

---

## 📁 Project Structure for Firebase

Your current structure is perfect! No changes needed:

```
anilkp-web/
├── app/                    # Next.js app directory
├── components/             # React components
├── public/                 # Static assets
├── firebase.json           # Firebase config (add this)
├── .firebaserc            # Firebase project (add this)
├── next.config.js         # Next.js config (keep as is)
└── package.json           # Dependencies
```

---

## 🔄 Environment Variables

### Add Environment Variables in Firebase Console

1. Go to Firebase Console → App Hosting
2. Click **Settings**
3. Go to **Environment variables**
4. Add variables:

```
NEXT_PUBLIC_SITE_URL=https://anilkp.com
```

Or using CLI:

```bash
# Set environment variable
firebase apphosting:secrets:set NEXT_PUBLIC_EMAILJS_SERVICE_ID

# List all variables
firebase apphosting:secrets:list
```

---

## 🎨 CI/CD Pipeline

Firebase App Hosting automatically sets up CI/CD when you connect GitHub:

### Automatic Deployments

- **Push to `main`**: Auto-deploys to production
- **Pull Requests**: Creates preview deployments
- **Every commit**: Gets a unique preview URL

### Manual Deployment

```bash
# Deploy from local
firebase deploy --only apphosting

# Deploy specific version
firebase deploy --only apphosting:anilkp-portfolio
```

---

## 📊 Monitoring & Analytics

### View Logs

```bash
# View deployment logs
firebase apphosting:rollouts:list

# View specific rollout
firebase apphosting:rollouts:describe [ROLLOUT_ID]
```

### Firebase Console

1. Go to Firebase Console → App Hosting
2. View:
   - Active deployments
   - Traffic metrics
   - Error rates
   - Performance

### Setup Analytics (Optional)

Add to `app/layout.tsx`:

```typescript
// Add Firebase Analytics
import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  // Your config from Firebase Console
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
```

---

## 💰 Pricing

### Free Tier (Spark Plan)
- **Hosting**: 10 GB storage
- **Bandwidth**: 360 MB/day
- **Custom domain**: 1 domain
- **SSL**: Free
- **Perfect for**: Personal portfolios

### Paid Tier (Blaze Plan - Pay as you go)
- **Hosting**: $0.026/GB
- **Bandwidth**: $0.15/GB
- **No limits**: Unlimited projects
- **Estimated**: $1-5/month for your portfolio

**Your portfolio will likely stay in free tier!** 🎉

---

## 🚀 Advanced Configuration

### Next.js Middleware

Firebase App Hosting supports Next.js middleware out of the box.

Create `middleware.ts` in your root:

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Add custom headers
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'anilkp-portfolio')
  return response
}
```

### Caching Configuration

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Add cache headers
  async headers() {
    return [
      {
        source: '/images/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

---

## 🔒 Security Headers

Add to `firebase.json`:

```json
{
  "apphosting": {
    "site": "anilkp-portfolio",
    "headers": [
      {
        "source": "/**",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "DENY"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          }
        ]
      }
    ]
  }
}
```

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Check build locally first
npm run build

# View detailed logs
firebase apphosting:rollouts:list
```

### Custom Domain Not Working

```bash
# Verify DNS propagation
nslookup anilkp.com

# Check domain status
firebase apphosting:domains:list

# Re-verify domain
firebase apphosting:domains:verify anilkp.com
```

### Environment Variables Not Working

```bash
# List all secrets
firebase apphosting:secrets:list

# Update secret
firebase apphosting:secrets:set VARIABLE_NAME
```

### Site Not Updating

```bash
# Force new deployment
firebase deploy --only apphosting --force

# Check rollout status
firebase apphosting:rollouts:list
```

---

## 📈 Performance Optimization

### 1. Enable Compression (Auto-enabled)

Firebase automatically enables Brotli and Gzip compression.

### 2. Image Optimization

Use Next.js Image component:

```typescript
import Image from 'next/image'

<Image
  src="/images/profile.jpg"
  alt="Profile"
  width={500}
  height={500}
  priority
/>
```

### 3. Enable ISR (Incremental Static Regeneration)

In your pages:

```typescript
export const revalidate = 3600 // Revalidate every hour
```

---

## 🎯 Recommended Workflow

### Development
```bash
npm run dev
# Test locally at http://localhost:3000
```

### Staging
```bash
# Create preview deployment
firebase apphosting:rollouts:create --preview
```

### Production
```bash
# Commit and push to main
git add .
git commit -m "Update portfolio"
git push origin main

# Auto-deploys via GitHub integration!
```

---

## 📞 Support & Resources

- **Firebase Docs**: https://firebase.google.com/docs/app-hosting
- **Next.js Docs**: https://nextjs.org/docs
- **Firebase Console**: https://console.firebase.google.com
- **Status Page**: https://status.firebase.google.com

---

## 🎯 Quick Start Summary

**To deploy anilkp.com to Firebase:**

```bash
# 1. Install CLI
npm install -g firebase-tools

# 2. Login
firebase login

# 3. Initialize
firebase init apphosting

# 4. Deploy
firebase deploy --only apphosting

# 5. Add domain (in Firebase Console)
# Go to App Hosting → Custom domains → Add anilkp.com
```

**Or use GitHub integration:**
1. Go to Firebase Console
2. Create project: anilkp-portfolio
3. Enable App Hosting
4. Connect GitHub repo
5. Deploy automatically!

---

## ✅ Post-Deployment Checklist

- [ ] Site loads at Firebase URL
- [ ] All sections display correctly
- [ ] Dark/light mode works
- [ ] Contact form works (if configured)
- [ ] Mobile responsive
- [ ] Custom domain added (anilkp.com)
- [ ] SSL certificate active
- [ ] DNS records updated
- [ ] Analytics configured (optional)
- [ ] Performance optimized (Lighthouse 90+)

---

**Your portfolio will be live at https://anilkp.com in minutes!** 🚀

**Estimated deployment time:** 5-10 minutes
**Maintenance required:** Zero (auto-managed)
**Cost:** Free tier covers most portfolios

---

## 🎉 Advantages of Firebase App Hosting

✅ **Zero-config Next.js support** - Works out of the box
✅ **Global CDN** - Fast worldwide
✅ **Auto-scaling** - Handles traffic spikes
✅ **Preview deployments** - Test before production
✅ **GitHub integration** - Auto-deploy on push
✅ **Free SSL** - HTTPS by default
✅ **Custom domains** - Easy setup
✅ **Serverless** - No server management
✅ **99.95% uptime SLA** - Reliable

**Perfect for your portfolio!** 🎯
