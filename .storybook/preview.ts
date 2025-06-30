import type { Preview } from "@storybook/react";
import "../src/styles.css";
import { ToastProvider } from "../src/lib/components/Toast";
import { useSEO } from "../src/lib/seo";
import { getComponentSEO } from "../src/lib/storybook-seo";
import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";

// SEO Decorator for Storybook stories
const withSEO = (Story: any, context: any) => {
  const { title, component } = context;

  // Extract component name from title (e.g., "Components/Button" -> "Button")
  const componentName = title?.split("/").pop() || "Component";

  // Apply SEO for the component
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const seoData = getComponentSEO(componentName);

      // Update document title
      document.title = seoData.title;

      // Update meta tags
      const updateOrCreateMeta = (
        name: string,
        content: string,
        isProperty = false
      ) => {
        const attr = isProperty ? "property" : "name";
        const selector = `meta[${attr}="${name}"]`;
        let meta = document.querySelector(selector) as HTMLMetaElement;

        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute(attr, name);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      // Basic meta tags
      updateOrCreateMeta("description", seoData.description);
      updateOrCreateMeta("keywords", seoData.keywords);

      // Open Graph meta tags
      updateOrCreateMeta("og:title", seoData.ogTitle, true);
      updateOrCreateMeta("og:description", seoData.ogDescription, true);
      updateOrCreateMeta("og:image", seoData.ogImage, true);
      updateOrCreateMeta("og:type", "website", true);
      updateOrCreateMeta("og:url", window.location.href, true);

      // Twitter Card meta tags
      updateOrCreateMeta("twitter:card", "summary_large_image");
      updateOrCreateMeta("twitter:title", seoData.ogTitle);
      updateOrCreateMeta("twitter:description", seoData.ogDescription);
      updateOrCreateMeta("twitter:image", seoData.ogImage);

      // Structured data
      if (seoData.structuredData) {
        let structuredDataScript = document.getElementById("structured-data");
        if (!structuredDataScript) {
          structuredDataScript = document.createElement("script");
          structuredDataScript.id = "structured-data";
          structuredDataScript.type = "application/ld+json";
          document.head.appendChild(structuredDataScript);
        }
        structuredDataScript.textContent = JSON.stringify(
          seoData.structuredData
        );
      }
    }
  }, [componentName]);

  return React.createElement(Story);
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "gray", value: "#f9fafb" },
        { name: "dark", value: "#111827" },
      ],
    },
    docs: {
      story: {
        inline: true,
      },
      canvas: {
        sourceState: "shown",
      },
    },
    layout: "centered",
  },
  decorators: [
    withSEO,
    (Story) => (
      <div style={{ padding: "1.5rem", borderRadius: "0.5rem" }}>
        <ToastProvider>
          <Story />
        </ToastProvider>
      </div>
    ),
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
