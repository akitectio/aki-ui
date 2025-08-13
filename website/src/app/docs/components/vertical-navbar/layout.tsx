import { Metadata } from "next";
import { getPageSEO, generateBreadcrumbStructuredData } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/vertical-navbar");

export default function VerticalNavbarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Documentation", url: "/docs" },
        { name: "Components", url: "/docs/components" },
        { name: "VerticalNavbar", url: "/docs/components/vertical-navbar" },
    ];

    const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        breadcrumbStructuredData,
                        {
                            "@context": "https://schema.org",
                            "@type": "TechArticle",
                            headline: "VerticalNavbar Component - Aki UI",
                            description:
                                "A flexible vertical navigation sidebar component perfect for dashboards and admin panels with customizable styling and behavior.",
                            author: {
                                "@type": "Organization",
                                name: "Akitect.io",
                                url: "https://akitect.io",
                            },
                            publisher: {
                                "@type": "Organization",
                                name: "Akitect.io",
                                url: "https://akitect.io",
                                logo: {
                                    "@type": "ImageObject",
                                    url: "https://aki-ui.akitect.io/aki-ui-icon.png",
                                },
                            },
                            inLanguage: "en",
                            keywords: "vertical navbar, sidebar, navigation, dashboard, admin panel, menu, react component",
                            url: "https://aki-ui.akitect.io/docs/components/vertical-navbar",
                            datePublished: "2024-01-01",
                            dateModified: new Date().toISOString(),
                        },
                    ]),
                }}
            />
            {children}
        </>
    );
}
