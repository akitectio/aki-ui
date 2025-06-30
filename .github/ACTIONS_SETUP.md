# GitHub Actions Setup Guide

## Thiết lập GitHub Secrets

Để GitHub Actions có thể build và deploy với Google Analytics, bạn cần thiết lập các secrets sau:

### 1. **Truy cập GitHub Secrets**

```
Repository > Settings > Secrets and variables > Actions > New repository secret
```

### 2. **Required Secrets**

#### **Google Analytics:**

```
Name: NEXT_PUBLIC_GA_ID
Value: G-SCVKWYC8YX
```

#### **Site URL:**

```
Name: NEXT_PUBLIC_SITE_URL
Value: https://aki-ui.akitect.io
```

### 3. **Platform-specific Secrets**

#### **For Vercel Deployment:**

```
VERCEL_TOKEN: your-vercel-token
ORG_ID: your-vercel-org-id
PROJECT_ID: your-vercel-project-id
```

#### **For Netlify Deployment:**

```
NETLIFY_AUTH_TOKEN: your-netlify-token
NETLIFY_SITE_ID: your-netlify-site-id
```

## Workflow Files

### Available Workflows:

1. **`.github/workflows/build.yml`** - Build and test only
2. **`.github/workflows/deploy.yml`** - Build and deploy to Vercel
3. **`.github/workflows/netlify.yml`** - Build and deploy to Netlify

## Usage

### Automatic Triggers:

- **Push to main/master**: Triggers build and deploy
- **Pull Request**: Triggers build and test only
- **Push to develop**: Triggers build only

### Manual Trigger:

```bash
# Go to: Actions tab > Select workflow > Run workflow
```

## Environment Variables in Build

Các environment variables sẽ được inject vào build process:

```bash
NODE_ENV=production
NEXT_PUBLIC_GA_ID=${GITHUB_SECRETS.NEXT_PUBLIC_GA_ID}
NEXT_PUBLIC_SITE_URL=${GITHUB_SECRETS.NEXT_PUBLIC_SITE_URL}
```

## Debugging

### Check build logs:

1. Go to Actions tab in your repository
2. Click on latest workflow run
3. Expand build steps to see detailed logs

### Common issues:

- **Missing secrets**: Add required secrets in repository settings
- **Node version**: Ensure Node.js 18+ is used
- **Dependencies**: Check package.json and lock files

## Security

- Environment files (`.env*`) are gitignored
- Secrets are only accessible during build time
- Production builds only load analytics in production environment
