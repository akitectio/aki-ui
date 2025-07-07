import { Metadata } from 'next'
import { generateBreadcrumbStructuredData, generateFAQStructuredData } from '@/lib/seo'

export const metadata: Metadata = {
    title: 'AI Prompt Library for UI Development - Aki UI',
    description: 'A comprehensive collection of optimized prompts for AI-assisted development with Aki UI components. Includes prompts for component creation, form generation, theming, and MCP-optimized tools.',
    keywords: 'Aki UI, AI prompts, prompt engineering, AI development, React components, UI component prompts, LLM integration, MCP integration, UI design prompts, component design, form generation, AI tools, frontend development',
    openGraph: {
        title: 'AI Prompt Library for UI Development - Aki UI',
        description: 'A comprehensive collection of optimized prompts for AI-assisted development with Aki UI components. Includes prompts for component creation, form generation, theming, and MCP-optimized tools.',
        url: 'https://aki-ui.akitect.io/ai/prompts',
        siteName: 'Aki UI',
        images: [
            {
                url: 'https://aki-ui.akitect.io/aki-ui-banner.png',
                width: 1200,
                height: 630,
                alt: 'Aki UI AI Prompt Library',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Prompt Library for UI Development - Aki UI',
        description: 'A comprehensive collection of optimized prompts for AI-assisted development with Aki UI components.',
        images: ['https://aki-ui.akitect.io/aki-ui-banner.png'],
    },
}

export default function PromptsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Breadcrumb structured data
    const breadcrumbData = generateBreadcrumbStructuredData([
        { name: 'Home', url: '/' },
        { name: 'AI Integration', url: '/ai' },
        { name: 'Prompt Library', url: '/ai/prompts' }
    ])

    // FAQ structured data
    const faqData = generateFAQStructuredData([
        {
            question: "What is the Aki UI Prompt Library?",
            answer: "The Aki UI Prompt Library is a collection of optimized prompts for AI-assisted development with Aki UI components. These prompts help developers create, customize, and optimize UI components using AI tools."
        },
        {
            question: "How do I use the prompts in this library?",
            answer: "Copy the prompt you need, replace any placeholder variables (like [COMPONENT_TYPE]) with specific values, and then paste it into your AI assistant or LLM tool. These prompts are designed to work with both general LLMs and MCP-optimized AI assistants."
        },
        {
            question: "What are MCP-optimized prompts?",
            answer: "MCP (Model Context Protocol) optimized prompts are specially designed to work with AI assistants that support the Model Context Protocol. These prompts can directly invoke MCP tools to generate components, validate code, create themes, and more."
        },
        {
            question: "Can I customize these prompts for my own projects?",
            answer: "Yes! We encourage you to customize these prompts by combining elements from different prompts and adding your own project-specific details to get the most accurate and helpful responses from AI assistants."
        },
        {
            question: "How often is the Prompt Library updated?",
            answer: "The Prompt Library is regularly updated with new prompts as we add features to Aki UI and discover more effective ways to use AI for component development. Check back frequently for new additions."
        }
    ])

    // Collection structured data
    const collectionData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Aki UI Prompt Library",
        "description": "A collection of optimized prompts for AI-assisted development with Aki UI components.",
        "url": "https://aki-ui.akitect.io/ai/prompts",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Component Creation Prompts",
                    "description": "Prompts for creating and customizing UI components with Aki UI",
                    "url": "https://aki-ui.akitect.io/ai/prompts?category=component"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Form Generation Prompts",
                    "description": "Prompts for building forms with validation and UX",
                    "url": "https://aki-ui.akitect.io/ai/prompts?category=form"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "MCP Integration Prompts",
                    "description": "Prompts specifically designed for MCP-powered AI assistants",
                    "url": "https://aki-ui.akitect.io/ai/prompts?category=mcp"
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionData) }}
            />
            {children}
        </>
    )
}
