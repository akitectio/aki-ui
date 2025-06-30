#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
}

function log(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function checkSEORequirements() {
  log('blue', '🔍 Kiểm tra yêu cầu SEO cho Aki UI Website...\n')
  
  const issues = []
  const warnings = []
  const success = []
  
  // Check required files
  const requiredFiles = [
    { path: 'src/app/robots.ts', name: 'Robots.txt generator' },
    { path: 'src/app/sitemap.ts', name: 'Sitemap generator' },
    { path: 'public/site.webmanifest', name: 'Web App Manifest' },
    { path: 'src/lib/seo.ts', name: 'SEO utilities' },
  ]
  
  requiredFiles.forEach(file => {
    if (fs.existsSync(path.join(process.cwd(), file.path))) {
      success.push(`✅ ${file.name} - OK`)
    } else {
      issues.push(`❌ ${file.name} - Missing: ${file.path}`)
    }
  })
  
  // Check metadata in key pages
  const keyPages = [
    { path: 'src/app/layout.tsx', name: 'Root Layout' },
    { path: 'src/app/docs/layout.tsx', name: 'Docs Layout' },
  ]
  
  keyPages.forEach(page => {
    if (fs.existsSync(path.join(process.cwd(), page.path))) {
      const content = fs.readFileSync(path.join(process.cwd(), page.path), 'utf-8')
      
      if (content.includes('metadata')) {
        success.push(`✅ ${page.name} - Has metadata`)
      } else {
        warnings.push(`⚠️ ${page.name} - Missing metadata`)
      }
      
      if (content.includes('application/ld+json')) {
        success.push(`✅ ${page.name} - Has structured data`)
      } else {
        warnings.push(`⚠️ ${page.name} - Missing structured data`)
      }
    } else {
      issues.push(`❌ ${page.name} - File not found`)
    }
  })
  
  // Check for image files (should exist for production)
  const imageFiles = [
    'public/og-image.png',
    'public/favicon.ico',
    'public/apple-touch-icon.png',
  ]
  
  imageFiles.forEach(img => {
    if (!fs.existsSync(path.join(process.cwd(), img))) {
      warnings.push(`⚠️ Image missing: ${img} (cần tạo cho production)`)
    }
  })
  
  // Display results
  log('green', '✅ Thành công:')
  success.forEach(item => console.log(`  ${item}`))
  
  if (warnings.length > 0) {
    log('yellow', '\n⚠️ Cảnh báo:')
    warnings.forEach(item => console.log(`  ${item}`))
  }
  
  if (issues.length > 0) {
    log('red', '\n❌ Lỗi cần sửa:')
    issues.forEach(item => console.log(`  ${item}`))
  }
  
  // SEO recommendations
  log('blue', '\n📋 Khuyến nghị cải thiện SEO:')
  
  const recommendations = [
    '🎯 Thêm Google Analytics/Search Console',
    '🖼️ Tạo OG images cho tất cả các trang',
    '⚡ Implement lazy loading cho images',
    '📱 Test responsive design trên mobile',
    '🔍 Thêm schema markup cho components',
    '📊 Setup Core Web Vitals monitoring',
    '🔗 Tạo internal linking strategy',
    '📝 Optimize meta descriptions cho từng trang',
    '🏷️ Thêm meta keywords relevant',
    '🚀 Implement PWA features',
  ]
  
  recommendations.forEach(rec => console.log(`  ${rec}`))
  
  // Final score
  const totalChecks = success.length + warnings.length + issues.length
  const score = Math.round((success.length / totalChecks) * 100)
  
  log('blue', `\n📈 SEO Score: ${score}%`)
  
  if (score >= 80) {
    log('green', '🎉 SEO tốt! Website đã được tối ưu cơ bản.')
  } else if (score >= 60) {
    log('yellow', '📊 SEO ổn, nhưng cần cải thiện thêm.')
  } else {
    log('red', '🚨 SEO cần được cải thiện nhiều.')
  }
  
  return {
    score,
    issues: issues.length,
    warnings: warnings.length,
    success: success.length
  }
}

function generateSEOReport() {
  log('blue', '\n📝 Tạo báo cáo SEO chi tiết...')
  
  const report = {
    timestamp: new Date().toISOString(),
    checks: checkSEORequirements(),
    recommendations: [
      {
        category: 'Technical SEO',
        items: [
          'Tạo và upload sitemap.xml',
          'Optimize robots.txt',
          'Implement canonical URLs',
          'Add meta viewport tags',
        ]
      },
      {
        category: 'Content SEO',
        items: [
          'Optimize title tags (50-60 characters)',
          'Write compelling meta descriptions (150-160 characters)',
          'Use header tags hierarchy (H1, H2, H3)',
          'Add alt text for images',
        ]
      },
      {
        category: 'Performance SEO',
        items: [
          'Optimize Core Web Vitals',
          'Implement image lazy loading',
          'Minimize JavaScript bundles',
          'Use CDN for static assets',
        ]
      },
      {
        category: 'Local SEO',
        items: [
          'Add structured data for organization',
          'Create Google My Business profile',
          'Implement breadcrumb navigation',
          'Add social media meta tags',
        ]
      }
    ]
  }
  
  // Save report
  const reportPath = path.join(process.cwd(), 'seo-report.json')
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
  
  log('green', `✅ Báo cáo SEO đã được lưu: ${reportPath}`)
  
  return report
}

// Run checks
if (require.main === module) {
  checkSEORequirements()
  generateSEOReport()
}
