# Neurovia Vision Hub - Azure Deployment Guide

## Quick Deploy to Azure Static Web Apps (Recommended)

### Prerequisites
- Azure account ([Create free account](https://azure.microsoft.com/free/))
- Azure CLI installed ([Download](https://docs.microsoft.com/cli/azure/install-azure-cli))
- GitHub repository for the project

### Option 1: Deploy via Azure Portal (Easiest)

1. **Login to Azure Portal**
   - Go to https://portal.azure.com
   - Search for "Static Web Apps"
   - Click "Create"

2. **Configure Static Web App**
   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create new or select existing (e.g., `neurovia-rg`)
   - **Name**: `neurovia-vision-hub`
   - **Region**: Choose closest region (e.g., `East US 2`)
   - **Source**: Select "GitHub"
   
3. **Connect GitHub Repository**
   - Sign in to GitHub
   - Select Organization: `DrVanHelsing`
   - Select Repository: `neurovia-vision-hub-main`
   - Select Branch: `main`

4. **Build Configuration**
   - **Build Presets**: `Custom`
   - **App location**: `/`
   - **Api location**: *(leave empty)*
   - **Output location**: `dist`

5. **Review and Create**
   - Click "Review + create"
   - Click "Create"
   - Wait for deployment (2-5 minutes)

6. **Access Your Site**
   - Once deployed, you'll get a URL like: `https://blue-ocean-xxx.azurestaticapps.net`
   - The GitHub Action will automatically build and deploy on every push to `main`

### Option 2: Deploy via Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create --name neurovia-rg --location "eastus2"

# Create static web app (this will create a GitHub Action automatically)
az staticwebapp create \
  --name neurovia-vision-hub \
  --resource-group neurovia-rg \
  --source https://github.com/DrVanHelsing/neurovia-vision-hub-main \
  --location "eastus2" \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

### Option 3: Manual GitHub Actions Setup

If you prefer manual setup, create `.github/workflows/azure-static-web-apps.yml`:

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: "dist"

  close_pull_request_job:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close Pull Request Job
    steps:
      - name: Close Pull Request
        id: closepullrequest
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          action: "close"
```

## Custom Domain Setup

1. Go to your Static Web App in Azure Portal
2. Navigate to "Custom domains"
3. Click "+ Add"
4. Enter your domain name (e.g., `neurovia.ai`)
5. Follow DNS configuration instructions:
   - Add CNAME record pointing to your Static Web App URL
   - Or add TXT record for root domain validation

## Environment Variables (if needed)

If you need to add environment variables:

1. In Azure Portal, go to your Static Web App
2. Navigate to "Configuration"
3. Add environment variables under "Application settings"
4. Restart the app

## SSL Certificate

Azure Static Web Apps provides **free SSL certificates automatically** for:
- Default `.azurestaticapps.net` domain
- Custom domains (auto-renewed)

## Monitoring and Analytics

1. **Application Insights** (recommended):
   ```bash
   az monitor app-insights component create \
     --app neurovia-insights \
     --location eastus2 \
     --resource-group neurovia-rg
   ```

2. **View Logs**:
   - Go to Static Web App → "Logs"
   - Or use Azure Monitor for detailed analytics

## Cost Estimation

**Azure Static Web Apps Free Tier Includes:**
- ✅ 100 GB bandwidth/month
- ✅ Unlimited SSL certificates
- ✅ Custom domains
- ✅ GitHub integration
- ✅ Global distribution

**Estimated Monthly Cost**: **FREE** (for typical small business usage)

**Standard Tier** ($9/month if you exceed free tier):
- 100 GB → 500 GB bandwidth
- Enhanced features

## Troubleshooting

### Build Fails
```bash
# Check GitHub Actions logs
# Go to: https://github.com/DrVanHelsing/neurovia-vision-hub-main/actions

# Common fixes:
npm clean-install  # Instead of npm install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 Errors on Routes
- Verify `staticwebapp.config.json` is in the `public` folder
- Check that `navigationFallback` is configured correctly

### Slow Build Times
```json
// In package.json, optimize build:
{
  "build": "vite build --mode production"
}
```

## Local Testing Before Deploy

```bash
# Build locally
npm run build

# Preview build
npm run preview

# Or use Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli
swa start ./dist
```

## Deployment Checklist

- [x] `staticwebapp.config.json` in public folder
- [x] `manifest.json` for PWA support
- [x] Favicon files (favicon.svg, apple-touch-icon.svg)
- [x] All routes properly configured
- [x] Build succeeds locally
- [x] No console errors in browser
- [x] Mobile responsive
- [x] SEO meta tags present

## Support

For issues or questions:
- **Email**: 5100592@mypillar7uwc.ac.za
- **GitHub Issues**: Create an issue in the repository

---

**Last Updated**: October 8, 2025  
**Maintained by**: Neurovia Development Team
