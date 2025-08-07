import { Metadata } from "next";
import { getPageSEO, generateBreadcrumbStructuredData } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/imagecrop");

export default function ImageCropLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Documentation", url: "/docs" },
        { name: "Components", url: "/docs/components" },
        { name: "Image Crop", url: "/docs/components/imagecrop" },
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
                        headline: "Image Crop Component - Aki UI",
                        description: "A React component for cropping images with customizable aspect ratios and interactive controls.",
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
                        keywords: "image crop, photo crop, aspect ratio, image editing, file upload, user interface, react component",
                        url: "https://aki-ui.akitect.io/docs/components/imagecrop",
                    }),
                }}
            />
            {children}
        </>
    );
}
