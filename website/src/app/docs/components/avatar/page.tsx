'use client'

import { Avatar, Card, Badge } from '@/components/client-components'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function AvatarPage() {
  return (
    <PageHeader
      title="Avatar"
      description="Display user profile images with fallback options for initials or default icons."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <CodeBlock language="typescript">
            {`import { Avatar } from '@/components/client-components'`}
          </CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="User avatar" />
                <Avatar>JD</Avatar>
                <Avatar />
              </div>
              <CodeBlock language="typescript">
                {`<Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="User avatar" />
<Avatar>JD</Avatar>
<Avatar />`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Sizes</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar size="sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="Small" />
                <Avatar size="md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="Medium" />
                <Avatar size="lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="Large" />
                <Avatar size="xl" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="Extra Large" />
              </div>
              <div className="flex items-center gap-4">
                <Avatar size="sm">SM</Avatar>
                <Avatar size="md">MD</Avatar>
                <Avatar size="lg">LG</Avatar>
                <Avatar size="xl">XL</Avatar>
              </div>
              <CodeBlock language="typescript">
                {`<Avatar size="sm" src="..." alt="Small" />
<Avatar size="md" src="..." alt="Medium" />
<Avatar size="lg" src="..." alt="Large" />
<Avatar size="xl" src="..." alt="Extra Large" />`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Fallback Options</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">With Initials</h4>
                <div className="flex items-center gap-4">
                  <Avatar>AB</Avatar>
                  <Avatar>CD</Avatar>
                  <Avatar>EF</Avatar>
                  <Avatar>GH</Avatar>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Default Icon</h4>
                <div className="flex items-center gap-4">
                  <Avatar />
                  <Avatar />
                  <Avatar />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Custom Fallback</h4>
                <div className="flex items-center gap-4">
                  <Avatar fallback="👤" />
                  <Avatar fallback="🐱" />
                  <Avatar fallback="🤖" />
                </div>
              </div>

              <CodeBlock language="typescript">
                {`// With initials
<Avatar>AB</Avatar>

// Default icon
<Avatar />

// Custom fallback
<Avatar fallback="👤" />
<Avatar fallback="🐱" />`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Status Indicators</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="Online user" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="relative">
                  <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="Away user" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="relative">
                  <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" alt="Busy user" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="relative">
                  <Avatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f04?w=150" alt="Offline user" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-gray-400 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <CodeBlock language="typescript">
                {`// Online status
<div className="relative">
  <Avatar src="..." alt="Online user" />
  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
</div>

// Away status  
<div className="relative">
  <Avatar src="..." alt="Away user" />
  <div className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-500 border-2 border-white rounded-full"></div>
</div>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Avatar Groups</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Stacked Avatars</h4>
                <div className="flex -space-x-2">
                  <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="User 1" className="border-2 border-white" />
                  <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="User 2" className="border-2 border-white" />
                  <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" alt="User 3" className="border-2 border-white" />
                  <Avatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f04?w=150" alt="User 4" className="border-2 border-white" />
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 rounded-full border-2 border-white text-sm font-medium">
                    +3
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">With Names</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="John Doe" />
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-sm text-gray-500">Software Engineer</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar>JA</Avatar>
                    <div>
                      <div className="font-medium">Jane Adams</div>
                      <div className="text-sm text-gray-500">Product Manager</div>
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock language="typescript">
                {`// Stacked avatars
<div className="flex -space-x-2">
  <Avatar src="..." alt="User 1" className="border-2 border-white" />
  <Avatar src="..." alt="User 2" className="border-2 border-white" />
  <Avatar src="..." alt="User 3" className="border-2 border-white" />
  <div className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 rounded-full border-2 border-white text-sm font-medium">
    +3
  </div>
</div>

// With user info
<div className="flex items-center gap-3">
  <Avatar src="..." alt="John Doe" />
  <div>
    <div className="font-medium">John Doe</div>
    <div className="text-sm text-gray-500">Software Engineer</div>
  </div>
</div>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Interactive Avatars</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <button className="relative group">
                  <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="Clickable avatar" className="ring-2 ring-transparent group-hover:ring-blue-500 transition-all" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all"></div>
                </button>
                <button className="relative group">
                  <Avatar>JD</Avatar>
                </button>
              </div>
              <CodeBlock language="typescript">
                {`<button className="relative group">
  <Avatar 
    src="..." 
    alt="Clickable avatar" 
    className="ring-2 ring-transparent group-hover:ring-blue-500 transition-all" 
  />
  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all"></div>
</button>`}
              </CodeBlock>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-3 font-medium">Prop</th>
                    <th className="pb-3 font-medium">Type</th>
                    <th className="pb-3 font-medium">Default</th>
                    <th className="pb-3 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">src</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Image source URL</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">alt</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Alt text for image</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">size</td>
                    <td className="py-3 text-sm">'sm' | 'md' | 'lg' | 'xl'</td>
                    <td className="py-3 text-sm">'md'</td>
                    <td className="py-3 text-sm">Avatar size</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">fallback</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Custom fallback content</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">className</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Additional CSS classes</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-mono text-sm">children</td>
                    <td className="py-3 text-sm">ReactNode</td>
                    <td className="py-3 text-sm">-</td>
                    <td className="py-3 text-sm">Fallback content (initials)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                The Avatar component is built with accessibility in mind:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Always include meaningful <code>alt</code> text for images</li>
                <li>• Fallback text is announced by screen readers</li>
                <li>• Interactive avatars support keyboard navigation</li>
                <li>• Proper focus management and visual indicators</li>
                <li>• Status indicators include accessible labels when needed</li>
                <li>• Color is not the only way to convey status information</li>
              </ul>
            </div>
          </Card>
        </section>
      </div>
    </PageHeader>
  )
}
