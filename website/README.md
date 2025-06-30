# Aki UI Website

This is the SEO-optimized Next.js website for Aki UI documentation and marketing.

## Features

- **SEO Optimized**: Full meta tags, structured data, and sitemap
- **Clean URLs**: No hash routing - proper `/docs` URLs
- **Server-Side Rendering**: Better performance and SEO
- **Static Generation**: Can be deployed to any static hosting
- **Responsive Design**: Mobile-first approach
- **Fast Loading**: Optimized with Next.js built-in features

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## URLs

- Home: `http://localhost:3000/`
- Documentation: `http://localhost:3000/docs`
- Components: `http://localhost:3000/docs/components/button`

## SEO Features

- Meta tags for social sharing (Open Graph, Twitter Cards)
- Structured data for search engines
- Proper heading hierarchy
- Semantic HTML
- Fast loading times
- Mobile-responsive design

## Deployment

This can be deployed to:

- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages (with static export)
- Any hosting provider that supports Node.js

## vs Current Vite App

| Feature     | Vite App    | Next.js Website   |
| ----------- | ----------- | ----------------- |
| URLs        | `/#/docs`   | `/docs`           |
| SEO         | Limited     | Full optimization |
| SSR         | No          | Yes               |
| Performance | Good        | Excellent         |
| Deployment  | Static only | Static + SSR      |
