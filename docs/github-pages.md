# GitHub Pages Deployment

This project is configured to automatically deploy Storybook to GitHub Pages when a new release is created.

## Configuration Steps

To enable GitHub Pages deployment:

1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. In "Build and deployment" section:
   - Source: Select "GitHub Actions"
4. In "Custom domain" section (optional):
   - Add your custom domain if you have one

## Manual Deployment

You can also manually trigger the GitHub Pages deployment workflow:

1. Go to the "Actions" tab in your GitHub repository
2. Select the "Publish to NPM and Deploy Storybook" workflow
3. Click "Run workflow" and select the branch you want to deploy from

## Local Preview

To preview the Storybook locally before deploying:

```bash
npm run storybook
```

## Deployment Details

When a new release is created:

1. The package is published to npm
2. Storybook is built with the appropriate GitHub Pages configuration
3. The built Storybook is deployed to GitHub Pages
