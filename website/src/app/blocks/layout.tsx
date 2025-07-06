import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Building Blocks for the Web - Aki UI',
    description: 'Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.',
    keywords: 'React components, UI blocks, building blocks, dashboard, authentication, forms, navigation, web development, TypeScript, Tailwind CSS',
    openGraph: {
        title: 'Building Blocks for the Web - Aki UI',
        description: 'Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.',
        type: 'website',
        url: 'https://aki-ui.com/blocks',
        images: [
            {
                url: 'https://aki-ui.com/aki-ui-banner.png',
                width: 1200,
                height: 630,
                alt: 'Aki UI - Building Blocks for the Web'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Building Blocks for the Web - Aki UI',
        description: 'Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.',
        images: ['https://aki-ui.com/aki-ui-banner.png']
    }
}

export default function BlocksLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // JSON-LD structured data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Building Blocks for the Web - Aki UI',
        description: 'Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.',
        url: 'https://aki-ui.com/blocks',
        mainEntity: {
            '@type': 'SoftwareApplication',
            name: 'Aki UI',
            description: 'Modern React UI component library with building blocks',
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Web',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
            }
        },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://aki-ui.com'
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Blocks',
                    item: 'https://aki-ui.com/blocks'
                }
            ]
        }
    }

    return (
        <>
            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    )
}
