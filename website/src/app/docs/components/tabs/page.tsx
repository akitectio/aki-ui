'use client'

import { useState } from 'react'
import { Tabs, Tab } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="space-y-8">
      <PageHeader
        title="Tabs"
        description="Organize content into tabbed sections with smooth transitions and keyboard navigation support."
      />

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <Tabs>
            <Tab label="Overview">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                <p className="text-gray-600">
                  This tab contains general information about the project, including its goals,
                  timeline, and key stakeholders. You can provide a high-level summary here.
                </p>
              </div>
            </Tab>
            <Tab label="Details">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                <p className="text-gray-600 mb-3">
                  Detailed information about the project specifications, requirements, and technical details.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Technical specifications</li>
                  <li>Resource requirements</li>
                  <li>Implementation timeline</li>
                  <li>Risk assessment</li>
                </ul>
              </div>
            </Tab>
            <Tab label="Settings">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Project Settings</h3>
                <p className="text-gray-600">
                  Configuration options and settings for the project. This might include
                  user permissions, notification preferences, and other customizable options.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { Tabs, Tab } from '@akitectio/aki-ui'

function BasicTabs() {
  return (
    <Tabs>
      <Tab label="Overview">
        <div className="p-4">
          <h3>Project Overview</h3>
          <p>General information about the project...</p>
        </div>
      </Tab>
      <Tab label="Details">
        <div className="p-4">
          <h3>Project Details</h3>
          <p>Detailed information...</p>
        </div>
      </Tab>
      <Tab label="Settings">
        <div className="p-4">
          <h3>Project Settings</h3>
          <p>Configuration options...</p>
        </div>
      </Tab>
    </Tabs>
  )
}`}
        />
      </section>

      {/* Controlled Tabs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Controlled Tabs</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab(0)}
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
              >
                Go to First Tab
              </button>
              <button
                onClick={() => setActiveTab(2)}
                className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
              >
                Go to Last Tab
              </button>
            </div>
            
            <Tabs activeIndex={activeTab} onChange={setActiveTab}>
              <Tab label="Dashboard">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Dashboard</h3>
                  <p className="text-gray-600">Current active tab: {activeTab}</p>
                  <div className="mt-3 p-3 bg-blue-50 rounded">
                    <p className="text-sm text-blue-700">
                      📊 Welcome to the dashboard! Here you can view analytics and key metrics.
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab label="Analytics">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                  <p className="text-gray-600">Current active tab: {activeTab}</p>
                  <div className="mt-3 p-3 bg-green-50 rounded">
                    <p className="text-sm text-green-700">
                      📈 View detailed analytics and performance metrics here.
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab label="Reports">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Reports</h3>
                  <p className="text-gray-600">Current active tab: {activeTab}</p>
                  <div className="mt-3 p-3 bg-purple-50 rounded">
                    <p className="text-sm text-purple-700">
                      📋 Generate and download various reports from this section.
                    </p>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { useState } from 'react'
import { Tabs, Tab } from '@akitectio/aki-ui'

function ControlledTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setActiveTab(0)}>
          Go to First Tab
        </button>
        <button onClick={() => setActiveTab(2)}>
          Go to Last Tab
        </button>
      </div>
      
      <Tabs activeIndex={activeTab} onChange={setActiveTab}>
        <Tab label="Dashboard">
          <div>Dashboard content...</div>
        </Tab>
        <Tab label="Analytics">
          <div>Analytics content...</div>
        </Tab>
        <Tab label="Reports">
          <div>Reports content...</div>
        </Tab>
      </Tabs>
    </div>
  )
}`}
        />
      </section>

      {/* Tabs with Icons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tabs with Icons</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <Tabs>
            <Tab label="Home" icon={<span>🏠</span>}>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Home</h3>
                <p className="text-gray-600">
                  Welcome to the home page! This is your starting point for navigating
                  through the application.
                </p>
              </div>
            </Tab>
            <Tab label="Profile" icon={<span>👤</span>}>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">User Profile</h3>
                <p className="text-gray-600">
                  Manage your personal information, preferences, and account settings.
                </p>
              </div>
            </Tab>
            <Tab label="Messages" icon={<span>💬</span>}>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Messages</h3>
                <p className="text-gray-600">
                  View and manage your messages, conversations, and notifications.
                </p>
              </div>
            </Tab>
            <Tab label="Settings" icon={<span>⚙️</span>}>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Settings</h3>
                <p className="text-gray-600">
                  Configure application settings, preferences, and system options.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Tabs>
  <Tab label="Home" icon={<span>🏠</span>}>
    <div className="p-4">
      <h3>Home</h3>
      <p>Welcome to the home page...</p>
    </div>
  </Tab>
  <Tab label="Profile" icon={<span>👤</span>}>
    <div className="p-4">
      <h3>User Profile</h3>
      <p>Manage your personal information...</p>
    </div>
  </Tab>
  <Tab label="Messages" icon={<span>💬</span>}>
    <div className="p-4">
      <h3>Messages</h3>
      <p>View and manage your messages...</p>
    </div>
  </Tab>
  <Tab label="Settings" icon={<span>⚙️</span>}>
    <div className="p-4">
      <h3>Settings</h3>
      <p>Configure application settings...</p>
    </div>
  </Tab>
</Tabs>`}
        />
      </section>

      {/* Disabled Tabs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Disabled Tabs</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <Tabs>
            <Tab label="Available">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Available Feature</h3>
                <p className="text-gray-600">
                  This feature is currently available and fully functional.
                </p>
              </div>
            </Tab>
            <Tab label="Coming Soon" disabled>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                <p className="text-gray-600">
                  This feature is coming soon! Stay tuned for updates.
                </p>
              </div>
            </Tab>
            <Tab label="Beta" icon={<span>⚠️</span>}>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Beta Feature</h3>
                <p className="text-gray-600">
                  This feature is in beta. Use with caution and report any issues.
                </p>
              </div>
            </Tab>
            <Tab label="Premium" disabled>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Premium Feature</h3>
                <p className="text-gray-600">
                  This feature requires a premium subscription to access.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Tabs>
  <Tab label="Available">
    <div>This feature is available...</div>
  </Tab>
  <Tab label="Coming Soon" disabled>
    <div>This feature is coming soon...</div>
  </Tab>
  <Tab label="Beta" icon={<span>⚠️</span>}>
    <div>This feature is in beta...</div>
  </Tab>
  <Tab label="Premium" disabled>
    <div>Premium feature...</div>
  </Tab>
</Tabs>`}
        />
      </section>

      {/* Tab Orientations */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tab Orientations</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Horizontal (Default)</h3>
              <Tabs orientation="horizontal">
                <Tab label="Tab 1">
                  <div className="p-4">Horizontal tab content 1</div>
                </Tab>
                <Tab label="Tab 2">
                  <div className="p-4">Horizontal tab content 2</div>
                </Tab>
                <Tab label="Tab 3">
                  <div className="p-4">Horizontal tab content 3</div>
                </Tab>
              </Tabs>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Vertical</h3>
              <Tabs orientation="vertical">
                <Tab label="Dashboard">
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">Dashboard</h4>
                    <p className="text-gray-600">Vertical dashboard content with more space.</p>
                  </div>
                </Tab>
                <Tab label="Analytics">
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">Analytics</h4>
                    <p className="text-gray-600">Vertical analytics content layout.</p>
                  </div>
                </Tab>
                <Tab label="Settings">
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">Settings</h4>
                    <p className="text-gray-600">Vertical settings panel layout.</p>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`{/* Horizontal Tabs (Default) */}
<Tabs orientation="horizontal">
  <Tab label="Tab 1">Content 1</Tab>
  <Tab label="Tab 2">Content 2</Tab>
  <Tab label="Tab 3">Content 3</Tab>
</Tabs>

{/* Vertical Tabs */}
<Tabs orientation="vertical">
  <Tab label="Dashboard">Dashboard content</Tab>
  <Tab label="Analytics">Analytics content</Tab>
  <Tab label="Settings">Settings content</Tab>
</Tabs>`}
        />
      </section>

      {/* API Reference */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
        
        <h3 className="text-xl font-semibold mb-3">Tabs Props</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactElement&lt;TabProps&gt;[]</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The tabs to be rendered</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">defaultIndex</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">The index of the initially active tab</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">activeIndex</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">number</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The currently active tab index (controlled)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onChange</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(index: number) => void</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Called when the active tab changes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">orientation</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'horizontal' | 'vertical'</td>
                <td className="border border-gray-300 px-4 py-2">'horizontal'</td>
                <td className="border border-gray-300 px-4 py-2">The orientation of the tabs</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'default' | 'bordered' | 'pills'</td>
                <td className="border border-gray-300 px-4 py-2">'default'</td>
                <td className="border border-gray-300 px-4 py-2">The visual style of the tabs</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'sm' | 'md' | 'lg'</td>
                <td className="border border-gray-300 px-4 py-2">'md'</td>
                <td className="border border-gray-300 px-4 py-2">The size of the tabs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">Tab Props</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The tab's label</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The tab's content</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Whether the tab is disabled</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">icon</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Custom icon to display before the label</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">id</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">ID for the tab</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
        <div className="prose prose-gray max-w-none">
          <ul className="space-y-2">
            <li>✅ Full keyboard navigation support</li>
            <li>✅ Screen reader compatible with proper ARIA attributes</li>
            <li>✅ Focus management within tab panels</li>
            <li>✅ Proper tab list and tab panel relationships</li>
            <li>✅ High contrast mode support</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">Keyboard Navigation</h3>
          <ul className="space-y-1">
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Arrow keys</kbd> - Navigate between tabs</li>
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Home</kbd> - Go to first tab</li>
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">End</kbd> - Go to last tab</li>
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Enter/Space</kbd> - Activate focused tab</li>
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Tab</kbd> - Move focus to tab panel content</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">ARIA Attributes</h3>
          <ul className="space-y-1">
            <li><code>role="tablist"</code> - Identifies the tab container</li>
            <li><code>role="tab"</code> - Identifies each tab element</li>
            <li><code>role="tabpanel"</code> - Identifies each tab panel</li>
            <li><code>aria-selected</code> - Indicates which tab is selected</li>
            <li><code>aria-controls</code> - Links tabs to their panels</li>
            <li><code>aria-labelledby</code> - Links panels to their tabs</li>
          </ul>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 bg-green-50 p-4">
            <h4 className="font-semibold text-green-800 mb-2">✅ Do</h4>
            <ul className="text-green-700 space-y-1">
              <li>Use clear and concise tab labels</li>
              <li>Keep the number of tabs manageable (typically 3-7)</li>
              <li>Group related content logically</li>
              <li>Use icons to help users identify content quickly</li>
              <li>Provide default content for the first tab</li>
              <li>Use consistent content structure across tabs</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-red-500 bg-red-50 p-4">
            <h4 className="font-semibold text-red-800 mb-2">❌ Don't</h4>
            <ul className="text-red-700 space-y-1">
              <li>Use tabs for sequential processes (use steps instead)</li>
              <li>Nest tabs within tabs</li>
              <li>Use tabs when content needs to be compared side-by-side</li>
              <li>Make tab labels too long or ambiguous</li>
              <li>Use disabled tabs without clear reasons</li>
              <li>Change tab content dynamically in confusing ways</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">📊 Dashboard Sections</h3>
            <p className="text-gray-600 mb-2">Organize different views of data and analytics</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Overview, Analytics, Reports, Settings</li>
              <li>Different time periods or data sources</li>
              <li>Various chart types and visualizations</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">👤 User Profile</h3>
            <p className="text-gray-600 mb-2">Separate different aspects of user information</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Personal Info, Account Settings, Privacy</li>
              <li>Activity History, Preferences, Notifications</li>
              <li>Security, Billing, Connected Apps</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">📝 Form Sections</h3>
            <p className="text-gray-600 mb-2">Break long forms into manageable sections</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Basic Info, Contact Details, Preferences</li>
              <li>Step-by-step form completion</li>
              <li>Optional and required information</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">📖 Documentation</h3>
            <p className="text-gray-600 mb-2">Organize different types of documentation</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>API Reference, Guides, Examples</li>
              <li>Getting Started, Advanced Topics, FAQ</li>
              <li>Different programming languages or frameworks</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
