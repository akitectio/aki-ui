#!/bin/bash

echo "🚀 GitHub Actions Workflows Setup Complete!"
echo ""

echo "📁 Current workflows:"
ls -la .github/workflows/
echo ""

echo "🔧 Workflows created:"
echo "1. 📖 deploy-storybook.yml  - Deploy Storybook to GitHub Pages"
echo "   - Triggers: push to main, manual dispatch"
echo "   - Purpose: Documentation hosting"
echo ""

echo "2. 📦 publish-npm.yml       - Publish package to npm"
echo "   - Triggers: release published, manual dispatch"
echo "   - Purpose: Package distribution"
echo "   - Features: Version management, provenance, auto-release"
echo ""

echo "✅ What's working:"
echo "   - Build process tested ✓"
echo "   - Dry-run publish tested ✓"
echo "   - GitHub Docs compliant ✓"
echo "   - Scoped package support ✓"
echo "   - Provenance enabled ✓"
echo ""

echo "🚨 Required action:"
echo "   1. Create NPM_TOKEN on https://www.npmjs.com/settings/tokens"
echo "   2. Add NPM_TOKEN secret to GitHub repository"
echo "   3. Test workflow: Go to Actions > 'Publish to npm' > 'Run workflow'"
echo ""

echo "🎯 How to use:"
echo "   Manual publish:"
echo "     - Go to GitHub Actions"
echo "     - Select 'Publish to npm'"
echo "     - Click 'Run workflow'"
echo "     - Choose version increment (patch/minor/major)"
echo ""
echo "   Auto publish:"
echo "     - Create a new release on GitHub"
echo "     - Workflow automatically publishes to npm"
echo ""

echo "📚 Documentation:"
echo "   - GITHUB_ACTIONS_SETUP.md - Detailed setup guide"
echo "   - Follow GitHub Docs: https://docs.github.com/en/actions/how-tos/use-cases-and-examples/publishing-packages/publishing-nodejs-packages"
echo ""

echo "🎉 Ready to publish @akitectio/aki-ui to npm!"
