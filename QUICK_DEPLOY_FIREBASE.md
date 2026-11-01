# Quick Firebase Deployment

Deploy to Firebase App Hosting in **3 commands**!

## 🚀 Super Fast Deployment

### Prerequisites (One-time setup)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login
```

### Deploy in 3 Commands

```bash
# 1. Initialize Firebase (creates project)
firebase init apphosting

# 2. Deploy
firebase deploy --only apphosting

# 3. Done!
# Your site is live at: https://anilkp-portfolio.web.app
```

---

## 🌐 Using GitHub Auto-Deploy (Recommended)

**Even easier - deploy on every git push!**

### Step 1: Go to Firebase Console

Visit: https://console.firebase.google.com

### Step 2: Create Project

1. Click **Create a project**
2. Name: `anilkp-portfolio`
3. Disable Analytics (optional)
4. Click **Create project**

### Step 3: Enable App Hosting

1. Click **App Hosting** in sidebar
2. Click **Get started**
3. Click **Connect to GitHub**
4. Authorize Firebase
5. Select repo: `anilkp/anilkp-web`
6. Select branch: `main`
7. Click **Save and Deploy**

✅ **Done!** Now every push to `main` auto-deploys!

---

## 🌐 Add Custom Domain (anilkp.com)

### In Firebase Console:

1. Go to **App Hosting** → **Custom domains**
2. Click **Add custom domain**
3. Enter: `anilkp.com`
4. Copy the DNS records provided
5. Add to your domain registrar:

```
Type: A
Name: @
Value: 199.36.158.100

Type: TXT (verification)
Name: @
Value: [from Firebase]
```

6. Click **Verify**
7. Repeat for `www.anilkp.com`

**SSL auto-configured in 10-15 minutes!**

✅ **Live at: https://anilkp.com**

---

## 📊 What You Get

✅ **Global CDN** - Fast worldwide
✅ **Auto HTTPS** - Free SSL certificate
✅ **Auto-scaling** - Handles any traffic
✅ **99.95% uptime** - Reliable hosting
✅ **Preview URLs** - For pull requests
✅ **Zero config** - Works out of the box

---

## 🔄 Update Your Site

```bash
# Just push to GitHub
git add .
git commit -m "Update portfolio"
git push origin main

# Auto-deploys in 2-3 minutes!
```

Or deploy manually:

```bash
firebase deploy --only apphosting
```

---

## 💰 Cost

**Free tier includes:**
- 10 GB storage
- 360 MB/day bandwidth
- 1 custom domain
- Free SSL

**Your portfolio stays FREE!** 🎉

---

## 📱 Monitor

### View Deployments

```bash
# List all deployments
firebase apphosting:rollouts:list

# View logs
firebase apphosting:rollouts:describe [ROLLOUT_ID]
```

### Firebase Console

Visit: https://console.firebase.google.com
- View metrics
- Check deployments
- Monitor performance

---

## 🐛 Troubleshooting

### Build Failed?

```bash
# Test build locally first
npm run build

# Check Firebase logs
firebase apphosting:rollouts:list
```

### Domain Not Working?

```bash
# Check DNS
nslookup anilkp.com

# Verify in Firebase
firebase apphosting:domains:list
```

### Need to Rollback?

In Firebase Console:
1. Go to App Hosting → Rollouts
2. Select previous version
3. Click **Promote to live**

---

## 🎯 Recommended Setup

**For anilkp.com:**

1. ✅ Use GitHub integration (auto-deploy)
2. ✅ Add custom domain (anilkp.com)
3. ✅ Enable analytics (optional)
4. ✅ Set up preview deployments

**Total time:** 10 minutes
**Total cost:** FREE
**Updates:** Auto-deploy on push

---

## 📚 Full Documentation

- **Complete Guide**: [FIREBASE_DEPLOYMENT.md](./FIREBASE_DEPLOYMENT.md)
- **Project Docs**: [README.md](./README.md)

---

## ✅ Deployment Checklist

- [ ] Firebase CLI installed
- [ ] Logged in to Firebase
- [ ] Project created
- [ ] GitHub connected (or manual deploy)
- [ ] Site deployed
- [ ] Custom domain added
- [ ] DNS records updated
- [ ] SSL certificate active
- [ ] Site tested

---

**Your portfolio will be live at https://anilkp.com!** 🚀

**Questions?** See [FIREBASE_DEPLOYMENT.md](./FIREBASE_DEPLOYMENT.md) for detailed guide.
