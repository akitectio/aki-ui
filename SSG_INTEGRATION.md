# Aki UI - SSG Integration

Dự án này đã được tích hợp Static Site Generation (SSG) với 2 phần chính:

## Phần 1: Docs Components (Storybook)

Storybook được sử dụng để document và showcase các component:

- **URL**: https://akitectio.github.io/aki-ui/
- **Mục đích**: Interactive component documentation
- **Tính năng**:
  - Live component examples
  - Props documentation
  - Interactive controls
  - Code snippets
  - Accessibility tests

### Sử dụng Storybook:

```bash
# Development
npm run storybook

# Build cho production
npm run build-storybook:gh-pages
```

## Phần 2: Docs SSG (Static Documentation Site)

Documentation site tĩnh được xây dựng với Vite + React:

- **URL**: https://akitectio.github.io/aki-ui/docs/
- **Mục đích**: Comprehensive documentation and guides
- **Tính năng**:
  - Getting started guides
  - Component overview
  - Theming documentation
  - Real-world examples
  - API references
  - SEO optimized

### Cấu trúc Docs Site:

```
docs-site/
├── src/
│   ├── components/      # Documentation components
│   │   ├── Layout.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── CodeBlock.tsx
│   │   └── ComponentShowcase.tsx
│   ├── pages/          # Route pages
│   │   ├── HomePage.tsx
│   │   ├── GettingStartedPage.tsx
│   │   ├── ComponentsPage.tsx
│   │   ├── ComponentDetailPage.tsx
│   │   ├── ThemingPage.tsx
│   │   └── ExamplesPage.tsx
│   └── styles/         # Global styles
│       └── global.css
├── public/             # Static assets
├── package.json
└── vite.config.ts
```

### Sử dụng Docs Site:

```bash
# Setup (first time)
npm run docs:setup

# Development
npm run docs:dev

# Build cho production
npm run docs:build

# Preview build
npm run docs:preview
```

## Deployment

Cả hai phần được deploy tự động qua GitHub Actions:

1. **Storybook** → `https://akitectio.github.io/aki-ui/`
2. **Docs Site** → `https://akitectio.github.io/aki-ui/docs/`

### GitHub Actions Workflow:

```yaml
name: Deploy Documentation
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    - Build Storybook
    - Build Docs Site
    - Deploy to GitHub Pages
```

## Lợi ích của việc tích hợp SSG:

### 1. Performance

- Pre-rendered HTML cho SEO tốt hơn
- Fast loading times
- Optimized bundles

### 2. Developer Experience

- Hot reload trong development
- TypeScript support
- Component isolation

### 3. Maintenance

- Tự động update documentation
- Version control cho docs
- Easy deployment

### 4. User Experience

- Fast navigation
- Mobile responsive
- Search functionality (planned)

## Roadmap

- [ ] Add search functionality
- [ ] Add component API auto-generation
- [ ] Add playground for components
- [ ] Add theme builder
- [ ] Add accessibility testing
- [ ] Add performance metrics

## Scripts Available

```bash
# Component Library
npm run dev              # Development server
npm run build           # Build library
npm run storybook       # Storybook development

# Documentation
npm run docs:setup      # Setup docs site
npm run docs:dev        # Docs development
npm run docs:build      # Build docs site
npm run docs:preview    # Preview docs build
```
