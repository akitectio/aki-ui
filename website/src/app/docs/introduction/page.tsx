'use client'

import { Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function IntroductionPage() {
  return (
    <>
      <PageHeader
        title="Introduction to Aki UI"
        description="A modern, accessible, and customizable React component library built with TypeScript and Tailwind CSS."
      >
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">What is Aki UI?</h2>
            <Card className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Aki UI is a comprehensive React component library designed to help developers build
                beautiful, accessible, and performant user interfaces quickly. Built with modern
                technologies like TypeScript, Tailwind CSS, and following accessibility best practices.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <strong>TypeScript First:</strong> Full type safety and excellent DX</li>
                <li>• <strong>Accessible:</strong> WCAG 2.1 compliant components</li>
                <li>• <strong>Customizable:</strong> Flexible theming and styling system</li>
                <li>• <strong>Modern:</strong> Built with the latest React patterns</li>
                <li>• <strong>Tree-shakable:</strong> Import only what you need</li>
              </ul>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">🎨 Theming System</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Powerful theming capabilities with CSS custom properties,
                  multiple color schemes, and easy customization.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">♿ Accessibility</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All components follow WCAG guidelines with proper ARIA attributes,
                  keyboard navigation, and screen reader support.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">📱 Responsive</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Mobile-first design with responsive components that work
                  seamlessly across all device sizes.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">🚀 Performance</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimized bundle size, tree-shaking support, and minimal
                  runtime overhead for fast applications.
                </p>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
            <Card className="p-6">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Get started with Aki UI in just a few steps:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">1. Install the package</h4>
                  <CodeBlock language="bash">
                    npm install @akitectio/aki-ui
                  </CodeBlock>
                </div>
                <div>
                  <h4 className="font-medium mb-2">2. Import components</h4>
                  <CodeBlock language="typescript">
                    {`import { Button, Card, Input } from '@akitectio/aki-ui'

function App() {
  return (
    <Card className="p-6">
      <h1>Hello Aki UI!</h1>
      <Input placeholder="Enter your name" />
      <Button>Get Started</Button>
    </Card>
  )
}`}
                  </CodeBlock>
                </div>
              </div>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Design Principles</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Consistency</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All components follow the same design language and interaction patterns
                  to ensure a cohesive user experience.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Flexibility</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Components are designed to be composable and customizable while
                  maintaining their core functionality and accessibility.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Developer Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Great TypeScript support, clear documentation, and intuitive APIs
                  make development fast and enjoyable.
                </p>
              </Card>
            </div>
          </section>
        </div>
      </PageHeader>
    </>
  )
}
