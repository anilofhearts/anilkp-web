# Quick Setup Guide

This guide will help you get your portfolio website up and running quickly.

## Step-by-Step Setup

### 1. Install Dependencies (5 minutes)

```bash
npm install
```

### 2. Customize Content (30-60 minutes)

#### A. Update Personal Information

**components/Hero.tsx:**
- Change name, title, and tagline
- Update social media links (LinkedIn, GitHub, Email)

**components/About.tsx:**
- Modify professional summary
- Update metrics (years of experience, achievements)

**components/Experience.tsx:**
- Update work history
- Modify achievements for each role
- Update technologies used

**components/AIProjects.tsx:**
- Update WhatsApp AI Learning Assistant details (or replace with your featured project)
- Modify other AI projects
- Update tech stacks and achievements

**components/DevOpsProjects.tsx:**
- Update project list with your actual projects
- Modify descriptions, technologies, and metrics

**components/Skills.tsx:**
- Update skill categories and proficiency levels
- Add or remove skills as needed

**components/Certifications.tsx:**
- Update certifications list
- Modify "Currently Pursuing" section

**components/Education.tsx:**
- Update educational background
- Modify institutions and degrees

**components/Contact.tsx:**
- Update email, phone, location
- Update social media links

### 3. Add Assets (15 minutes)

#### Create directories:
```bash
mkdir -p public/images
```

#### Add files:
- `public/resume.pdf` - Your CV/Resume
- `public/images/profile.jpg` - Your professional photo
- `public/images/projects/` - Project screenshots

#### Update favicon:
- Replace favicon files in `public/` directory
- Use [favicon.io](https://favicon.io/) to generate from image

### 4. Test Locally (5 minutes)

```bash
npm run dev
```

Visit http://localhost:3000 and verify:
- [ ] All sections display correctly
- [ ] Personal information is updated
- [ ] Links work properly
- [ ] Dark/Light mode toggle works
- [ ] Mobile responsive design looks good

### 5. Optional: Configure Contact Form (15 minutes)

#### Setup EmailJS:

1. Sign up at https://www.emailjs.com/
2. Create email service
3. Create email template
4. Get your credentials

#### Add credentials:

Create `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_USER_ID=user_xxxxxxxxxxxxxxx
```

#### Update Contact.tsx:

```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    formData,
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
  )
  .then(() => {
    setSubmitted(true)
    // Success handling
  })
  .catch((error) => {
    console.error('Error:', error)
    // Error handling
  })
}
```

### 6. Build for Production (2 minutes)

```bash
npm run build
```

Check for any errors and fix them.

### 7. Deploy (10 minutes)

#### Option A: Vercel (Easiest)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Configure custom domain (anilkp.com)
5. Deploy!

#### Option B: Netlify

1. Push code to GitHub
2. Go to https://netlify.com
3. Import repository
4. Build command: `npm run build`
5. Publish directory: `out`
6. Deploy!

#### Option C: GitHub Pages

1. Update `next.config.js` if using subdomain
2. Build: `npm run build`
3. Upload `out/` folder to GitHub Pages

### 8. Configure Custom Domain (15 minutes)

#### For Vercel:
1. Go to Project Settings → Domains
2. Add `anilkp.com` and `www.anilkp.com`
3. Update DNS records at your domain registrar:
   - A record: `76.76.21.21`
   - CNAME www: `cname.vercel-dns.com`

#### For Netlify:
1. Go to Domain Settings
2. Add custom domain `anilkp.com`
3. Update DNS records:
   - A record: Netlify's IP
   - CNAME www: your-site.netlify.app

### 9. Post-Deployment Checklist

- [ ] Test all pages and sections
- [ ] Verify meta tags (view page source)
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify analytics (if configured)
- [ ] Check site speed (Google PageSpeed Insights)
- [ ] Submit to Google Search Console
- [ ] Share on LinkedIn!

## Customization Tips

### Change Color Scheme

Edit `tailwind.config.ts`:
```typescript
primary: {
  500: '#your-color',
  600: '#your-darker-color',
},
```

### Add New Section

1. Create component in `/components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to navigation in `components/Navigation.tsx`

### Add Images

Use Next.js Image component for optimization:
```typescript
import Image from 'next/image'

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={500}
  height={300}
/>
```

## Common Issues & Solutions

### Issue: Build fails with TypeScript errors
**Solution:** Run `npm run lint` to find errors

### Issue: Styles not applying
**Solution:** Clear `.next` folder and rebuild

### Issue: Dark mode not working
**Solution:** Check browser localStorage, try clearing it

### Issue: Contact form not sending
**Solution:** Verify EmailJS credentials and network requests

## Need Help?

- Check the main [README.md](README.md)
- Open an issue on GitHub
- Contact: anilsspace@gmail.com

## Total Setup Time

- Minimum (basic customization): **~1 hour**
- Complete (with all features): **~2-3 hours**

Good luck with your portfolio! 🚀
