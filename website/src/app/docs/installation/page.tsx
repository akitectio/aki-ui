'use client'

import { Card } from '@/components/client-components'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function InstallationPage() {
  return (
    <PageHeader
      title="Installation"
      description="Get started with Aki UI by installing it in your React project."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Before installing Aki UI, make sure you have the following:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <strong>React 18+:</strong> Aki UI is built for modern React</li>
              <li>• <strong>TypeScript (recommended):</strong> Full type safety support</li>
              <li>• <strong>Tailwind CSS:</strong> Required for styling (optional with CSS imports)</li>
            </ul>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Package Installation</h2>
          <Card className="p-6">
            <h3 className="font-semibold mb-3">NPM</h3>
            <CodeBlock language="bash">
              npm install @akitectio/aki-ui
            </CodeBlock>

            <h3 className="font-semibold mb-3 mt-6">Yarn</h3>
            <CodeBlock language="bash">
              yarn add @akitectio/aki-ui
            </CodeBlock>

            <h3 className="font-semibold mb-3 mt-6">PNPM</h3>
            <CodeBlock language="bash">
              pnpm add @akitectio/aki-ui
            </CodeBlock>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Setup with Tailwind CSS</h2>
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Aki UI is designed to work seamlessly with Tailwind CSS. Here's how to set it up:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">1. Install Tailwind CSS</h4>
                <CodeBlock language="bash">
                  npm install -D tailwindcss postcss autoprefixer
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">2. Initialize Tailwind</h4>
                <CodeBlock language="bash">
                  npx tailwindcss init -p
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">3. Configure your tailwind.config.js</h4>
                <CodeBlock language="javascript">
                  {`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@akitectio/aki-ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">4. Add Tailwind directives to your CSS</h4>
                <CodeBlock language="css">
                  {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                </CodeBlock>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Using with Next.js</h2>
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Aki UI works seamlessly with Next.js (both App Router and Pages Router). You can use components directly in client components:
            </p>

            <h3 className="font-semibold mb-3">Option 1: Direct Import (Recommended)</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Simply import components directly from the package and use them in client components:
            </p>
            <CodeBlock language="typescript">
              {`'use client'

import { Button, Card, Badge } from '@akitectio/aki-ui'

export default function MyComponent() {
  return (
    <div>
      <Badge variant="primary">New</Badge>
      <Button onClick={() => alert('Hello!')}>Click me</Button>
      <Card>
        <p>This is a card</p>
      </Card>
    </div>
  )
}`}
            </CodeBlock>

            <h3 className="font-semibold mb-3 mt-6">Option 2: Using the Next.js Adapter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For specific Next.js optimizations, you can use the adapter that ensures proper client/server boundaries:
            </p>
            <CodeBlock language="typescript">
              {`'use client'

import { Button, Card, Badge } from '@akitectio/aki-ui/adapters/nextjs'

export default function MyComponent() {
  return (
    <div>
      <Badge variant="primary">New</Badge>
      <Button onClick={() => alert('Hello!')}>Click me</Button>
      <Card>
        <p>This is a card</p>
      </Card>
    </div>
  )
}`}
            </CodeBlock>

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Note:</strong> Using client wrappers (e.g., ClientButton, ClientDrawer) is deprecated.
                Always use direct imports as shown above.
              </p>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Once installed, you can start using Aki UI components in your React application:
            </p>

            <CodeBlock language="typescript">
              {`import { Button, Card, Input } from '@akitectio/aki-ui'

function MyComponent() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Welcome to Aki UI</h2>
      <div className="space-y-4">
        <Input 
          placeholder="Enter your email" 
          type="email"
        />
        <Button size="lg" className="w-full">
          Get Started
        </Button>
      </div>
    </Card>
  )
}`}
            </CodeBlock>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Tree Shaking</h2>
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Aki UI supports tree shaking out of the box. You can import only the components you need:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Named imports (recommended)</h4>
                <CodeBlock language="typescript">
                  {`// This will only bundle the Button component
import { Button } from '@akitectio/aki-ui'`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Direct imports</h4>
                <CodeBlock language="typescript">
                  {`// Alternative approach for smaller bundles
import { Button } from '@akitectio/aki-ui/Button'`}
                </CodeBlock>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">TypeScript Configuration</h2>
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For the best TypeScript experience, make sure your tsconfig.json includes:
            </p>

            <CodeBlock language="json">
              {`{
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  }
}`}
            </CodeBlock>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">🎨 Customize Theming</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Learn how to customize colors, fonts, and other design tokens.
              </p>
              <a href="/docs/theming" className="text-blue-600 hover:underline">
                View Theming Guide →
              </a>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">📚 Browse Components</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Explore all available components and their APIs.
              </p>
              <a href="/docs/components/button" className="text-blue-600 hover:underline">
                Browse Components →
              </a>
            </Card>
          </div>
        </section>
      </div>
    </PageHeader>
  )
}
