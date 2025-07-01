import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/datatable/filtering");

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Documentation", url: "/docs" },
    { name: "Components", url: "/docs/components" },
    { name: "DataTable", url: "/docs/components/datatable" },
    { name: "DataTable - Filtering", url: "/docs/components/datatable/filtering" },
];

const pageInfo = {
    title: "DataTable - Filtering",
    description: "Comprehensive filtering capabilities with multiple filter types, custom filters, and real-time search functionality for DataTable component.",
    breadcrumb: breadcrumbItems,
    section: "Data Components",
    tags: ["datatable", "filtering", "search", "components"],
    lastModified: new Date().toISOString(),
    author: "Aki UI Team",
    readingTime: "8 min read",
    related: [
        { title: "DataTable - Basic", url: "/docs/components/datatable/basic" },
        { title: "DataTable - Advanced", url: "/docs/components/datatable/advanced" },
        { title: "DataTable - Server Side", url: "/docs/components/datatable/server-side" },
    ],
    features: [
        "Column-specific filtering",
        "Global search functionality", 
        "Custom filter types",
        "Real-time filtering",
        "Performance optimization",
    ],
    navigation: {
        prev: { title: "DataTable - Server Side", url: "/docs/components/datatable/server-side" },
        next: { title: "DataTable - Editable", url: "/docs/components/datatable/editable" },
    },
    structured: {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "DataTable Filtering - Advanced Data Filtering Components",
        "description": "Learn how to implement advanced filtering capabilities in DataTable components with multiple filter types and custom search functionality.",
        "author": {
            "@type": "Organization",
            "name": "Aki UI"
        },
        "publisher": {
            "@type": "Organization", 
            "name": "Akitect.io",
            "logo": {
                "@type": "ImageObject",
                "url": "https://aki-ui.akitect.io/aki-ui-logo.svg"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://aki-ui.akitect.io/docs/components/datatable/filtering"
        },
        "keywords": "datatable, filtering, search, custom filters, real-time filtering, react component",
        "url": "https://aki-ui.akitect.io/docs/components/datatable/filtering",
    }
};

export default function DataTableFilteringLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(pageInfo.structured),
                }}
            />
            {children}
        </>
    );
}
