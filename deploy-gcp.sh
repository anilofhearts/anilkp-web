#!/bin/bash

# Google Cloud Run Deployment Script for anilkp.com
# Usage: ./deploy-gcp.sh

set -e

echo "🚀 Deploying anilkp.com to Google Cloud Run..."

# Configuration
PROJECT_ID="anilkp-portfolio"
SERVICE_NAME="anilkp-portfolio"
REGION="us-central1"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Step 1: Checking prerequisites...${NC}"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ Google Cloud SDK not found. Please install it first:${NC}"
    echo "   curl https://sdk.cloud.google.com | bash"
    exit 1
fi

echo -e "${GREEN}✓ Google Cloud SDK found${NC}"

# Check if logged in
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" &> /dev/null; then
    echo -e "${BLUE}🔐 Logging in to Google Cloud...${NC}"
    gcloud auth login
fi

echo -e "${GREEN}✓ Authenticated${NC}"

# Set project
echo -e "${BLUE}📝 Setting project: ${PROJECT_ID}${NC}"
gcloud config set project ${PROJECT_ID} 2>/dev/null || {
    echo -e "${RED}❌ Project ${PROJECT_ID} not found. Creating it...${NC}"
    gcloud projects create ${PROJECT_ID} --name="Anil Portfolio"
    gcloud config set project ${PROJECT_ID}
}

echo -e "${GREEN}✓ Project set${NC}"

# Enable required APIs
echo -e "${BLUE}🔧 Enabling required APIs...${NC}"
gcloud services enable cloudbuild.googleapis.com run.googleapis.com --quiet

echo -e "${GREEN}✓ APIs enabled${NC}"

# Switch to standalone config for Cloud Run
echo -e "${BLUE}⚙️  Configuring for Cloud Run...${NC}"
cp next.config.cloudrun.js next.config.js

# Build and deploy
echo -e "${BLUE}🏗️  Building and deploying to Cloud Run...${NC}"
gcloud run deploy ${SERVICE_NAME} \
  --source . \
  --platform managed \
  --region ${REGION} \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --timeout 60

# Get the service URL
SERVICE_URL=$(gcloud run services describe ${SERVICE_NAME} --region ${REGION} --format='value(status.url)')

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ Deployment successful!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${BLUE}🌐 Your site is live at:${NC}"
echo -e "${GREEN}   ${SERVICE_URL}${NC}"
echo ""
echo -e "${BLUE}📊 View logs:${NC}"
echo "   gcloud run services logs read ${SERVICE_NAME} --region ${REGION}"
echo ""
echo -e "${BLUE}🔧 To map custom domain (anilkp.com):${NC}"
echo "   gcloud run domain-mappings create --service ${SERVICE_NAME} --domain anilkp.com --region ${REGION}"
echo ""

# Restore original config
git checkout next.config.js 2>/dev/null || true

echo -e "${GREEN}🎉 All done!${NC}"
