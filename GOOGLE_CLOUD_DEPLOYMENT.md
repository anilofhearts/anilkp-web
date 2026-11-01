# Google Cloud Deployment Guide

Complete guide to deploy your Next.js portfolio to Google Cloud Platform (GCP).

## 📋 Prerequisites

- Google Cloud account ([create one here](https://cloud.google.com/))
- Google Cloud SDK installed locally
- Domain name (anilkp.com) - optional but recommended
- Project built and tested locally

## 🚀 Deployment Options

### Option 1: Cloud Run (Recommended - Easiest & Cheapest)
**Best for:** Auto-scaling, pay-per-use, serverless deployment

### Option 2: App Engine
**Best for:** Simple deployment, automatic scaling

### Option 3: Cloud Storage + Cloud CDN
**Best for:** Static sites, fastest performance, lowest cost

### Option 4: Compute Engine
**Best for:** Full control, custom configurations

---

## 🎯 Option 1: Cloud Run (Recommended)

Cloud Run is serverless, auto-scales, and you only pay for what you use.

### Step 1: Install Google Cloud SDK

```bash
# Download and install
curl https://sdk.cloud.google.com | bash

# Initialize
gcloud init

# Login
gcloud auth login
```

### Step 2: Create a Google Cloud Project

```bash
# Create project
gcloud projects create anilkp-portfolio --name="Anil Portfolio"

# Set as active project
gcloud config set project anilkp-portfolio

# Enable required APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
```

### Step 3: Create Dockerfile

Create `Dockerfile` in your project root:

```dockerfile
# Use Node.js 18 Alpine image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js app
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Step 4: Update next.config.js

Update your `next.config.js` to enable standalone mode:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
```

### Step 5: Create .dockerignore

Create `.dockerignore` file:

```
node_modules
.next
.git
.gitignore
*.md
.env*.local
out
```

### Step 6: Deploy to Cloud Run

```bash
# Build and deploy in one command
gcloud run deploy anilkp-portfolio \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10

# You'll get a URL like: https://anilkp-portfolio-xxxxx-uc.a.run.app
```

### Step 7: Map Custom Domain (Optional)

```bash
# Map your domain
gcloud run domain-mappings create \
  --service anilkp-portfolio \
  --domain anilkp.com \
  --region us-central1

# For www subdomain
gcloud run domain-mappings create \
  --service anilkp-portfolio \
  --domain www.anilkp.com \
  --region us-central1
```

Update your domain's DNS settings:
```
Type: A
Name: @
Value: [IP provided by Google]

Type: CNAME
Name: www
Value: ghs.googlehosted.com
```

---

## 🎯 Option 2: App Engine

Simple deployment with automatic scaling.

### Step 1: Create app.yaml

Create `app.yaml` in your project root:

```yaml
runtime: nodejs18

env: standard

instance_class: F1

automatic_scaling:
  min_instances: 0
  max_instances: 2
  target_cpu_utilization: 0.65

handlers:
  - url: /.*
    script: auto
    secure: always
    redirect_http_response_code: 301
```

### Step 2: Deploy to App Engine

```bash
# Initialize App Engine
gcloud app create --region=us-central

# Deploy
gcloud app deploy

# View your app
gcloud app browse
```

---

## 🎯 Option 3: Cloud Storage + CDN (Static Export)

Cheapest option for static sites with global CDN.

### Step 1: Update next.config.js for Static Export

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
```

### Step 2: Build Static Site

```bash
npm run build
# This creates an 'out' directory
```

### Step 3: Create Cloud Storage Bucket

```bash
# Create bucket (must be globally unique)
gsutil mb -p anilkp-portfolio -c STANDARD -l US gs://anilkp.com/

# Make bucket public
gsutil iam ch allUsers:objectViewer gs://anilkp.com

# Enable website configuration
gsutil web set -m index.html -e 404.html gs://anilkp.com
```

### Step 4: Upload Files

```bash
# Upload all files
gsutil -m cp -r out/* gs://anilkp.com/

# Set cache control for better performance
gsutil -m setmeta -h "Cache-Control:public, max-age=3600" gs://anilkp.com/**
```

### Step 5: Setup Cloud CDN (Optional but Recommended)

```bash
# Create backend bucket
gcloud compute backend-buckets create anilkp-backend \
  --gcs-bucket-name=anilkp.com \
  --enable-cdn

# Create URL map
gcloud compute url-maps create anilkp-url-map \
  --default-backend-bucket=anilkp-backend

# Create SSL certificate
gcloud compute ssl-certificates create anilkp-ssl \
  --domains=anilkp.com,www.anilkp.com

# Create target HTTPS proxy
gcloud compute target-https-proxies create anilkp-https-proxy \
  --url-map=anilkp-url-map \
  --ssl-certificates=anilkp-ssl

# Create forwarding rule
gcloud compute forwarding-rules create anilkp-https-rule \
  --global \
  --target-https-proxy=anilkp-https-proxy \
  --ports=443

# Get the IP address
gcloud compute forwarding-rules describe anilkp-https-rule --global
```

Update DNS:
```
Type: A
Name: @
Value: [IP from forwarding rule]

Type: CNAME
Name: www
Value: anilkp.com
```

---

## 🎯 Option 4: Compute Engine (VM)

Full control with a virtual machine.

### Step 1: Create VM Instance

```bash
# Create Ubuntu VM
gcloud compute instances create anilkp-vm \
  --zone=us-central1-a \
  --machine-type=e2-micro \
  --image-family=ubuntu-2204-lts \
  --image-project=ubuntu-os-cloud \
  --boot-disk-size=10GB \
  --tags=http-server,https-server

# Allow HTTP/HTTPS traffic
gcloud compute firewall-rules create allow-http \
  --allow tcp:80 \
  --target-tags http-server

gcloud compute firewall-rules create allow-https \
  --allow tcp:443 \
  --target-tags https-server
```

### Step 2: SSH into VM and Setup

```bash
# SSH into VM
gcloud compute ssh anilkp-vm --zone=us-central1-a

# Once inside VM, run these commands:

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install PM2 for process management
sudo npm install -g pm2

# Clone your repository
cd /var/www
sudo git clone https://github.com/anilkp/anilkp-web.git
cd anilkp-web

# Install dependencies and build
sudo npm install
sudo npm run build

# Start with PM2
sudo pm2 start npm --name "portfolio" -- start
sudo pm2 startup
sudo pm2 save
```

### Step 3: Configure Nginx

```bash
# Edit Nginx config
sudo nano /etc/nginx/sites-available/portfolio

# Add this configuration:
```

```nginx
server {
    listen 80;
    server_name anilkp.com www.anilkp.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 4: Setup SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d anilkp.com -d www.anilkp.com

# Auto-renewal is setup automatically
```

---

## 💰 Cost Comparison

### Cloud Run (Recommended)
- **Free Tier**: 2M requests/month, 360,000 GB-seconds
- **Estimated Cost**: $0-5/month for low-medium traffic
- **Best for**: Variable traffic, auto-scaling

### App Engine
- **Free Tier**: 28 instance hours/day
- **Estimated Cost**: $5-20/month
- **Best for**: Consistent traffic

### Cloud Storage + CDN
- **Storage**: $0.026/GB/month
- **Bandwidth**: $0.08-0.12/GB
- **Estimated Cost**: $1-5/month
- **Best for**: Static sites, global audience

### Compute Engine
- **e2-micro**: ~$7.50/month
- **Estimated Cost**: $7-15/month
- **Best for**: Full control needed

---

## 🔧 CI/CD Setup (GitHub Actions)

Create `.github/workflows/deploy-gcp.yml`:

```yaml
name: Deploy to Google Cloud Run

on:
  push:
    branches: [ main ]

env:
  PROJECT_ID: anilkp-portfolio
  SERVICE_NAME: anilkp-portfolio
  REGION: us-central1

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Cloud SDK
      uses: google-github-actions/setup-gcloud@v1
      with:
        service_account_key: ${{ secrets.GCP_SA_KEY }}
        project_id: ${{ env.PROJECT_ID }}

    - name: Configure Docker
      run: gcloud auth configure-docker

    - name: Build and Push
      run: |
        docker build -t gcr.io/$PROJECT_ID/$SERVICE_NAME:$GITHUB_SHA .
        docker push gcr.io/$PROJECT_ID/$SERVICE_NAME:$GITHUB_SHA

    - name: Deploy to Cloud Run
      run: |
        gcloud run deploy $SERVICE_NAME \
          --image gcr.io/$PROJECT_ID/$SERVICE_NAME:$GITHUB_SHA \
          --platform managed \
          --region $REGION \
          --allow-unauthenticated
```

---

## 📊 Monitoring & Logging

### View Logs

```bash
# Cloud Run logs
gcloud run services logs read anilkp-portfolio --region us-central1

# Real-time logs
gcloud run services logs tail anilkp-portfolio --region us-central1
```

### Setup Monitoring

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Navigate to **Monitoring** → **Dashboards**
3. Create custom dashboard for your service
4. Add metrics: requests, latency, errors

---

## 🔒 Security Best Practices

1. **Enable Cloud Armor** for DDoS protection
2. **Use Secret Manager** for sensitive data
3. **Enable Cloud Audit Logs**
4. **Setup IAM roles** properly
5. **Use HTTPS only**

---

## 🐛 Troubleshooting

### Build fails
```bash
# Check logs
gcloud builds log [BUILD_ID]

# Verify Dockerfile locally
docker build -t test .
docker run -p 3000:3000 test
```

### Service not accessible
```bash
# Check service status
gcloud run services describe anilkp-portfolio --region us-central1

# Verify IAM permissions
gcloud run services get-iam-policy anilkp-portfolio --region us-central1
```

### SSL certificate issues
```bash
# Check certificate status
gcloud compute ssl-certificates describe anilkp-ssl

# May take 10-15 minutes for new domains
```

---

## 📈 Scaling Configuration

### Cloud Run Auto-scaling

```bash
gcloud run services update anilkp-portfolio \
  --min-instances 1 \
  --max-instances 100 \
  --concurrency 80 \
  --region us-central1
```

---

## 🎯 Recommended Setup for anilkp.com

**I recommend Cloud Run with custom domain:**

1. ✅ Auto-scaling (0 to 100 instances)
2. ✅ Pay only for what you use
3. ✅ Free SSL certificate
4. ✅ Global CDN included
5. ✅ Easy CI/CD integration
6. ✅ Estimated cost: $0-5/month

**Quick deployment:**

```bash
# One-time setup
gcloud run deploy anilkp-portfolio \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated

# Map domain
gcloud run domain-mappings create \
  --service anilkp-portfolio \
  --domain anilkp.com \
  --region us-central1
```

---

## 📞 Support

- **GCP Documentation**: https://cloud.google.com/docs
- **Cloud Run Docs**: https://cloud.google.com/run/docs
- **Pricing Calculator**: https://cloud.google.com/products/calculator

---

**Your portfolio will be live at https://anilkp.com in minutes!** 🚀
