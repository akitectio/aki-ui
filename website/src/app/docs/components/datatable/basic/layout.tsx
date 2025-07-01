import { Metadata } from "next";
import { getPageSEO, generateBreadcrumbStructuredData } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/datatable/basic");

export default function DataTableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Documentation", url: "/docs" },
    { name: "Components", url: "/docs/components" },
    { name: "DataTable - Basic", url: "/docs/components/datatable/basic" },
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
            headline: "DataTable Basic - Aki UI",
            description: "Basic data table component with essential features like sorting, searching, and pagination for simple data display needs.",
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
            keywords: "datatable, table, grid, sorting, filtering, pagination, selection, data display, react component",
            url: "https://aki-ui.akitect.io/docs/components/datatable/basic",
          }),
        }}
      />
      {children}
    </>
  );
}
