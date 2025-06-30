import { Metadata } from "next";
import { getPageSEO, generateBreadcrumbStructuredData } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/tabs");

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Documentation", url: "/docs" },
    { name: "Components", url: "/docs/components" },
    { name: "Tabs", url: "/docs/components/tabs" },
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
            headline: "Tabs Component - Aki UI",
            description: "Tab component for organizing content into separate views with keyboard navigation and multiple orientations.",
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
            keywords: "tabs, navigation, panels, content, tabbed interface, keyboard navigation, react component",
            url: "https://aki-ui.akitect.io/docs/components/tabs",
          }),
        }}
      />
      {children}
    </>
  );
}
