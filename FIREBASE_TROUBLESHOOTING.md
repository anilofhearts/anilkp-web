# Firebase App Hosting Troubleshooting

## ✅ Issue Fixed: ENOENT routes-manifest.json

### Problem
Firebase App Hosting was looking for `standalone` output but Next.js was configured for static `export`.

### Solution Applied
Updated `next.config.js` to use `output: 'standalone'` instead of `output: 'export'`.

---

## 🚀 Deploy Now

Your configuration is now correct. Deploy with:

```bash
# Commit the config change
git add next.config.js
git commit -m "Update Next.js config for Firebase App Hosting"
git push origin main

# Firebase will auto-deploy via GitHub integration
```

Or deploy manually:

```bash
firebase deploy --only apphosting
```

---

## 📋 Correct Configuration

### next.config.js (Current - ✅ Correct)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // ✅ Correct for Firebase App Hosting
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
```

### firebase.json (Current - ✅ Correct)

```json
{
  "apphosting": {
    "backendId": "anilkpweb",
    "rootDir": "/",
    "ignore": [
      "node_modules",
      ".git",
      "firebase-debug.log",
      "firebase-debug.*.log",
      "functions"
    ]
  }
}
```

---

## 🔍 Why This Happened

**Firebase App Hosting** requires:
- `output: 'standalone'` - Creates a self-contained server
- Builds `.next/standalone` directory
- Includes `routes-manifest.json` for routing

**Static Export** (`output: 'export'`) is for:
- Static hosting (Firebase Hosting, Netlify, etc.)
- No server-side features
- Pure HTML/CSS/JS output

---

## 🎯 Understanding Output Modes

### `output: 'standalone'` (Firebase App Hosting) ✅
```javascript
// Creates: .next/standalone/
// Supports: SSR, API routes, dynamic routes
// Perfect for: Firebase App Hosting, Cloud Run, Docker
```

### `output: 'export'` (Static Hosting)
```javascript
// Creates: out/
// Supports: Static pages only
// Perfect for: Firebase Hosting, GitHub Pages, Netlify
```

---

## 🔧 Common Issues & Solutions

### Issue 1: Build fails with "ENOENT routes-manifest.json"
**Solution:** Use `output: 'standalone'` in next.config.js ✅ (Already fixed)

### Issue 2: "Client network socket disconnected" (fonts error)
**Solution:** This is just a warning during font download. Build continues and succeeds.

### Issue 3: Images not loading
**Solution:** Keep `images: { unoptimized: true }` in config ✅ (Already set)

### Issue 4: Routes not working after deployment
**Solution:**
- Ensure `trailingSlash: true` is set ✅ (Already set)
- Check `firebase.json` has correct backendId ✅ (Correct)

### Issue 5: Environment variables not working
**Solution:**
```bash
# Add via Firebase Console: App Hosting → Settings → Environment variables
# Or via CLI:
firebase apphosting:secrets:set VARIABLE_NAME
```

---

## 📊 Verify Your Setup

Run these checks:

```bash
# 1. Check Next.js config
cat next.config.js | grep "output"
# Should show: output: 'standalone',

# 2. Check Firebase config
cat firebase.json | grep "backendId"
# Should show your backend ID

# 3. Test build locally
npm run build
# Should complete without errors

# 4. Check build output
ls -la .next/standalone/
# Should show server.js and other files
```

---

## 🚀 Deployment Workflow

### Via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Fix: Update config for Firebase App Hosting"
   git push origin main
   ```

2. **Auto-deploys:**
   - Firebase detects push
   - Builds with `standalone` mode
   - Deploys automatically
   - Live in 3-5 minutes

### Manual Deploy

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   ```bash
   firebase deploy --only apphosting
   ```

---

## 📈 Post-Deployment Checks

After deployment succeeds:

```bash
# 1. Check deployment status
firebase apphosting:rollouts:list

# 2. View logs
firebase apphosting:rollouts:describe [ROLLOUT_ID]

# 3. Test your site
curl -I https://your-app.web.app
# Should return 200 OK
```

---

## 💡 Pro Tips

### 1. Local Testing Before Deploy

Test the standalone build locally:

```bash
# Build
npm run build

# Start standalone server
node .next/standalone/server.js

# Test at http://localhost:3000
```

### 2. Monitor Build Logs

In Firebase Console:
1. Go to App Hosting
2. Click on your backend
3. View "Rollouts" tab
4. Click on latest rollout to see detailed logs

### 3. Preview Deployments

For pull requests:
- Firebase creates preview URLs automatically
- Test changes before merging
- URL format: `https://pr-[NUMBER]--your-app.web.app`

---

## 🎯 Next Steps

Your config is now correct! Here's what to do:

1. ✅ **Config is fixed** (output: standalone)
2. 🔄 **Push to GitHub** (auto-deploys)
3. ⏰ **Wait 3-5 minutes** for build
4. 🌐 **Visit your URL**
5. 🎉 **Site is live!**

---

## 📞 Still Having Issues?

### Check Build Status
```bash
firebase apphosting:rollouts:list
```

### View Detailed Logs
```bash
firebase apphosting:rollouts:describe [ROLLOUT_ID]
```

### Common Error Messages

| Error | Solution |
|-------|----------|
| `ENOENT routes-manifest.json` | Use `output: 'standalone'` ✅ Fixed |
| `Module not found` | Run `npm install` |
| `Build timeout` | Increase timeout in firebase.json |
| `Permission denied` | Check IAM permissions in GCP |

---

## 📚 Resources

- **Firebase App Hosting Docs:** https://firebase.google.com/docs/app-hosting
- **Next.js Standalone Docs:** https://nextjs.org/docs/advanced-features/output-file-tracing
- **Your Guides:**
  - [FIREBASE_DEPLOYMENT.md](./FIREBASE_DEPLOYMENT.md)
  - [QUICK_DEPLOY_FIREBASE.md](./QUICK_DEPLOY_FIREBASE.md)

---

## ✅ Summary

**Problem:** Config was set to `export` mode
**Solution:** Changed to `standalone` mode
**Status:** ✅ Fixed and ready to deploy

**Your next command:**
```bash
git push origin main
```

🎉 **Your portfolio will be live in minutes!**
