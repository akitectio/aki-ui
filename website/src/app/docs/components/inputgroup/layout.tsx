import { Metadata } from "next";
import { getPageSEO, generateBreadcrumbStructuredData } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/inputgroup");

export default function InputGroupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Documentation", url: "/docs" },
        { name: "Components", url: "/docs/components" },
        { name: "InputGroup", url: "/docs/components/inputgroup" },
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
                        headline: "InputGroup Component - Aki UI",
                        description: "A container for grouping input elements with addons and icons.",
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
                        keywords: "input group, input, form, addon, icon, container, grouping, accessibility, react component",
                        url: "https://aki-ui.akitect.io/docs/components/inputgroup",
                    }),
                }}
            />
            {children}
        </>
    );
}
