import { Metadata } from 'next'
import { generateBreadcrumbStructuredData } from '@/lib/seo'

export const metadata: Metadata = {
    title: 'MCP Integration - Aki UI',
    description: 'Model Context Protocol server for seamless AI assistant integration with Aki UI components.',
    keywords: 'MCP, Model Context Protocol, AI integration, Aki UI, AI tools, component generation',
    openGraph: {
        title: 'MCP Integration - Aki UI',
        description: 'Model Context Protocol server for seamless AI assistant integration with Aki UI components.',
        url: 'https://aki-ui.akitect.io/ai/mcp',
        siteName: 'Aki UI',
        images: [
            {
                url: 'https://aki-ui.akitect.io/aki-ui-banner.png',
                width: 1200,
                height: 630,
                alt: 'Aki UI MCP Integration',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MCP Integration - Aki UI',
        description: 'Model Context Protocol server for seamless AI assistant integration with Aki UI components.',
        images: ['https://aki-ui.akitect.io/aki-ui-banner.png'],
    },
}

export default function McpLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const breadcrumbData = generateBreadcrumbStructuredData([
        { name: 'Home', url: '/' },
        { name: 'AI Integration', url: '/ai' },
        { name: 'MCP Integration', url: '/ai/mcp' }
    ])

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
            />
            {children}
        </>
    )
}
