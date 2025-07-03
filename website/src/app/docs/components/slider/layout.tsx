import { Metadata } from 'next';
import { generateBreadcrumbStructuredData } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Slider Component - Aki UI',
    description: 'A component for selecting a value from a range with customizable appearance and behavior.',
    keywords: ['slider', 'range', 'input', 'form', 'react', 'component', 'aki ui'],
};

export default function SliderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Documentation", url: "/docs" },
        { name: "Components", url: "/docs/components" },
        { name: "Slider", url: "/docs/components/slider" },
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
                        headline: "Slider Component - Aki UI",
                        description: "A component for selecting a value from a range with customizable appearance and behavior.",
                        author: {
                            "@type": "Organization",
                            name: "Akitect.io",
                            url: "https://akitect.io",
                        },
                        datePublished: "2024-01-01",
                        dateModified: new Date().toISOString(),
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": "https://aki-ui.com/docs/components/slider",
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
                        keywords: "slider, range, input, form, react, component, aki ui",
                    }),
                }}
            />
            {children}
        </>
    );
}
