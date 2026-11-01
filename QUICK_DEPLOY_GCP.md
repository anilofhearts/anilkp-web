# Quick Deploy to Google Cloud

Deploy your portfolio to Google Cloud in **5 minutes**!

## 🎯 Fastest Method (Automated Script)

### Prerequisites
```bash
# Install Google Cloud SDK
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# Login
gcloud auth login
```

### Deploy in One Command

```bash
# Make script executable
chmod +x deploy-gcp.sh

# Run deployment
./deploy-gcp.sh
```

That's it! Your site will be live at: `https://anilkp-portfolio-xxxxx-uc.a.run.app`

---

## 🚀 Manual Deployment (5 commands)

```bash
# 1. Login to Google Cloud
gcloud auth login

# 2. Create project
gcloud projects create anilkp-portfolio --name="Anil Portfolio"
gcloud config set project anilkp-portfolio

# 3. Enable APIs
gcloud services enable cloudbuild.googleapis.com run.googleapis.com

# 4. Switch to Cloud Run config
cp next.config.cloudrun.js next.config.js

# 5. Deploy!
gcloud run deploy anilkp-portfolio \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

✅ **Done!** Your site is deployed.

---

## 🌐 Add Custom Domain (anilkp.com)

### Step 1: Map Domain
```bash
gcloud run domain-mappings create \
  --service anilkp-portfolio \
  --domain anilkp.com \
  --region us-central1
```

### Step 2: Update DNS
Google will give you DNS records. Update at your domain registrar:

```
Type: A
Name: @
Value: [IP provided by Google]

Type: CNAME
Name: www
Value: ghs.googlehosted.com
```

### Step 3: Wait
SSL certificate will be automatically provisioned in 10-15 minutes.

✅ **Your site will be live at https://anilkp.com**

---

## 💰 Cost

**Expected cost: $0-5/month**

- First 2M requests/month: FREE
- 360,000 GB-seconds/month: FREE
- Auto-scales to zero when not in use
- You only pay for actual usage

---

## 📊 Monitor Your Site

```bash
# View logs
gcloud run services logs read anilkp-portfolio --region us-central1

# Check status
gcloud run services describe anilkp-portfolio --region us-central1

# View metrics
# Go to: https://console.cloud.google.com/run
```

---

## 🔄 Update Your Site

After making changes:

```bash
# Just run deploy again
./deploy-gcp.sh

# Or manually
gcloud run deploy anilkp-portfolio \
  --source . \
  --region us-central1
```

Zero downtime deployment! 🎉

---

## 🐛 Troubleshooting

### Build fails?
```bash
# Test Docker build locally
docker build -t test .
docker run -p 3000:3000 test
```

### Can't access site?
```bash
# Check service status
gcloud run services describe anilkp-portfolio --region us-central1

# Look for URL in status
```

### Domain not working?
```bash
# Check domain mapping
gcloud run domain-mappings describe anilkp.com --region us-central1

# Verify DNS propagation (can take up to 48 hours)
dig anilkp.com
```

---

## 📚 Full Documentation

For detailed options and configurations, see:
- **[GOOGLE_CLOUD_DEPLOYMENT.md](./GOOGLE_CLOUD_DEPLOYMENT.md)** - Complete guide
- **[README.md](./README.md)** - Project documentation

---

## 🎯 Recommended Setup

**What I recommend for anilkp.com:**

1. ✅ Use Cloud Run (serverless, auto-scaling)
2. ✅ Map custom domain (anilkp.com)
3. ✅ Enable Cloud CDN (automatically included)
4. ✅ Setup CI/CD with GitHub Actions (optional)

**Total time:** 5 minutes
**Total cost:** $0-5/month
**Maintenance:** None (auto-managed)

---

## 🎉 Success!

Once deployed, your portfolio will be:
- ✅ Live at https://anilkp.com
- ✅ Auto-scaling globally
- ✅ SSL certificate (HTTPS)
- ✅ 99.9% uptime SLA
- ✅ CDN-accelerated

**Ready to impress recruiters!** 🚀

---

## Need Help?

- Google Cloud Support: https://cloud.google.com/support
- Documentation: [GOOGLE_CLOUD_DEPLOYMENT.md](./GOOGLE_CLOUD_DEPLOYMENT.md)
- Contact: anilsspace@gmail.com
