import { Tool, CallToolResult } from "@modelcontextprotocol/sdk/types.js";

export interface LayoutConfig {
  type: "grid" | "flexbox" | "dashboard" | "sidebar" | "hero" | "content";
  responsive: boolean;
  breakpoints?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  spacing?: string;
  alignment?: "start" | "center" | "end" | "stretch";
}

export class LayoutTools {
  getTools(): Tool[] {
    return [
      {
        name: "generate_layout",
        description: "Generate layout structure using Aki UI components",
        inputSchema: {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: [
                "grid",
                "flexbox",
                "dashboard",
                "sidebar",
                "hero",
                "content",
                "admin",
                "landing",
                "block",
              ],
              description: "Type of layout to generate",
            },
            blockType: {
              type: "string",
              enum: [
                "dashboard",
                "stats",
                "table",
                "cards",
                "form",
                "sidebar-nav",
                "hero-section",
                "pricing",
                "testimonials",
                "contact",
              ],
              description: "Type of block template to generate (only when type is 'block')",
            },
            sections: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  content: { type: "string" },
                  width: { type: "string" },
                  height: { type: "string" },
                },
              },
              description: "Layout sections and their properties",
            },
            responsive: {
              type: "boolean",
              description: "Make layout responsive",
              default: true,
            },
            features: {
              type: "array",
              items: { type: "string" },
              description:
                "Features to include (navigation, footer, sidebar, etc.)",
            },
          },
          required: ["type"],
        },
      },
      {
        name: "responsive_design_check",
        description: "Validate responsive design implementation",
        inputSchema: {
          type: "object",
          properties: {
            code: {
              type: "string",
              description: "Layout code to validate for responsive design",
            },
          },
          required: ["code"],
        },
      },
      {
        name: "grid_calculator",
        description: "Calculate CSS Grid configurations for complex layouts",
        inputSchema: {
          type: "object",
          properties: {
            columns: {
              type: "number",
              description: "Number of columns",
            },
            rows: {
              type: "number",
              description: "Number of rows",
            },
            gap: {
              type: "string",
              description: "Gap between grid items",
            },
            areas: {
              type: "array",
              items: { type: "string" },
              description: "Named grid areas",
            },
          },
          required: ["columns"],
        },
      },
    ];
  }

  async generateLayout(args: any): Promise<CallToolResult> {
    const { type, blockType, sections = [], responsive = true, features = [] } = args;

    // Handle block generation
    if (type === "block" && blockType) {
      return this.generateBlock(blockType, responsive, features);
    }

    const layoutCode = this.generateLayoutCode(
      type,
      sections,
      responsive,
      features
    );
    const cssCode = this.generateLayoutCSS(type, responsive);
    const responsiveBreakpoints = responsive
      ? this.generateResponsiveBreakpoints(type)
      : "";

    return {
      content: [
        {
          type: "text",
          text: `# ${type.charAt(0).toUpperCase() + type.slice(1)} Layout

## Layout Component
\`\`\`tsx
${layoutCode}
\`\`\`

## CSS/Tailwind Classes
\`\`\`css
${cssCode}
\`\`\`

${
  responsive
    ? `## Responsive Breakpoints
\`\`\`css
${responsiveBreakpoints}
\`\`\``
    : ""
}

## Features Included
${this.generateLayoutFeatures(features, responsive)}

## Usage Example
\`\`\`tsx
function App() {
  return (
    <div className="min-h-screen">
      <${type.charAt(0).toUpperCase() + type.slice(1)}Layout />
    </div>
  );
}
\`\`\`

## Customization Tips
${this.generateCustomizationTips(type)}
`,
        },
      ],
    };
  }

  async generateBlock(blockType: string, responsive: boolean = true, features: string[] = []): Promise<CallToolResult> {
    const blockCode = this.generateBlockCode(blockType, responsive, features);
    const blockDeps = this.getBlockDependencies(blockType);
    const blockProps = this.getBlockProps(blockType);

    return {
      content: [
        {
          type: "text",
          text: `# ${blockType.charAt(0).toUpperCase() + blockType.slice(1)} Block

## Component Code
\`\`\`tsx
${blockCode}
\`\`\`

## Dependencies
\`\`\`tsx
import { ${blockDeps.join(', ')} } from '@akitectio/aki-ui';
\`\`\`

## Props Interface
\`\`\`typescript
${blockProps}
\`\`\`

## Usage Example
\`\`\`tsx
import { ${blockType.charAt(0).toUpperCase() + blockType.slice(1)}Block } from './blocks';

function App() {
  return (
    <div className="p-6">
      <${blockType.charAt(0).toUpperCase() + blockType.slice(1)}Block />
    </div>
  );
}
\`\`\`

## Features
${this.generateBlockFeatures(blockType, responsive, features)}

## Customization
${this.generateBlockCustomization(blockType)}
`,
        },
      ],
    };
  }

  async validateResponsiveDesign(args: any): Promise<CallToolResult> {
    const { code } = args;

    const issues: string[] = [];
    const suggestions: string[] = [];
    const goodPractices: string[] = [];

    // Check for responsive classes
    const hasResponsiveClasses = /\b(sm:|md:|lg:|xl:|2xl:)/.test(code);
    if (!hasResponsiveClasses) {
      issues.push(
        "No responsive classes found - consider adding breakpoint-specific styles"
      );
    }

    // Check for fixed widths
    const hasFixedWidths = /w-\[\d+px\]|width:\s*\d+px/.test(code);
    if (hasFixedWidths) {
      issues.push(
        "Fixed pixel widths detected - use relative units for better responsiveness"
      );
    }

    // Check for responsive grid/flexbox
    const hasResponsiveGrid =
      /grid-cols-\d+.*(?:sm:|md:|lg:)grid-cols-\d+/.test(code);
    const hasResponsiveFlex = /flex-col.*(?:sm:|md:|lg:)flex-row/.test(code);

    if (hasResponsiveGrid || hasResponsiveFlex) {
      goodPractices.push("Good use of responsive grid/flexbox classes");
    }

    // Check for mobile-first approach
    const mobileFirstPattern =
      /(?:^|\s)(?!(?:sm:|md:|lg:|xl:|2xl:))\w+(?:\s|$)/;
    if (mobileFirstPattern.test(code)) {
      goodPractices.push("Mobile-first approach detected");
    }

    // Check for overflow handling
    const hasOverflowHandling =
      /overflow-(?:hidden|auto|scroll|x-auto|y-auto)/.test(code);
    if (!hasOverflowHandling) {
      suggestions.push("Consider adding overflow handling for smaller screens");
    }

    // Check for text responsiveness
    const hasResponsiveText =
      /text-(?:xs|sm|base|lg|xl).*(?:sm:|md:|lg:)text-/.test(code);
    if (!hasResponsiveText) {
      suggestions.push("Consider making text sizes responsive");
    }

    return {
      content: [
        {
          type: "text",
          text: `# Responsive Design Validation

## Status: ${
            issues.length === 0
              ? "✅ Good"
              : issues.length <= 2
              ? "⚠️ Needs Improvement"
              : "❌ Poor"
          }

${
  issues.length > 0
    ? `## Issues Found (${issues.length})
${issues.map((issue) => `- ❌ ${issue}`).join("\n")}`
    : ""
}

${
  suggestions.length > 0
    ? `## Suggestions (${suggestions.length})
${suggestions.map((suggestion) => `- 💡 ${suggestion}`).join("\n")}`
    : ""
}

${
  goodPractices.length > 0
    ? `## Good Practices Found (${goodPractices.length})
${goodPractices.map((practice) => `- ✅ ${practice}`).join("\n")}`
    : ""
}

## Responsive Design Checklist
- [ ] Mobile-first approach
- [ ] Breakpoint-specific styles (sm:, md:, lg:, xl:)
- [ ] Flexible grid systems
- [ ] Responsive typography
- [ ] Proper overflow handling
- [ ] Touch-friendly interactive elements
- [ ] Optimized images for different screen sizes

## Recommended Breakpoints
\`\`\`css
/* Aki UI / Tailwind breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
\`\`\`
`,
        },
      ],
    };
  }

  async calculateGrid(args: any): Promise<CallToolResult> {
    const { columns, rows = "auto", gap = "1rem", areas = [] } = args;

    const gridConfig = this.generateGridConfiguration(
      columns,
      rows,
      gap,
      areas
    );
    const gridAreas =
      areas.length > 0 ? this.generateGridAreas(areas, columns, rows) : "";
    const gridExamples = this.generateGridExamples(columns, rows, gap);

    return {
      content: [
        {
          type: "text",
          text: `# CSS Grid Configuration

## Grid Container
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: ${gridConfig.columns};
  ${typeof rows === "number" ? `grid-template-rows: ${gridConfig.rows};` : ""}
  gap: ${gap};
  ${areas.length > 0 ? `grid-template-areas: ${gridConfig.areas};` : ""}
}
\`\`\`

## Tailwind CSS Classes
\`\`\`html
<div class="${gridConfig.tailwindClasses}">
  <!-- Grid items -->
</div>
\`\`\`

${
  areas.length > 0
    ? `## Named Grid Areas
\`\`\`css
${gridAreas}
\`\`\``
    : ""
}

## React Component Example
\`\`\`tsx
import { Grid } from '@akitectio/aki-ui';

function GridLayout() {
  return (
    <Grid 
      cols={{ base: 1, md: ${Math.min(columns, 2)}, lg: ${columns} }}
      gap="${gap}"
      className="min-h-screen"
    >
      ${Array.from(
        { length: columns },
        (_, i) => `<div className="bg-gray-100 p-4 rounded">
        Item ${i + 1}
      </div>`
      ).join("\n      ")}
    </Grid>
  );
}
\`\`\`

## Grid Examples
${gridExamples}

## Advanced Grid Techniques
${this.generateAdvancedGridTips(columns, areas)}
`,
        },
      ],
    };
  }

  private generateLayoutCode(
    type: string,
    sections: any[],
    responsive: boolean,
    features: string[]
  ): string {
    const hasNavigation = features.includes("navigation");
    const hasFooter = features.includes("footer");
    const hasSidebar = features.includes("sidebar");

    switch (type) {
      case "dashboard":
        return this.generateDashboardLayout(
          responsive,
          hasSidebar,
          hasNavigation
        );

      case "sidebar":
        return this.generateSidebarLayout(responsive, sections);

      case "hero":
        return this.generateHeroLayout(responsive, sections);

      case "grid":
        return this.generateGridLayout(responsive, sections);

      case "landing":
        return this.generateLandingLayout(responsive, hasNavigation, hasFooter);

      default:
        return this.generateFlexboxLayout(responsive, sections);
    }
  }

  private generateDashboardLayout(
    responsive: boolean,
    hasSidebar: boolean,
    hasNavigation: boolean
  ): string {
    return `import React from 'react';
import { Grid, Card, Navbar${
      hasSidebar ? ", VerticalNavbar" : ""
    } } from '@akitectio/aki-ui';

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      ${
        hasNavigation
          ? `<Navbar>
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Navbar.Item href="/dashboard">Home</Navbar.Item>
        <Navbar.Item href="/analytics">Analytics</Navbar.Item>
        <Navbar.Item href="/settings">Settings</Navbar.Item>
      </Navbar>`
          : ""
      }
      
      <div className="${hasNavigation ? "pt-16 " : ""}${
      hasSidebar ? "flex" : ""
    }">
        ${
          hasSidebar
            ? `<VerticalNavbar
          items={[
            { id: 'overview', label: 'Overview', href: '/dashboard' },
            { id: 'analytics', label: 'Analytics', href: '/analytics' },
            { id: 'reports', label: 'Reports', href: '/reports' },
            { id: 'settings', label: 'Settings', href: '/settings' }
          ]}
          className="w-64 h-screen sticky top-0"
        />`
            : ""
        }
        
        <main className="${hasSidebar ? "flex-1 " : ""}p-6">
          <Grid 
            cols={{ base: 1, md: 2, lg: 3, xl: 4 }} 
            gap="6"
            className="mb-8"
          >
            <Card>
              <Card.Header>
                <h3 className="text-lg font-semibold">Total Users</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-3xl font-bold text-blue-600">12,345</p>
                <p className="text-sm text-gray-500">+12% from last month</p>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Header>
                <h3 className="text-lg font-semibold">Revenue</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-3xl font-bold text-green-600">$54,321</p>
                <p className="text-sm text-gray-500">+8% from last month</p>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Header>
                <h3 className="text-lg font-semibold">Orders</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-3xl font-bold text-purple-600">1,234</p>
                <p className="text-sm text-gray-500">+15% from last month</p>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Header>
                <h3 className="text-lg font-semibold">Growth</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-3xl font-bold text-orange-600">23%</p>
                <p className="text-sm text-gray-500">+3% from last month</p>
              </Card.Body>
            </Card>
          </Grid>
          
          <Grid cols={{ base: 1, lg: 2 }} gap="6">
            <Card>
              <Card.Header>
                <h3 className="text-lg font-semibold">Recent Activity</h3>
              </Card.Header>
              <Card.Body>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">U</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">New user registered</p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">$</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Payment received</p>
                      <p className="text-xs text-gray-500">5 minutes ago</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Header>
                <h3 className="text-lg font-semibold">Quick Actions</h3>
              </Card.Header>
              <Card.Body>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors">
                    <div className="text-blue-600 font-medium">Add User</div>
                  </button>
                  <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-center transition-colors">
                    <div className="text-green-600 font-medium">Create Report</div>
                  </button>
                  <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors">
                    <div className="text-purple-600 font-medium">Send Email</div>
                  </button>
                  <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg text-center transition-colors">
                    <div className="text-orange-600 font-medium">View Analytics</div>
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Grid>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;`;
  }

  private generateSidebarLayout(responsive: boolean, sections: any[]): string {
    return `import React, { useState } from 'react';
import { VerticalNavbar, Button } from '@akitectio/aki-ui';

function SidebarLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <VerticalNavbar
        collapsed={collapsed}
        items={[
          { id: 'home', label: 'Home', icon: '🏠', href: '/' },
          { id: 'about', label: 'About', icon: 'ℹ️', href: '/about' },
          { id: 'services', label: 'Services', icon: '⚙️', href: '/services' },
          { id: 'contact', label: 'Contact', icon: '📞', href: '/contact' }
        ]}
        className={${
          responsive
            ? '`transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`'
            : '"w-64"'
        }}
      />
      
      <main className="flex-1 p-6">
        <div className="mb-6">
          <Button 
            onClick={() => setCollapsed(!collapsed)}
            variant="secondary"
            size="sm"
          >
            ${responsive ? '${collapsed ? "→" : "←"}' : "Toggle"}
          </Button>
        </div>
        
        <div className="space-y-6">
          <section>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Main Content</h1>
            <p className="text-gray-600 text-lg">
              This is the main content area. The sidebar provides navigation 
              while this area displays the page content.
            </p>
          </section>
          
          <section className="grid gap-6 ${
            responsive
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-3"
          }">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-2">Feature 1</h3>
              <p className="text-gray-600">Description of feature 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-2">Feature 2</h3>
              <p className="text-gray-600">Description of feature 2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-2">Feature 3</h3>
              <p className="text-gray-600">Description of feature 3</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SidebarLayout;`;
  }

  private generateHeroLayout(responsive: boolean, sections: any[]): string {
    return `import React from 'react';
import { Button, Grid } from '@akitectio/aki-ui';

function HeroLayout() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-20 ${
          responsive ? "lg:py-32" : "py-32"
        }">
          <div className="${
            responsive
              ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              : "flex items-center justify-between"
          }">
            <div className="${
              responsive ? "text-center lg:text-left" : "max-w-2xl"
            }">
              <h1 className="${
                responsive ? "text-4xl md:text-5xl lg:text-6xl" : "text-6xl"
              } font-bold leading-tight mb-6">
                Build Amazing 
                <span className="text-yellow-300"> Digital Products</span>
              </h1>
              <p className="${
                responsive ? "text-lg md:text-xl" : "text-xl"
              } mb-8 opacity-90">
                Create beautiful, responsive web applications with our modern 
                component library. Fast, accessible, and developer-friendly.
              </p>
              <div className="${
                responsive
                  ? "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  : "flex gap-4"
              }">
                <Button size="lg" variant="secondary">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </div>
            </div>
            ${
              responsive
                ? `<div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="bg-white rounded-lg p-6 shadow-2xl">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-32 bg-gray-100 rounded"></div>
                    <div className="flex gap-2">
                      <div className="h-8 bg-blue-200 rounded flex-1"></div>
                      <div className="h-8 bg-gray-200 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
                : ""
            }
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="${
              responsive ? "text-3xl md:text-4xl" : "text-4xl"
            } font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="${
              responsive ? "text-lg md:text-xl" : "text-xl"
            } text-gray-600 max-w-3xl mx-auto">
              Everything you need to build modern web applications
            </p>
          </div>
          
          <Grid cols={{ base: 1, md: 2, lg: 3 }} gap="8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized for performance with modern build tools and best practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-2xl">♿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessible</h3>
              <p className="text-gray-600">
                Built with accessibility in mind, following WCAG guidelines.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customizable</h3>
              <p className="text-gray-600">
                Easily customize themes, colors, and styles to match your brand.
              </p>
            </div>
          </Grid>
        </div>
      </section>
    </div>
  );
}

export default HeroLayout;`;
  }

  private generateGridLayout(responsive: boolean, sections: any[]): string {
    const cols = sections.length || 4;
    return `import React from 'react';
import { Grid, Card } from '@akitectio/aki-ui';

function GridLayout() {
  const items = Array.from({ length: ${cols * 3} }, (_, i) => ({
    id: i + 1,
    title: \`Item \${i + 1}\`,
    description: \`Description for item \${i + 1}\`
  }));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Grid Layout Example
      </h1>
      
      <Grid 
        cols={{ 
          base: 1, 
          ${responsive ? "sm: 2, md: 3, lg: 4" : `lg: ${Math.min(cols, 4)}`}
        }} 
        gap="6"
      >
        {items.map(item => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <Card.Header>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </Card.Header>
            <Card.Body>
              <p className="text-gray-600">{item.description}</p>
              <div className="mt-4 pt-4 border-t">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default GridLayout;`;
  }

  private generateLandingLayout(
    responsive: boolean,
    hasNavigation: boolean,
    hasFooter: boolean
  ): string {
    return `import React from 'react';
import { Navbar, Button, Grid, Card } from '@akitectio/aki-ui';

function LandingLayout() {
  return (
    <div className="min-h-screen">
      ${
        hasNavigation
          ? `<Navbar className="bg-white shadow-sm">
        <Navbar.Brand>
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </Navbar.Brand>
        <div className="hidden md:flex space-x-6">
          <Navbar.Item href="#features">Features</Navbar.Item>
          <Navbar.Item href="#pricing">Pricing</Navbar.Item>
          <Navbar.Item href="#about">About</Navbar.Item>
          <Navbar.Item href="#contact">Contact</Navbar.Item>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">Sign In</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </div>
      </Navbar>`
          : ""
      }

      <main>
        {/* Hero Section */}
        <section className="${
          hasNavigation ? "pt-20 " : ""
        }py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="${
              responsive ? "text-4xl md:text-6xl" : "text-6xl"
            } font-bold mb-6">
              Welcome to Our Platform
            </h1>
            <p className="${
              responsive ? "text-lg md:text-xl" : "text-xl"
            } mb-8 max-w-3xl mx-auto opacity-90">
              Build amazing products with our comprehensive suite of tools and services.
              Join thousands of developers who trust our platform.
            </p>
            <div className="${
              responsive
                ? "flex flex-col sm:flex-row gap-4 justify-center"
                : "flex gap-4 justify-center"
            }">
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="${
                responsive ? "text-3xl md:text-4xl" : "text-4xl"
              } font-bold text-gray-900 mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to succeed in one integrated platform
              </p>
            </div>
            
            <Grid cols={{ base: 1, md: 2, lg: 3 }} gap="8">
              <Card className="text-center">
                <Card.Body className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-blue-600 text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Fast Performance</h3>
                  <p className="text-gray-600">
                    Lightning-fast loading times and optimized performance for the best user experience.
                  </p>
                </Card.Body>
              </Card>
              
              <Card className="text-center">
                <Card.Body className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-green-600 text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Secure & Reliable</h3>
                  <p className="text-gray-600">
                    Enterprise-grade security with 99.9% uptime guarantee and regular backups.
                  </p>
                </Card.Body>
              </Card>
              
              <Card className="text-center">
                <Card.Body className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-purple-600 text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Advanced Analytics</h3>
                  <p className="text-gray-600">
                    Comprehensive analytics and reporting tools to track your success and growth.
                  </p>
                </Card.Body>
              </Card>
            </Grid>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="${
              responsive ? "text-3xl md:text-4xl" : "text-4xl"
            } font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and start your journey today.
            </p>
            <Button size="lg" variant="primary">
              Start Your Free Trial
            </Button>
          </div>
        </section>
      </main>

      ${
        hasFooter
          ? `<footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <Grid cols={{ base: 1, md: 2, lg: 4 }} gap="8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="/features" className="text-gray-300 hover:text-white">Features</a></li>
                <li><a href="/pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
                <li><a href="/docs" className="text-gray-300 hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/help" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="/support" className="text-gray-300 hover:text-white">Support</a></li>
                <li><a href="/status" className="text-gray-300 hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="/cookies" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </Grid>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>`
          : ""
      }
    </div>
  );
}

export default LandingLayout;`;
  }

  private generateFlexboxLayout(responsive: boolean, sections: any[]): string {
    return `import React from 'react';
import { Stack, Card } from '@akitectio/aki-ui';

function FlexboxLayout() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Flexbox Layout Example
      </h1>
      
      {/* Horizontal Stack */}
      <Stack 
        direction="${responsive ? "column md:row" : "row"}" 
        spacing="6" 
        align="stretch"
        className="mb-8"
      >
        <Card className="flex-1">
          <Card.Header>
            <h3 className="text-lg font-semibold">Main Content</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600">
              This is the main content area that takes up most of the space.
            </p>
          </Card.Body>
        </Card>
        
        <Card className="${responsive ? "md:w-64" : "w-64"}">
          <Card.Header>
            <h3 className="text-lg font-semibold">Sidebar</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600">
              This is a sidebar with fixed width.
            </p>
          </Card.Body>
        </Card>
      </Stack>
      
      {/* Vertical Stack */}
      <Stack direction="column" spacing="4">
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold">Section 1</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600">Content for section 1</p>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold">Section 2</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600">Content for section 2</p>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Header>
            <h3 className="text-lg font-semibold">Section 3</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-gray-600">Content for section 3</p>
          </Card.Body>
        </Card>
      </Stack>
    </div>
  );
}

export default FlexboxLayout;`;
  }

  private generateLayoutCSS(type: string, responsive: boolean): string {
    const baseClasses = {
      dashboard: "min-h-screen bg-gray-50",
      sidebar: "flex min-h-screen",
      hero: "min-h-screen bg-gradient-to-br from-blue-600 to-purple-700",
      grid: "container mx-auto p-6",
      landing: "min-h-screen",
      flexbox: "container mx-auto p-6",
    };

    return baseClasses[type as keyof typeof baseClasses] || baseClasses.flexbox;
  }

  private generateResponsiveBreakpoints(type: string): string {
    return `/* Mobile First Approach */
@media (min-width: 640px) {
  /* Small devices */
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  /* Medium devices */
  .container { max-width: 768px; }
  .grid-cols-responsive { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  /* Large devices */
  .container { max-width: 1024px; }
  .grid-cols-responsive { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1280px) {
  /* Extra large devices */
  .container { max-width: 1280px; }
  .grid-cols-responsive { grid-template-columns: repeat(4, 1fr); }
}`;
  }

  private generateLayoutFeatures(
    features: string[],
    responsive: boolean
  ): string {
    const includedFeatures = [];

    if (responsive) {
      includedFeatures.push("✅ Responsive design with mobile-first approach");
    }

    if (features.includes("navigation")) {
      includedFeatures.push("✅ Navigation bar with mobile menu");
    }

    if (features.includes("footer")) {
      includedFeatures.push("✅ Footer with organized links");
    }

    if (features.includes("sidebar")) {
      includedFeatures.push("✅ Collapsible sidebar navigation");
    }

    includedFeatures.push("✅ Semantic HTML structure");
    includedFeatures.push("✅ Accessible navigation and content");
    includedFeatures.push("✅ Optimized for performance");

    return includedFeatures.join("\n");
  }

  private generateCustomizationTips(type: string): string {
    const tips = {
      dashboard: [
        "Customize card colors using Aki UI theme variables",
        "Add real data by replacing static content with API calls",
        "Implement dark mode using ColorModeProvider",
        "Add charts and graphs for better data visualization",
      ],
      sidebar: [
        "Customize sidebar width and collapse behavior",
        "Add icons to navigation items",
        "Implement active state indicators",
        "Add user profile section in sidebar",
      ],
      hero: [
        "Replace placeholder content with your actual copy",
        "Customize gradient colors to match your brand",
        "Add animations using CSS transitions or Framer Motion",
        "Optimize images for different screen sizes",
      ],
      grid: [
        "Adjust grid columns based on your content needs",
        "Add filtering and sorting functionality",
        "Implement pagination for large datasets",
        "Add hover effects and animations",
      ],
      landing: [
        "Replace placeholder content with your actual marketing copy",
        "Add your brand colors and logo",
        "Include customer testimonials and social proof",
        "Add contact forms and call-to-action buttons",
      ],
    };

    return (
      tips[type as keyof typeof tips]?.map((tip) => `- ${tip}`).join("\n") ||
      "- Customize colors and spacing to match your brand\n- Add your own content and images\n- Implement interactive features as needed"
    );
  }

  private generateGridConfiguration(
    columns: number,
    rows: any,
    gap: string,
    areas: string[]
  ): any {
    const config = {
      columns: `repeat(${columns}, 1fr)`,
      rows: typeof rows === "number" ? `repeat(${rows}, 1fr)` : "auto",
      areas: areas.length > 0 ? areas.map((area) => `"${area}"`).join(" ") : "",
      tailwindClasses: `grid grid-cols-${Math.min(columns, 12)} gap-${gap
        .replace("rem", "")
        .replace("px", "")}`,
    };

    return config;
  }

  private generateGridAreas(
    areas: string[],
    columns: number,
    rows: any
  ): string {
    return areas
      .map((area, index) => {
        return `.grid-area-${area.toLowerCase().replace(/\s+/g, "-")} {
  grid-area: ${area};
}`;
      })
      .join("\n\n");
  }

  private generateGridExamples(
    columns: number,
    rows: any,
    gap: string
  ): string {
    return `### Common Grid Patterns

**Equal Columns:**
\`\`\`css
grid-template-columns: repeat(${columns}, 1fr);
\`\`\`

**Auto-fit Responsive:**
\`\`\`css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
\`\`\`

**Sidebar Layout:**
\`\`\`css
grid-template-columns: 250px 1fr;
\`\`\`

**Holy Grail Layout:**
\`\`\`css
grid-template-columns: 200px 1fr 200px;
grid-template-rows: auto 1fr auto;
grid-template-areas: 
  "header header header"
  "sidebar main aside"
  "footer footer footer";
\`\`\``;
  }

  private generateAdvancedGridTips(columns: number, areas: string[]): string {
    return `### Advanced Techniques

1. **Responsive Grid:**
   Use CSS Grid with media queries for different breakpoints

2. **Grid Item Placement:**
   Use \`grid-column\` and \`grid-row\` for precise positioning

3. **Overlapping Items:**
   Place items in the same grid cells for layered layouts

4. **Subgrid (Future):**
   Use subgrid for nested grid layouts

5. **Grid Auto-placement:**
   Let CSS Grid automatically place items with \`grid-auto-flow\`

### Performance Tips
- Use \`contain: layout\` for better performance
- Avoid too many grid lines (keep under 1000)
- Use \`grid-template-areas\` for complex layouts
- Consider \`aspect-ratio\` for consistent item heights`;
  }

  private generateBlockCode(blockType: string, responsive: boolean = true, features: string[] = []): string {
    switch (blockType) {
      case "dashboard":
        return this.generateDashboardBlockCode(responsive, features);
      
      case "stats":
        return this.generateStatsBlockCode(responsive, features);
      
      case "table":
        return this.generateTableBlockCode(responsive, features);
      
      case "hero":
      case "hero-section":
        return this.generateHeroBlockCode(responsive, features);
      
      case "form":
      case "contact":
        return this.generateFormBlockCode(responsive, features);
      
      case "cards":
        return this.generateCardsBlockCode(responsive, features);
      
      case "sidebar-nav":
        return this.generateSidebarNavBlockCode(responsive, features);
      
      case "pricing":
        return this.generatePricingBlockCode(responsive, features);
      
      case "testimonials":
        return this.generateTestimonialsBlockCode(responsive, features);
      
      default:
        return this.generateDefaultBlockCode(blockType, responsive, features);
    }
  }

  private generateDashboardBlockCode(responsive: boolean, features: string[]): string {
    return `import { DashboardBlock } from '@akitectio/aki-ui/blocks';

function MyDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardBlock />
    </div>
  );
}

export default MyDashboard;`;
  }

  private generateStatsBlockCode(responsive: boolean, features: string[]): string {
    const customStats = features.includes('custom-stats');
    
    return `import { StatsBlock } from '@akitectio/aki-ui/blocks';

function StatsSection() {
  ${customStats ? `
  const customStats = [
    {
      title: 'Total Revenue',
      value: '$125,430',
      change: '+12.5%',
      trend: 'up' as const,
      icon: '💰',
      color: 'green' as const
    },
    {
      title: 'Active Users',
      value: '8,429',
      change: '+22.1%', 
      trend: 'up' as const,
      icon: '👥',
      color: 'blue' as const
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-0.5%',
      trend: 'down' as const,
      icon: '📈',
      color: 'red' as const
    }
  ];
  ` : ''}

  return (
    <div className="p-6">
      <StatsBlock
        ${customStats ? 'stats={customStats}' : ''}
        columns={${responsive ? '4' : '3'}}
        showIcons={true}
        showTrends={true}
        className="max-w-6xl mx-auto"
      />
    </div>
  );
}

export default StatsSection;`;
  }

  private generateTableBlockCode(responsive: boolean, features: string[]): string {
    const showActions = features.includes('actions');
    const showSearch = features.includes('search');
    const showPagination = features.includes('pagination');

    return `import { TableBlock } from '@akitectio/aki-ui/blocks';

function DataTable() {
  const columns = [
    {
      key: 'name',
      title: 'User',
      render: (value: string, row: any) => (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-sm font-medium">
              {value.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <div className="font-medium text-gray-900">{value}</div>
            <div className="text-sm text-gray-500">{row.email}</div>
          </div>
        </div>
      )
    },
    { key: 'role', title: 'Role', align: 'center' as const },
    {
      key: 'status',
      title: 'Status',
      align: 'center' as const,
      render: (value: string) => (
        <span className={\`px-2 py-1 text-xs rounded-full \${
          value === 'Active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }\`}>
          {value}
        </span>
      )
    },
    { key: 'lastLogin', title: 'Last Login', align: 'right' as const }
  ];

  const sampleData = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2023-12-01'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active',
      lastLogin: '2023-12-01'
    }
  ];

  return (
    <div className="p-6">
      <TableBlock
        title="User Management"
        columns={columns}
        data={sampleData}
        showSearch={${showSearch}}
        showPagination={${showPagination}}
        ${showActions ? `actions={{
          onView: (row) => console.log('View:', row),
          onEdit: (row) => console.log('Edit:', row),
          onDelete: (row) => console.log('Delete:', row)
        }}` : ''}
        className="max-w-6xl mx-auto"
      />
    </div>
  );
}

export default DataTable;`;
  }

  private generateHeroBlockCode(responsive: boolean, features: string[]): string {
    const hasCustomButtons = features.includes('custom-buttons');
    const hasBackground = features.includes('background-image');
    const size = features.includes('large') ? 'xl' : features.includes('small') ? 'sm' : 'lg';

    return `import { HeroBlock } from '@akitectio/aki-ui/blocks';

function HeroSection() {
  return (
    <HeroBlock
      title="Build Amazing Products"
      subtitle="Get Started Today"
      description="Create beautiful, responsive web applications with our modern component library. Fast, accessible, and developer-friendly."
      ${hasCustomButtons ? `
      primaryButton={{
        text: 'Start Free Trial',
        onClick: () => console.log('Primary clicked')
      }}
      secondaryButton={{
        text: 'Watch Demo',
        href: '/demo'
      }}` : ''}
      ${hasBackground ? `backgroundImage="/hero-bg.jpg"` : `backgroundColor="bg-gradient-to-br from-blue-600 to-purple-700"`}
      textAlign="center"
      size="${size}"
      className="min-h-screen"
    />
  );
}

export default HeroSection;`;
  }

  private generateFormBlockCode(responsive: boolean, features: string[]): string {
    const hasValidation = features.includes('validation');
    const layout = features.includes('grid') ? 'grid' : features.includes('double') ? 'double' : 'single';

    return `import { FormBlock } from '@akitectio/aki-ui/blocks';

function ContactForm() {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Handle form submission
  };

  const customFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text' as const,
      placeholder: 'Enter your full name',
      required: true
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email' as const,
      placeholder: 'Enter your email',
      required: true,
      ${hasValidation ? `validation: {
        pattern: '^[^@]+@[^@]+\\.[^@]+$',
        message: 'Please enter a valid email address'
      }` : ''}
    },
    {
      name: 'company',
      label: 'Company Size',
      type: 'select' as const,
      options: [
        { value: '1-10', label: '1-10 employees' },
        { value: '11-50', label: '11-50 employees' },
        { value: '51-200', label: '51-200 employees' },
        { value: '200+', label: '200+ employees' }
      ]
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea' as const,
      placeholder: 'Tell us about your project...',
      required: true
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <FormBlock
        title="Get In Touch"
        description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        fields={customFields}
        onSubmit={handleSubmit}
        layout="${layout}"
        showValidation={${hasValidation}}
        submitText="Send Message"
        className="max-w-4xl mx-auto"
      />
    </div>
  );
}

export default ContactForm;`;
  }

  private generateCardsBlockCode(responsive: boolean, features: string[]): string {
    const hasActions = features.includes('actions');
    const cols = responsive ? '{ base: 1, md: 2, lg: 3 }' : '3';

    return `import { Card, Button, Grid } from '@akitectio/aki-ui';

function CardsSection() {
  const cardData = [
    {
      id: 1,
      title: 'Feature One',
      description: 'Amazing feature that will help you build better products.',
      icon: '🚀',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Feature Two', 
      description: 'Another great feature with powerful capabilities.',
      icon: '⚡',
      color: 'green'
    },
    {
      id: 3,
      title: 'Feature Three',
      description: 'The final piece that completes your workflow.',
      icon: '🎯',
      color: 'purple'
    }
  ];

  return (
    <div className="p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Features</h2>
        <p className="text-xl text-gray-600">Everything you need to succeed</p>
      </div>
      
      <Grid cols={${cols}} gap="6" className="max-w-6xl mx-auto">
        {cardData.map((card) => (
          <Card key={card.id} className="text-center hover:shadow-lg transition-shadow">
            <Card.Body className="p-8">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {card.description}
              </p>
              ${hasActions ? `
              <Button variant="outline" size="sm">
                Learn More
              </Button>` : ''}
            </Card.Body>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default CardsSection;`;
  }

  private generateSidebarNavBlockCode(responsive: boolean, features: string[]): string {
    const collapsed = features.includes('collapsible');

    return `import { VerticalNavbar${collapsed ? ', Button' : ''} } from '@akitectio/aki-ui';
${collapsed ? "import { useState } from 'react';" : ''}

function SidebarNav() {
  ${collapsed ? 'const [isCollapsed, setIsCollapsed] = useState(false);' : ''}

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', href: '/dashboard' },
    { id: 'users', label: 'Users', icon: '👥', href: '/users' },
    { id: 'settings', label: 'Settings', icon: '⚙️', href: '/settings' },
    { id: 'help', label: 'Help', icon: '❓', href: '/help' }
  ];

  return (
    <div className="flex h-screen">
      <VerticalNavbar
        items={navItems}
        ${collapsed ? 'collapsed={isCollapsed}' : ''}
        className="${collapsed ? '`transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`' : '"w-64"'}"
      />
      
      <main className="flex-1 bg-gray-50 p-6">
        ${collapsed ? `
        <div className="mb-6">
          <Button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            variant="secondary"
            size="sm"
          >
            {isCollapsed ? '→' : '←'} Toggle
          </Button>
        </div>` : ''}
        
        <h1 className="text-2xl font-bold text-gray-900">Main Content</h1>
        <p className="text-gray-600 mt-4">
          This is the main content area with sidebar navigation.
        </p>
      </main>
    </div>
  );
}

export default SidebarNav;`;
  }

  private generatePricingBlockCode(responsive: boolean, features: string[]): string {
    const hasHighlight = features.includes('highlight');
    const billingToggle = features.includes('billing-toggle');

    return `import { Card, Button, Badge, Grid } from '@akitectio/aki-ui';
${billingToggle ? "import { useState } from 'react';" : ''}

function PricingSection() {
  ${billingToggle ? 'const [annual, setAnnual] = useState(false);' : ''}

  const plans = [
    {
      name: 'Starter',
      price: ${billingToggle ? 'annual ? 90 : 9' : '9'},
      period: ${billingToggle ? 'annual ? "year" : "month"' : '"month"'},
      description: 'Perfect for getting started',
      features: [
        'Up to 5 projects',
        'Basic support',
        '1GB storage',
        'Community access'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: ${billingToggle ? 'annual ? 290 : 29' : '29'},
      period: ${billingToggle ? 'annual ? "year" : "month"' : '"month"'},
      description: 'Best for growing teams',
      features: [
        'Unlimited projects',
        'Priority support',
        '50GB storage',
        'Advanced analytics',
        'Team collaboration'
      ],
      popular: ${hasHighlight ? 'true' : 'false'}
    },
    {
      name: 'Enterprise',
      price: ${billingToggle ? 'annual ? 990 : 99' : '99'},
      period: ${billingToggle ? 'annual ? "year" : "month"' : '"month"'},
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        '24/7 support',
        'Unlimited storage',
        'Custom integrations',
        'Dedicated manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start free and scale as you grow
          </p>
          
          ${billingToggle ? `
          <div className="flex items-center justify-center space-x-4">
            <span className={annual ? 'text-gray-500' : 'text-gray-900'}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={\`relative w-12 h-6 rounded-full transition-colors \${
                annual ? 'bg-blue-600' : 'bg-gray-300'
              }\`}
            >
              <div className={\`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform \${
                annual ? 'translate-x-6' : 'translate-x-0'
              }\`} />
            </button>
            <span className={annual ? 'text-gray-900' : 'text-gray-500'}>
              Annual <span className="text-green-600 text-sm">(Save 20%)</span>
            </span>
          </div>` : ''}
        </div>

        <Grid cols={{ base: 1, md: 3 }} gap="8" className="max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={\`relative \${plan.popular ? 'ring-2 ring-blue-500 shadow-lg' : 'shadow-sm'}\`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="primary">Most Popular</Badge>
                </div>
              )}
              
              <Card.Body className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    \${plan.price}
                  </span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default PricingSection;`;
  }

  private generateTestimonialsBlockCode(responsive: boolean, features: string[]): string {
    const hasAvatar = features.includes('avatars');
    const hasRating = features.includes('ratings');

    return `import { Card, Grid${hasAvatar ? ', Avatar' : ''} } from '@akitectio/aki-ui';

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      avatar: '/avatars/sarah.jpg',
      content: 'This platform has transformed how we build products. The components are beautiful and work flawlessly.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Lead Developer, WebCorp',
      avatar: '/avatars/mike.jpg',
      content: 'Amazing developer experience. Setup was quick and the documentation is excellent.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Product Manager, DesignCo',
      avatar: '/avatars/emily.jpg',
      content: 'Our team productivity has increased significantly since we started using these components.',
      rating: 4
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied customers
          </p>
        </div>

        <Grid cols={{ base: 1, md: 2, lg: 3 }} gap="8" className="max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <Card.Body className="p-8">
                ${hasRating ? `
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={\`w-5 h-5 \${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }\`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>` : ''}
                
                <blockquote className="text-gray-600 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  ${hasAvatar ? `
                  <Avatar
                    src={testimonial.avatar}
                    fallback={testimonial.name.split(' ').map(n => n[0]).join('')}
                    size="md"
                    className="mr-4"
                  />` : ''}
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default TestimonialsSection;`;
  }

  private generateDefaultBlockCode(blockType: string, responsive: boolean, features: string[]): string {
    return `import { Card } from '@akitectio/aki-ui';

function ${blockType.charAt(0).toUpperCase() + blockType.slice(1)}Block() {
  return (
    <div className="p-6">
      <Card className="max-w-4xl mx-auto">
        <Card.Header>
          <h2 className="text-2xl font-bold text-gray-900">
            ${blockType.charAt(0).toUpperCase() + blockType.slice(1)} Block
          </h2>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">
            This is a custom ${blockType} block. Customize this component based on your needs.
          </p>
          <div className="mt-6 p-8 bg-gray-50 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Add Your Content Here
            </h3>
            <p className="text-gray-600">
              Replace this placeholder with your actual ${blockType} content.
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ${blockType.charAt(0).toUpperCase() + blockType.slice(1)}Block;`;
  }

  private getBlockDependencies(blockType: string): string[] {
    const baseDeps = ['Card', 'Button'];
    
    switch (blockType) {
      case 'dashboard':
        return ['DashboardBlock'];
      case 'stats':
        return ['StatsBlock'];
      case 'table':
        return ['TableBlock', 'Badge', 'Avatar'];
      case 'hero':
        return ['HeroBlock'];
      case 'form':
      case 'contact':
        return ['FormBlock'];
      case 'cards':
        return ['Card', 'Button', 'Grid'];
      case 'sidebar-nav':
        return ['VerticalNavbar', 'Button'];
      case 'pricing':
        return ['Card', 'Button', 'Badge', 'Grid'];
      case 'testimonials':
        return ['Card', 'Grid', 'Avatar'];
      default:
        return baseDeps;
    }
  }

  private getBlockProps(blockType: string): string {
    switch (blockType) {
      case 'stats':
        return `interface StatsBlockProps {
  stats?: Array<{
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    icon?: string;
    color?: 'blue' | 'green' | 'red' | 'purple' | 'orange';
  }>;
  columns?: number;
  showIcons?: boolean;
  showTrends?: boolean;
  className?: string;
}`;

      case 'table':
        return `interface TableBlockProps {
  title?: string;
  columns: Array<{
    key: string;
    title: string;
    width?: string;
    align?: 'left' | 'center' | 'right';
    render?: (value: any, row: any) => React.ReactNode;
  }>;
  data: any[];
  showPagination?: boolean;
  showSearch?: boolean;
  pageSize?: number;
  className?: string;
  actions?: {
    onEdit?: (row: any) => void;
    onDelete?: (row: any) => void;
    onView?: (row: any) => void;
  };
}`;

      case 'hero':
        return `interface HeroBlockProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButton?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  backgroundImage?: string;
  backgroundColor?: string;
  textAlign?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}`;

      case 'form':
        return `interface FormBlockProps {
  title?: string;
  description?: string;
  fields: Array<{
    name: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea';
    placeholder?: string;
    required?: boolean;
    options?: Array<{ value: string; label: string }>;
  }>;
  submitText?: string;
  onSubmit?: (data: any) => void;
  layout?: 'single' | 'double' | 'grid';
  className?: string;
}`;

      default:
        return `interface ${blockType.charAt(0).toUpperCase() + blockType.slice(1)}BlockProps {
  className?: string;
  children?: React.ReactNode;
}`;
    }
  }

  private generateBlockFeatures(blockType: string, responsive: boolean, features: string[]): string {
    const baseFeatures = [
      responsive ? '✅ Responsive design' : '⚠️ Fixed desktop layout',
      '✅ Accessible markup',
      '✅ Dark mode support',
      '✅ TypeScript support'
    ];

    const blockSpecificFeatures: Record<string, string[]> = {
      dashboard: [
        '✅ Pre-built dashboard layout',
        '✅ Sidebar navigation',
        '✅ Stats overview',
        '✅ Recent activity feed'
      ],
      stats: [
        '✅ Customizable statistics cards',
        '✅ Trend indicators',
        '✅ Icon support',
        '✅ Color variants'
      ],
      table: [
        '✅ Sortable columns',
        '✅ Search functionality',
        '✅ Pagination',
        '✅ Row actions',
        '✅ Custom cell rendering'
      ],
      hero: [
        '✅ Multiple size variants',
        '✅ Background image support',
        '✅ CTA buttons',
        '✅ Text alignment options'
      ],
      form: [
        '✅ Multiple field types',
        '✅ Validation support',
        '✅ Flexible layouts',
        '✅ Form submission handling'
      ]
    };

    const specific = blockSpecificFeatures[blockType] || [];
    return [...baseFeatures, ...specific].join('\n');
  }

  private generateBlockCustomization(blockType: string): string {
    const tips: Record<string, string[]> = {
      dashboard: [
        'Customize stats data by passing your own metrics',
        'Add more widgets to the dashboard layout',
        'Modify sidebar navigation items',
        'Integrate with your analytics API'
      ],
      stats: [
        'Add custom icons for each stat',
        'Modify color schemes to match your brand',
        'Add click handlers for interactive stats',
        'Implement real-time data updates'
      ],
      table: [
        'Add custom column renderers',
        'Implement server-side pagination',
        'Add bulk actions for selected rows',
        'Customize search and filter options'
      ],
      hero: [
        'Replace with your marketing copy',
        'Add custom background images',
        'Customize button styles and actions',
        'Add animation effects'
      ],
      form: [
        'Add custom validation rules',
        'Integrate with form libraries like Formik',
        'Add file upload fields',
        'Customize form submission handling'
      ]
    };

    return (tips[blockType] || [
      'Customize styling with Tailwind classes',
      'Add your own content and data',
      'Implement custom interactions',
      'Integrate with your backend API'
    ]).map(tip => `- ${tip}`).join('\n');
  }
}
