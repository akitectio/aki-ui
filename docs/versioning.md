# Automated Versioning and Publishing

This project uses GitHub Actions to automate version increments, npm publishing, and Storybook deployment.

## Automatic Process

When code is merged into the `main` branch:

1. The version is automatically incremented (patch by default)
2. The package is built
3. The package is published to npm
4. Storybook is built and deployed to GitHub Pages
5. The version bump is committed and tagged in the repository

## Manual Release

You can also trigger a manual release with specific version increments:

1. Go to the "Actions" tab in your GitHub repository
2. Select the "Manual Release" workflow
3. Click "Run workflow"
4. Choose the release type:
   - `patch` (0.1.0 → 0.1.1)
   - `minor` (0.1.0 → 0.2.0)
   - `major` (0.1.0 → 1.0.0)
5. Optionally specify a custom version
6. Click "Run workflow"

## Required Secrets

For the workflows to function properly, you need to set up the following secret:

- `NPM_TOKEN`: Your npm authentication token with publish permissions

To add this secret:
2. Navigate to Secrets > Actions
3. Click "New repository secret"
4. Add the secret with the name `NPM_TOKEN` and your npm token as the value

## Development Workflow

The recommended development workflow is:

1. Create a new feature branch from `main`
2. Make your changes
3. Submit a pull request to `main`
4. Once approved and merged, the automated process will handle versioning and publishing
