'use client'

import { Card } from '@akitectio/aki-ui'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'
import FrameworkGrid from '@/components/FrameworkGrid'

export default function FrameworkSupportPage() {
    return (
        <PageHeader
            title="Framework Support"
            description="Aki UI works universally across all React-based frameworks without any adapters!"
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Supported Frameworks</h2>
                    <FrameworkGrid />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Universal Compatibility</h2>
                    <Card className="p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Aki UI v1.1.4+ supports universal framework compatibility. One simple import works across all React-based frameworks!
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🚀 Benefits</h3>
                                <ul className="text-sm space-y-1">
                                    <li>• No adapters needed</li>
                                    <li>• Smaller bundle size</li>
                                    <li>• Consistent API</li>
                                    <li>• Better performance</li>
                                    <li>• Easier maintenance</li>
                                </ul>
                            </div>

                            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <h3 className="font-semibold text-green-700 dark:text-green-300 mb-2">✨ Features</h3>
                                <ul className="text-sm space-y-1">
                                    <li>• SSR compatible</li>
                                    <li>• Framework detection</li>
                                    <li>• TypeScript ready</li>
                                    <li>• Hot reload support</li>
                                    <li>• Zero configuration</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Universal Usage</h2>
                    <Card className="p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            The same import works across all frameworks:
                        </p>

                        <CodeBlock language="typescript">
                            {`import { Button, Card, Input, Badge } from '@akitectio/aki-ui'
import '@akitectio/aki-ui/css'

function App() {
  return (
    <Card>
      <h1>Universal Components <Badge>Works Everywhere!</Badge></h1>
      <Input placeholder="Type something..." />
      <Button variant="primary">Submit</Button>
    </Card>
  )
}`}
                        </CodeBlock>
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Framework-Specific Examples</h2>

                    <div className="space-y-6">
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Next.js App Router</h3>
                            <CodeBlock language="typescript">
                                {`'use client' // Only for interactive components

import { Button, Card } from '@akitectio/aki-ui'

export default function Page() {
  return (
    <Card>
      <Button>Next.js Component</Button>
    </Card>
  )
}`}
                            </CodeBlock>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Remix</h3>
                            <CodeBlock language="typescript">
                                {`import { Button, Card } from '@akitectio/aki-ui'

export default function RemixRoute() {
  return (
    <Card>
      <Button>Remix Component</Button>
    </Card>
  )
}`}
                            </CodeBlock>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Gatsby</h3>
                            <CodeBlock language="typescript">
                                {`import { Button, Card } from '@akitectio/aki-ui'

const GatsbyPage = () => (
  <Card>
    <Button>Gatsby Component</Button>
  </Card>
)

export default GatsbyPage`}
                            </CodeBlock>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Vite React</h3>
                            <CodeBlock language="typescript">
                                {`import { Button, Card } from '@akitectio/aki-ui'

function App() {
  return (
    <Card>
      <Button>Vite Component</Button>
    </Card>
  )
}

export default App`}
                            </CodeBlock>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Angular (Planned)</h3>
                            <div className="mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                <p className="text-orange-700 dark:text-orange-300 text-sm">
                                    <strong>🔄 Coming Soon:</strong> Angular support via React wrapper and Angular Elements.
                                </p>
                            </div>
                            <CodeBlock language="typescript">
                                {`// Future Angular integration
import { AkiUIModule } from '@akitectio/aki-ui/angular'

@NgModule({
  imports: [AkiUIModule],
  // ...
})
export class AppModule { }

// Or using Angular Elements
import '@akitectio/aki-ui/angular-elements'

// Use in template:
// <aki-button variant="primary">Angular Button</aki-button>`}
                            </CodeBlock>
                        </Card>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Advanced Features</h2>

                    <div className="space-y-6">
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Framework Detection</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Optional framework detection for advanced optimizations:
                            </p>
                            <CodeBlock language="typescript">
                                {`import { getFrameworkInfo } from '@akitectio/aki-ui'

function MyComponent() {
  const { framework, isSSR } = getFrameworkInfo()
  
  // Optional optimizations based on framework
  if (framework === 'nextjs') {
    // Next.js specific logic
  }
  
  return <div>Running on {framework}</div>
}`}
                            </CodeBlock>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Universal Event Handlers</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Consistent event handling across all frameworks:
                            </p>
                            <CodeBlock language="typescript">
                                {`import { createEventHandler } from '@akitectio/aki-ui'

function MyForm() {
  const handleSubmit = createEventHandler((data) => {
    // Works reliably across all frameworks
    console.log('Form submitted:', data)
  })
  
  return <Button onClick={handleSubmit}>Submit</Button>
}`}
                            </CodeBlock>
                        </Card>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Migration Guide</h2>
                    <Card className="p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            If you were using adapters before, migration is simple:
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">❌ Old (with adapters)</h4>
                                <CodeBlock language="typescript">
                                    {`import { Button } from '@akitectio/aki-ui/adapters/nextjs'
import { Button } from '@akitectio/aki-ui/adapters/remix'`}
                                </CodeBlock>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">✅ New (universal)</h4>
                                <CodeBlock language="typescript">
                                    {`import { Button } from '@akitectio/aki-ui'`}
                                </CodeBlock>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <p className="text-green-700 dark:text-green-300 text-sm">
                                <strong>🎉 That's it!</strong> Just update your imports and you're done. All component usage stays the same.
                            </p>
                        </div>
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Framework Comparison</h2>
                    <Card className="p-6 overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left p-2">Framework</th>
                                    <th className="text-left p-2">Support</th>
                                    <th className="text-left p-2">Version</th>
                                    <th className="text-left p-2">Features</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                <tr>
                                    <td className="p-2 font-medium">React</td>
                                    <td className="p-2"><span className="text-green-600">✅ Full</span></td>
                                    <td className="p-2">16.8+</td>
                                    <td className="p-2">Hooks, Context, Suspense</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Next.js</td>
                                    <td className="p-2"><span className="text-green-600">✅ Full</span></td>
                                    <td className="p-2">13.0+</td>
                                    <td className="p-2">App Router, Pages Router, SSR</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Remix</td>
                                    <td className="p-2"><span className="text-green-600">✅ Full</span></td>
                                    <td className="p-2">1.0+</td>
                                    <td className="p-2">SSR, Hydration, Nested Routing</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Gatsby</td>
                                    <td className="p-2"><span className="text-green-600">✅ Full</span></td>
                                    <td className="p-2">4.0+</td>
                                    <td className="p-2">SSG, Static Queries, GraphQL</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Vite</td>
                                    <td className="p-2"><span className="text-green-600">✅ Full</span></td>
                                    <td className="p-2">4.0+</td>
                                    <td className="p-2">HMR, Fast Builds, ESM</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Angular</td>
                                    <td className="p-2"><span className="text-blue-600">🔄 Planned</span></td>
                                    <td className="p-2">14.0+</td>
                                    <td className="p-2">React Wrapper, Elements</td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </section>
            </div>
        </PageHeader>
    )
}
