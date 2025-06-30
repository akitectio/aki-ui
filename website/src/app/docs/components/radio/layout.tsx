import { Metadata } from "next";
import { getPageSEO, generateBreadcrumbStructuredData } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/radio");

export default function RadioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Documentation", url: "/docs" },
    { name: "Components", url: "/docs/components" },
    { name: "Radio", url: "/docs/components/radio" },
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
            headline: "Radio Component - Aki UI",
            description: "Radio button component for single selection from multiple options with full accessibility and customization.",
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
            keywords: "radio, form, selection, input, choice, single select, accessibility, react component",
            url: "https://aki-ui.akitect.io/docs/components/radio",
          }),
        }}
      />
      {children}
    </>
  );
}
