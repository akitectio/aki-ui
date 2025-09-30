import { z } from "zod";
import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";

// Request schemas
export const GenerateHTMXAdapterRequest = z.object({
  components: z.array(z.string()).optional().describe("List of Aki UI components to include"),
  outputFormat: z.enum(["web-components", "function-api", "both"]).default("both")
    .describe("Output format: web-components for HTML tags, function-api for JS functions, both for complete solution"),
  includeStyles: z.boolean().default(true).describe("Include CSS styles in the output"),
  minified: z.boolean().default(false).describe("Generate minified output")
});

export const GenerateHTMXIntegrationRequest = z.object({
  projectType: z.enum(["vanilla", "django", "rails", "php", "asp.net"]).default("vanilla")
    .describe("Type of backend framework"),
  components: z.array(z.string()).describe("Components to integrate"),
  useCase: z.enum(["form", "table", "modal", "navigation", "dashboard"]).describe("Primary use case"),
  includeExamples: z.boolean().default(true).describe("Include usage examples")
});

export const GenerateHTMXExamplesRequest = z.object({
  component: z.string().describe("Aki UI component name"),
  scenario: z.enum(["basic", "form-handling", "dynamic-updates", "ajax-loading", "real-time"])
    .describe("Usage scenario"),
  backend: z.enum(["json", "html-fragments", "mixed"]).default("json")
    .describe("Backend response format")
});

export const OptimizeHTMXBundleRequest = z.object({
  components: z.array(z.string()).describe("Components to include in bundle"),
  target: z.enum(["modern", "legacy", "universal"]).default("modern")
    .describe("Browser support target"),
  treeshake: z.boolean().default(true).describe("Enable tree shaking"),
  externalize: z.array(z.string()).optional().describe("Dependencies to externalize")
});

export type GenerateHTMXAdapterRequest = z.infer<typeof GenerateHTMXAdapterRequest>;
export type GenerateHTMXIntegrationRequest = z.infer<typeof GenerateHTMXIntegrationRequest>;
export type GenerateHTMXExamplesRequest = z.infer<typeof GenerateHTMXExamplesRequest>;
export type OptimizeHTMXBundleRequest = z.infer<typeof OptimizeHTMXBundleRequest>;

export class HTMXIntegrationTool {
  /**
   * Generate HTMX adapter code for Aki UI components
   */
  async generateAdapter(args: any): Promise<CallToolResult> {
    const request = GenerateHTMXAdapterRequest.parse(args);
    const { components = [], outputFormat, includeStyles, minified } = request;
    
    const availableComponents = [
      "Button", "Card", "Input", "Badge", "Alert", "Avatar", "Breadcrumb",
      "DataTable", "Modal", "Dropdown", "Accordion", "Tabs", "Form", "Select"
    ];
    
    const selectedComponents = components.length > 0 ? components : availableComponents;

    let result = "";

    if (outputFormat === "web-components" || outputFormat === "both") {
      result += this.generateWebComponentsCode(selectedComponents, includeStyles);
    }

    if (outputFormat === "function-api" || outputFormat === "both") {
      result += this.generateFunctionAPICode(selectedComponents);
    }

    result += this.generateUsageExamples(selectedComponents, outputFormat);

    return {
      content: [
        {
          type: "text",
          text: `# Aki UI HTMX Adapter

${result}

## Installation

\`\`\`bash
npm install @akitectio/aki-ui
# or via CDN
<script src="https://cdn.jsdelivr.net/npm/@akitectio/aki-ui/dist/htmx-adapter.js"></script>
\`\`\`

## Quick Start

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@akitectio/aki-ui/dist/styles.css">
    <script src="https://unpkg.com/htmx.org@1.9.6"></script>
    <script src="https://cdn.jsdelivr.net/npm/@akitectio/aki-ui/dist/htmx-adapter.js"></script>
</head>
<body>
    <!-- Use components directly -->
    <aki-button data-variant="primary" hx-get="/api/data">Load Data</aki-button>
</body>
</html>
\`\`\``
        }
      ]
    };
  }

  /**
   * Generate HTMX integration guide for specific project type
   */
  async generateIntegration(args: any): Promise<CallToolResult> {
    const request = GenerateHTMXIntegrationRequest.parse(args);
    const { projectType, components, useCase, includeExamples } = request;

    const integration = this.generateProjectIntegration(projectType, components, useCase);
    const examples = includeExamples ? this.generateProjectExamples(projectType, useCase) : "";

    return {
      content: [
        {
          type: "text",
          text: `# ${projectType.toUpperCase()} + HTMX + Aki UI Integration

${integration}

${examples}

## Project Structure
\`\`\`
${this.generateProjectStructure(projectType)}
\`\`\`

## Next Steps
1. Install dependencies
2. Configure build process
3. Test components
4. Deploy to production`
        }
      ]
    };
  }

  /**
   * Generate specific HTMX examples for components
   */
  async generateExamples(args: any): Promise<CallToolResult> {
    const request = GenerateHTMXExamplesRequest.parse(args);
    const { component, scenario, backend } = request;

    const examples = this.generateComponentExamples(component, scenario, backend);

    return {
      content: [
        {
          type: "text",
          text: `# ${component} HTMX Examples - ${scenario}

${examples}

## Backend Response Examples

${this.generateBackendExamples(component, scenario, backend)}

## Error Handling

${this.generateErrorHandling(component, scenario)}`
        }
      ]
    };
  }

  /**
   * Optimize HTMX bundle for production
   */
  async optimizeBundle(args: any): Promise<CallToolResult> {
    const request = OptimizeHTMXBundleRequest.parse(args);
    const { components, target, treeshake, externalize } = request;

    const config = this.generateBundleConfig(components, target, treeshake, externalize);

    return {
      content: [
        {
          type: "text",
          text: `# Optimized HTMX Bundle Configuration

## Build Configuration

\`\`\`javascript
${config.buildConfig}
\`\`\`

## Webpack Configuration

\`\`\`javascript
${config.webpackConfig}
\`\`\`

## Vite Configuration

\`\`\`javascript
${config.viteConfig}
\`\`\`

## Performance Analysis

- Bundle size: ~${config.estimatedSize}
- Components included: ${components.length}
- Tree shaking: ${treeshake ? 'Enabled' : 'Disabled'}
- Target browsers: ${target}

## Optimization Tips

${config.optimizationTips.map((tip: string) => `- ${tip}`).join('\n')}`
        }
      ]
    };
  }

  private generateWebComponentsCode(components: string[], includeStyles: boolean): string {
    return `
## Web Components Usage

\`\`\`html
${components.map(comp => `<aki-${comp.toLowerCase()} data-variant="primary">Hello World</aki-${comp.toLowerCase()}>`).join('\n')}
\`\`\`

## JavaScript Registration

\`\`\`javascript
// Auto-registration (recommended)
import '@akitectio/aki-ui/adapters/htmx';

// Manual registration
import { registerAkiComponent } from '@akitectio/aki-ui/adapters/htmx';
import { ${components.join(', ')} } from '@akitectio/aki-ui';

${components.map(comp => `registerAkiComponent('aki-${comp.toLowerCase()}', ${comp});`).join('\n')}
\`\`\``;
  }

  private generateFunctionAPICode(components: string[]): string {
    return `
## Function API Usage

\`\`\`javascript
// Direct rendering
${components.map(comp => `aki.render${comp}({ variant: 'primary' }, '#container');`).join('\n')}

// Batch rendering (perfect for HTMX responses)
aki.renderMultiple([
${components.map(comp => `  { component: '${comp}', props: { variant: 'primary' }, selector: '#${comp.toLowerCase()}' }`).join(',\n')}
]);

// Update props dynamically
${components.map(comp => `aki.updateProps('#${comp.toLowerCase()}', { variant: 'success' });`).join('\n')}
\`\`\``;
  }

  private generateUsageExamples(components: string[], format: string): string {
    const examples = components.slice(0, 3).map(comp => {
      return `
### ${comp} Example

\`\`\`html
<div hx-get="/api/${comp.toLowerCase()}" hx-target="#${comp.toLowerCase()}-container">
  <aki-${comp.toLowerCase()} data-variant="primary">Click me</aki-${comp.toLowerCase()}>
</div>
<div id="${comp.toLowerCase()}-container"></div>
\`\`\`

\`\`\`javascript
// Handle HTMX response
document.addEventListener('htmx:afterRequest', (event) => {
  if (event.detail.target.id === '${comp.toLowerCase()}-container') {
    aki.render${comp}({ 
      variant: 'success',
      children: 'Updated!'
    }, '#${comp.toLowerCase()}-container');
  }
});
\`\`\``;
    });

    return `## Usage Examples\n${examples.join('\n')}`;
  }

  private generateProjectIntegration(projectType: string, components: string[], useCase: string): string {
    const integrations: Record<string, string> = {
      vanilla: `
## Vanilla HTML + HTMX Integration

### 1. Basic Setup
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@akitectio/aki-ui/dist/styles.css">
    <script src="https://unpkg.com/htmx.org@1.9.6"></script>
    <script src="https://cdn.jsdelivr.net/npm/@akitectio/aki-ui/dist/htmx-adapter.js"></script>
</head>
<body>
    <div id="app"></div>
</body>
</html>
\`\`\`

### 2. Component Usage
\`\`\`html
${components.map(comp => `<aki-${comp.toLowerCase()} data-variant="primary">Sample ${comp}</aki-${comp.toLowerCase()}>`).join('\n')}
\`\`\``,

      django: `
## Django + HTMX Integration

### 1. Template Setup
\`\`\`html
<!-- base.html -->
{% load static %}
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="{% static 'aki-ui/styles.css' %}">
    <script src="https://unpkg.com/htmx.org@1.9.6"></script>
    <script src="{% static 'aki-ui/htmx-adapter.js' %}"></script>
</head>
<body>
    {% block content %}{% endblock %}
</body>
</html>
\`\`\`

### 2. Views Integration
\`\`\`python
from django.shortcuts import render
from django.http import JsonResponse

def component_view(request):
    data = {
        'variant': 'primary',
        'children': 'Hello from Django!'
    }
    return JsonResponse(data)
\`\`\``,

      rails: `
## Ruby on Rails + HTMX Integration

### 1. Layout Setup
\`\`\`erb
<!-- app/views/layouts/application.html.erb -->
<%= stylesheet_link_tag 'aki-ui' %>
<%= javascript_include_tag 'htmx' %>
<%= javascript_include_tag 'aki-ui-htmx-adapter' %>
\`\`\`

### 2. Controller Integration
\`\`\`ruby
class ComponentsController < ApplicationController
  def show
    render json: {
      variant: 'primary',
      children: 'Hello from Rails!'
    }
  end
end
\`\`\``,

      php: `
## PHP + HTMX Integration

### 1. Basic Setup
\`\`\`php
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/assets/aki-ui.css">
    <script src="https://unpkg.com/htmx.org@1.9.6"></script>
    <script src="/assets/aki-ui-htmx-adapter.js"></script>
</head>
<body>
    <?php include 'components.php'; ?>
</body>
</html>
\`\`\`

### 2. Component Endpoint
\`\`\`php
<?php
header('Content-Type: application/json');
echo json_encode([
    'variant' => 'primary',
    'children' => 'Hello from PHP!'
]);
?>
\`\`\``
    };

    return integrations[projectType] || integrations.vanilla;
  }

  private generateProjectExamples(projectType: string, useCase: string): string {
    return `
## ${useCase.toUpperCase()} Use Case Examples

### Complete Implementation
\`\`\`html
<div class="${useCase}-container">
  <aki-button hx-get="/api/${useCase}" hx-target="#${useCase}-result">
    Load ${useCase}
  </aki-button>
  <div id="${useCase}-result"></div>
</div>
\`\`\`

### Backend Response
\`\`\`json
{
  "component": "Card",
  "props": {
    "title": "${useCase} Result",
    "variant": "success",
    "children": "Operation completed successfully!"
  }
}
\`\`\``;
  }

  private generateProjectStructure(projectType: string): string {
    const structures: Record<string, string> = {
      vanilla: `
project/
├── index.html
├── assets/
│   ├── styles.css
│   └── aki-ui-htmx-adapter.js
└── api/
    └── endpoints.js`,
      
      django: `
myproject/
├── templates/
│   ├── base.html
│   └── components/
├── static/
│   └── aki-ui/
├── views.py
└── urls.py`,
      
      rails: `
app/
├── views/
│   ├── layouts/
│   └── components/
├── assets/
│   └── javascripts/
├── controllers/
└── config/routes.rb`,
      
      php: `
public/
├── index.php
├── assets/
│   ├── aki-ui.css
│   └── aki-ui-htmx-adapter.js
└── api/
    └── components.php`
    };

    return structures[projectType] || structures.vanilla;
  }

  private generateComponentExamples(component: string, scenario: string, backend: string): string {
    const examples: Record<string, string> = {
      basic: `
\`\`\`html
<aki-${component.toLowerCase()} data-variant="primary">
  Basic ${component}
</aki-${component.toLowerCase()}>
\`\`\``,

      "form-handling": `
\`\`\`html
<form hx-post="/api/form" hx-target="#result">
  <aki-${component.toLowerCase()} name="field" data-required="true">
  </aki-${component.toLowerCase()}>
  <aki-button type="submit" data-variant="primary">Submit</aki-button>
</form>
<div id="result"></div>
\`\`\``,

      "dynamic-updates": `
\`\`\`html
<aki-${component.toLowerCase()} 
  id="dynamic-${component.toLowerCase()}"
  hx-get="/api/update" 
  hx-trigger="click"
  data-variant="primary">
  Click to Update
</aki-${component.toLowerCase()}>

<script>
document.addEventListener('htmx:afterRequest', () => {
  aki.updateProps('#dynamic-${component.toLowerCase()}', {
    variant: 'success',
    children: 'Updated!'
  });
});
</script>
\`\`\``,

      "ajax-loading": `
\`\`\`html
<aki-${component.toLowerCase()} 
  hx-get="/api/data"
  hx-target="#content"
  hx-indicator="#loading"
  data-variant="primary">
  Load Data
</aki-${component.toLowerCase()}>

<aki-alert id="loading" class="htmx-indicator" data-type="info">
  Loading...
</aki-alert>
<div id="content"></div>
\`\`\``,

      "real-time": `
\`\`\`html
<aki-${component.toLowerCase()} 
  hx-get="/api/live-data"
  hx-trigger="every 2s"
  hx-target="this"
  data-variant="primary">
  Live ${component}
</aki-${component.toLowerCase()}>
\`\`\``
    };

    return examples[scenario] || examples.basic;
  }

  private generateBackendExamples(component: string, scenario: string, backend: string): string {
    if (backend === "json") {
      return `
\`\`\`json
{
  "variant": "success",
  "children": "Updated ${component}",
  "props": {
    "disabled": false,
    "loading": false
  }
}
\`\`\``;
    }

    if (backend === "html-fragments") {
      return `
\`\`\`html
<aki-${component.toLowerCase()} data-variant="success">
  Updated ${component}
</aki-${component.toLowerCase()}>
\`\`\``;
    }

    return `
Mixed response example:
\`\`\`json
{
  "html": "<aki-${component.toLowerCase()} data-variant='success'>Updated</aki-${component.toLowerCase()}>",
  "data": { "status": "success", "timestamp": "2025-01-01T00:00:00Z" }
}
\`\`\``;
  }

  private generateErrorHandling(component: string, scenario: string): string {
    return `
\`\`\`javascript
// Error handling for ${component}
document.addEventListener('htmx:responseError', (event) => {
  aki.renderAlert({
    type: 'error',
    children: 'Failed to update ${component}. Please try again.'
  }, '#error-container');
});

// Validation errors
document.addEventListener('htmx:validation:validate', (event) => {
  const element = event.target;
  if (element.tagName.toLowerCase() === 'aki-${component.toLowerCase()}') {
    aki.updateProps(element, {
      variant: 'error',
      error: 'Invalid input'
    });
  }
});
\`\`\``;
  }

  private generateBundleConfig(components: string[], target: string, treeshake: boolean, externalize: string[] = []): any {
    return {
      buildConfig: `
// Build configuration for ${components.length} components
export default {
  entry: './src/htmx-adapter.ts',
  output: {
    filename: 'aki-ui-htmx.${target}.js',
    library: 'AkiUIHTMX',
    libraryTarget: 'umd'
  },
  optimization: {
    usedExports: ${treeshake},
    sideEffects: false
  },
  externals: ${JSON.stringify(externalize, null, 2)}
};`,

      webpackConfig: `
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/htmx-adapter.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'aki-ui-htmx.js',
    library: 'AkiUIHTMX',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    usedExports: true,
    minimize: true
  }
};`,

      viteConfig: `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/htmx-adapter.ts',
      name: 'AkiUIHTMX',
      fileName: 'aki-ui-htmx',
      formats: ['es', 'umd', 'iife']
    },
    rollupOptions: {
      external: ${JSON.stringify(externalize)},
      output: {
        globals: {}
      }
    },
    target: '${target === 'legacy' ? 'es2015' : 'esnext'}',
    minify: 'esbuild'
  }
});`,

      estimatedSize: `${Math.round(components.length * 2.5 + 15)}KB gzipped`,
      
      optimizationTips: [
        `Use tree shaking to reduce bundle size by ${treeshake ? '30-50%' : '0%'}`,
        `Target ${target} browsers for optimal performance`,
        `Consider code splitting for large applications`,
        `Use CDN for better caching and delivery`,
        `Enable gzip compression on your server`,
        `Lazy load non-critical components`
      ]
    };
  }

  getTools(): Tool[] {
    return [
      {
        name: "mcp_aki-ui_generate_htmx_adapter",
        description: "Generate HTMX adapter code for Aki UI components with web components and function API",
        inputSchema: {
          type: "object",
          properties: {
            components: {
              type: "array",
              items: { type: "string" },
              description: "List of Aki UI components to include"
            },
            outputFormat: {
              type: "string",
              enum: ["web-components", "function-api", "both"],
              default: "both",
              description: "Output format"
            },
            includeStyles: {
              type: "boolean",
              default: true,
              description: "Include CSS styles"
            },
            minified: {
              type: "boolean",
              default: false,
              description: "Generate minified output"
            }
          }
        }
      },
      {
        name: "mcp_aki-ui_generate_htmx_integration",
        description: "Generate complete HTMX integration guide for specific project types (Django, Rails, PHP, etc.)",
        inputSchema: {
          type: "object",
          properties: {
            projectType: {
              type: "string",
              enum: ["vanilla", "django", "rails", "php", "asp.net"],
              default: "vanilla",
              description: "Type of backend framework"
            },
            components: {
              type: "array",
              items: { type: "string" },
              description: "Components to integrate"
            },
            useCase: {
              type: "string",
              enum: ["form", "table", "modal", "navigation", "dashboard"],
              description: "Primary use case"
            },
            includeExamples: {
              type: "boolean",
              default: true,
              description: "Include usage examples"
            }
          },
          required: ["components", "useCase"]
        }
      },
      {
        name: "mcp_aki-ui_generate_htmx_examples",
        description: "Generate specific HTMX examples for Aki UI components with different scenarios",
        inputSchema: {
          type: "object",
          properties: {
            component: {
              type: "string",
              description: "Aki UI component name"
            },
            scenario: {
              type: "string",
              enum: ["basic", "form-handling", "dynamic-updates", "ajax-loading", "real-time"],
              description: "Usage scenario"
            },
            backend: {
              type: "string",
              enum: ["json", "html-fragments", "mixed"],
              default: "json",
              description: "Backend response format"
            }
          },
          required: ["component", "scenario"]
        }
      },
      {
        name: "mcp_aki-ui_optimize_htmx_bundle",
        description: "Generate optimized bundle configuration for HTMX projects with build configs",
        inputSchema: {
          type: "object",
          properties: {
            components: {
              type: "array",
              items: { type: "string" },
              description: "Components to include in bundle"
            },
            target: {
              type: "string",
              enum: ["modern", "legacy", "universal"],
              default: "modern",
              description: "Browser support target"
            },
            treeshake: {
              type: "boolean",
              default: true,
              description: "Enable tree shaking"
            },
            externalize: {
              type: "array",
              items: { type: "string" },
              description: "Dependencies to externalize"
            }
          },
          required: ["components"]
        }
      }
    ];
  }
}