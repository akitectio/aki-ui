import { Metadata } from "next";

export interface BlockMetadata {
  title: string;
  description: string;
  category: string;
  blockId: string;
}

export function generateBlockMetadata({
  title,
  description,
  category,
  blockId,
}: BlockMetadata): Metadata {
  const fullTitle = `${title} - ${category} Block | Aki UI`;
  const url = `https://aki-ui.com/blocks/${blockId}`;

  return {
    title: fullTitle,
    description: description,
    keywords: `${title.toLowerCase()}, ${category.toLowerCase()}, React component, UI block, Aki UI, building blocks, ${blockId}`,
    openGraph: {
      title: fullTitle,
      description: description,
      type: "website",
      url: url,
      images: [
        {
          url: `https://aki-ui.com/blocks/${blockId}.png`,
          width: 1200,
          height: 630,
          alt: `${title} - ${category} Block Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description,
      images: [`https://aki-ui.com/blocks/${blockId}.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateBlockJsonLd({
  title,
  description,
  category,
  blockId,
}: BlockMetadata) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: `https://aki-ui.com/blocks/${blockId}`,
    mainEntity: {
      "@type": "SoftwareSourceCode",
      name: title,
      description: description,
      programmingLanguage: "TypeScript",
      runtimePlatform: "React",
      applicationCategory: "DeveloperApplication",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://aki-ui.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blocks",
          item: "https://aki-ui.com/blocks",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: `https://aki-ui.com/blocks/${blockId}`,
        },
      ],
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Aki UI",
      url: "https://aki-ui.com",
    },
  };
}
