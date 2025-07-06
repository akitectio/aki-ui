#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Block definitions
const blocks = [
    'authentication-form',
    'calendar-widget',
    'chat-interface',
    'checkout-form',
    'contact-form',
    'dashboard-analytics',
    'data-table-advanced',
    'hero-section',
    'login-simple',
    'login-with-image',
    'navbar-with-search',
    'pricing-table',
    'product-card',
    'reviews-testimonials',
    'settings-form',
    'sidebar-collapsible'
]

// Layout template
const layoutTemplate = (blockId) => `import { generateBlockLayout } from '@/lib/blockDefinitions'

const blockSeo = generateBlockLayout('${blockId}')
export const metadata = blockSeo?.metadata

export default function BlockLayout({
    children,
}: {
    children: React.ReactNode
}) {
    if (!blockSeo) return children

    return (
        <>
            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blockSeo.jsonLd) }}
            />
            {children}
        </>
    )
}
`

// Generate layouts for all blocks
blocks.forEach(blockId => {
    const blockDir = path.join(__dirname, '..', 'src', 'app', 'blocks', blockId)
    const layoutPath = path.join(blockDir, 'layout.tsx')

    // Create directory if it doesn't exist
    if (!fs.existsSync(blockDir)) {
        fs.mkdirSync(blockDir, { recursive: true })
    }

    // Only create layout if it doesn't exist
    if (!fs.existsSync(layoutPath)) {
        fs.writeFileSync(layoutPath, layoutTemplate(blockId))
        console.log(`✅ Created layout for ${blockId}`)
    } else {
        console.log(`⚠️  Layout already exists for ${blockId}`)
    }
})

console.log('\n🚀 Block SEO layouts generation complete!')
