import { Metadata } from 'next';
import { generateBreadcrumbStructuredData } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Breadcrumb Component - Aki UI',
    description: 'Navigation breadcrumb component for showing hierarchical location within an application with customizable separators and styling.',
    keywords: ['breadcrumb', 'navigation', 'hierarchical', 'path', 'react', 'component', 'aki ui'],
};

export default function BreadcrumbLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Documentation", url: "/docs" },
        { name: "Components", url: "/docs/components" },
        { name: "Breadcrumb", url: "/docs/components/breadcrumb" },
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
                        headline: "Breadcrumb Component - Aki UI",
                        description: "Navigation breadcrumb component for showing hierarchical location within an application with customizable separators and styling.",
                        author: {
                            "@type": "Organization",
                            name: "Akitect.io",
                            url: "https://akitect.io",
                        },
                        datePublished: "2024-01-01",
                        dateModified: new Date().toISOString(),
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": "https://aki-ui.com/docs/components/breadcrumb",
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
                        keywords: "breadcrumb, navigation, hierarchical, path, react, component, aki ui",
                    }),
                }}
            />
            {children}
        </>
    );
}
