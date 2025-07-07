import { Metadata } from 'next'
import { generateBreadcrumbStructuredData } from '@/lib/seo'

export const metadata: Metadata = {
    title: 'LLM Integration - Aki UI',
    description: 'Seamlessly integrate Aki UI with Large Language Models and AI-powered development tools.',
    keywords: 'LLM, Large Language Models, AI integration, Aki UI, AI tools, AI development',
    openGraph: {
        title: 'LLM Integration - Aki UI',
        description: 'Seamlessly integrate Aki UI with Large Language Models and AI-powered development tools.',
        url: 'https://aki-ui.akitect.io/ai/llm',
        siteName: 'Aki UI',
        images: [
            {
                url: 'https://aki-ui.akitect.io/aki-ui-banner.png',
                width: 1200,
                height: 630,
                alt: 'Aki UI LLM Integration',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LLM Integration - Aki UI',
        description: 'Seamlessly integrate Aki UI with Large Language Models and AI-powered development tools.',
        images: ['https://aki-ui.akitect.io/aki-ui-banner.png'],
    },
}

export default function LlmLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const breadcrumbData = generateBreadcrumbStructuredData([
        { name: 'Home', url: '/' },
        { name: 'AI Integration', url: '/ai' },
        { name: 'LLM Integration', url: '/ai/llm' }
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
