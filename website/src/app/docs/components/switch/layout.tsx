import { Metadata } from "next";
import { getPageSEO, generateBreadcrumbStructuredData } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/switch");

export default function SwitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Documentation", url: "/docs" },
    { name: "Components", url: "/docs/components" },
    { name: "Switch", url: "/docs/components/switch" },
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
            headline: "Switch Component - Aki UI",
            description: "Toggle switch component for boolean inputs, perfect for settings and preferences with smooth animations.",
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
            keywords: "switch, toggle, boolean, settings, preferences, on/off, animation, react component",
            url: "https://aki-ui.akitect.io/docs/components/switch",
          }),
        }}
      />
      {children}
    </>
  );
}
