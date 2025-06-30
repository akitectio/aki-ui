import { Metadata } from "next";
import { getPageSEO, generateBreadcrumbStructuredData } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/card");

export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Documentation", url: "/docs" },
    { name: "Components", url: "/docs/components" },
    { name: "Card", url: "/docs/components/card" },
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
            headline: "Card Component - Aki UI",
            description: "Flexible card container component for displaying content with headers, footers, and actions.",
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
            keywords: "card, container, panel, content, layout, grid, responsive, react component",
            url: "https://aki-ui.akitect.io/docs/components/card",
          }),
        }}
      />
      {children}
    </>
  );
}
