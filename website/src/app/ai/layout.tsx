import { Metadata } from 'next'
import { generateBreadcrumbStructuredData } from '@/lib/seo'

export const metadata: Metadata = {
    title: 'AI Integration Hub - Aki UI',
    description: 'Supercharge your development with AI-powered tools and integrations for Aki UI components.',
    keywords: 'AI integration, Aki UI, AI tools, LLM, MCP, prompts, AI development',
    openGraph: {
        title: 'AI Integration Hub - Aki UI',
        description: 'Supercharge your development with AI-powered tools and integrations for Aki UI components.',
        url: 'https://aki-ui.akitect.io/ai',
        siteName: 'Aki UI',
        images: [
            {
                url: 'https://aki-ui.akitect.io/aki-ui-banner.png',
                width: 1200,
                height: 630,
                alt: 'Aki UI AI Integration Hub',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Integration Hub - Aki UI',
        description: 'Supercharge your development with AI-powered tools and integrations for Aki UI components.',
        images: ['https://aki-ui.akitect.io/aki-ui-banner.png'],
    },
}

export default function AILayout({
    children,
}: {
    children: React.ReactNode
}) {
    const breadcrumbData = generateBreadcrumbStructuredData([
        { name: 'Home', url: '/' },
        { name: 'AI Integration', url: '/ai' }
    ])

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
            />
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </div>
            </div>
        </>
    )
}
