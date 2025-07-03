import { Metadata } from 'next';
import { getPageSEO, generateBreadcrumbStructuredData } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/navbar");

export default function NavbarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Documentation", url: "/docs" },
        { name: "Components", url: "/docs/components" },
        { name: "Navbar", url: "/docs/components/navbar" },
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
                        headline: "Navbar Component - Aki UI",
                        description: "Navigation bar component with branding, menu items, and actions for responsive web applications.",
                        author: {
                            "@type": "Organization",
                            name: "Akitect.io",
                            url: "https://akitect.io",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Aki UI",
                            url: "https://aki-ui.akitect.io",
                        },
                        articleSection: "Components",
                        keywords: "navbar, navigation, menu, header, responsive, react, component",
                        url: "https://aki-ui.akitect.io/docs/components/navbar",
                    }),
                }}
            />
            {children}
        </>
    );
}
