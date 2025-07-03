import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Accordion Component - Aki UI',
    description: 'Collapsible content sections for organizing information in a space-efficient way with proper accessibility support.',
    keywords: 'Accordion, React Accordion, Aki UI Accordion, collapsible sections, expandable content, React components',
    openGraph: {
        title: 'Accordion Component - Aki UI',
        description: 'Collapsible content sections for organizing information in a space-efficient way with proper accessibility support.',
        url: 'https://akitectio.github.io/aki-ui/docs/components/accordion',
        type: 'website',
        images: [
            {
                url: 'https://akitectio.github.io/aki-ui/aki-ui-banner.png',
                width: 1200,
                height: 630,
                alt: 'Aki UI Accordion Component',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Accordion Component - Aki UI',
        description: 'Collapsible content sections for organizing information in a space-efficient way with proper accessibility support.',
        images: ['https://akitectio.github.io/aki-ui/aki-ui-banner.png'],
    }
}

export default function AccordionLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
