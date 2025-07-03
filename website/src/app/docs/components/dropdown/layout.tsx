import { Metadata } from "next";
import { getPageSEO, generateBreadcrumbStructuredData } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/dropdown");

export default function DropdownLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Documentation", url: "/docs" },
        { name: "Components", url: "/docs/components" },
        { name: "Dropdown", url: "/docs/components/dropdown" },
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
                        headline: "Dropdown Component - Aki UI",
                        description: "A toggleable menu component for displaying a list of options, actions, or links.",
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
                        keywords: "dropdown, menu, toggleable, options, actions, links, navigation, accessibility, react component",
                        url: "https://aki-ui.akitect.io/docs/components/dropdown",
                    }),
                }}
            />
            {children}
        </>
    );
}
