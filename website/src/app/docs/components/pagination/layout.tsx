import { Metadata } from 'next';
import { generateBreadcrumbStructuredData } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Pagination Component - Aki UI',
    description: 'Navigate through pages of content with the Pagination component. Features page numbers, navigation controls, and responsive design.',
    keywords: ['pagination', 'navigation', 'pages', 'react', 'component', 'aki ui'],
};

export default function PaginationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Documentation", url: "/docs" },
        { name: "Components", url: "/docs/components" },
        { name: "Pagination", url: "/docs/components/pagination" },
    ];

    const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbStructuredData),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: "Pagination Component - Aki UI",
                        description: "Navigate through pages of content with the Pagination component. Features page numbers, navigation controls, and responsive design.",
                        author: {
                            "@type": "Organization",
                            name: "Akitect.io",
                            url: "https://akitect.io",
                        },
                        datePublished: "2024-01-01",
                        dateModified: new Date().toISOString(),
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": "https://aki-ui.com/docs/components/pagination",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Akitect.io",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://aki-ui.com/aki-ui-logo.svg",
                            },
                        },
                        articleSection: "Documentation",
                        keywords: "pagination, navigation, pages, react, component, aki ui",
                    }),
                }}
            />
            {children}
        </>
    );
}
