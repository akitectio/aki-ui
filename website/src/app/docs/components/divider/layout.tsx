import { Metadata } from "next";
import { getPageSEO, generateBreadcrumbStructuredData } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/divider");

export default function DividerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Documentation", url: "/docs" },
        { name: "Components", url: "/docs/components" },
        { name: "Divider", url: "/docs/components/divider" },
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
                        headline: "Divider Component - Aki UI",
                        description: "A visual separator used to create clear boundaries between different sections of content.",
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
                        keywords: "divider, separator, line, boundary, section, visual, horizontal, vertical, accessibility, react component",
                        url: "https://aki-ui.akitect.io/docs/components/divider",
                    }),
                }}
            />
            {children}
        </>
    );
}
