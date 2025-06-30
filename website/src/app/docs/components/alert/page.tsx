'use client'

import { useState } from 'react'
import { Alert } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function AlertPage() {
  const [showDismissible, setShowDismissible] = useState(true)
  const [showCustom, setShowCustom] = useState(true)

  return (
    <div className="space-y-8">
      <PageHeader
        title="Alert"
        description="Display important messages and notifications to users with various styles and customization options."
      />

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Alert>
              This is a basic alert message.
            </Alert>
            <Alert variant="success">
              Operation completed successfully!
            </Alert>
            <Alert variant="danger">
              An error occurred while processing your request.
            </Alert>
            <Alert variant="warning">
              Please review your settings before continuing.
            </Alert>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { Alert } from '@akitectio/aki-ui'

function BasicAlert() {
  return (
    <div className="space-y-4">
      <Alert>
        This is a basic alert message.
      </Alert>
      <Alert variant="success">
        Operation completed successfully!
      </Alert>
      <Alert variant="danger">
        An error occurred while processing your request.
      </Alert>
      <Alert variant="warning">
        Please review your settings before continuing.
      </Alert>
    </div>
  )
}`}
        />
      </section>

      {/* All Variants */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Alert Variants</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Alert variant="primary">
              <strong>Primary:</strong> Important information that needs attention.
            </Alert>
            <Alert variant="secondary">
              <strong>Secondary:</strong> General information or updates.
            </Alert>
            <Alert variant="success">
              <strong>Success:</strong> Action was completed successfully.
            </Alert>
            <Alert variant="danger">
              <strong>Error:</strong> Something went wrong and needs fixing.
            </Alert>
            <Alert variant="warning">
              <strong>Warning:</strong> Caution needed before proceeding.
            </Alert>
            <Alert variant="info">
              <strong>Info:</strong> Helpful information for the user.
            </Alert>
            <Alert variant="light">
              <strong>Light:</strong> Subtle information with light styling.
            </Alert>
            <Alert variant="dark">
              <strong>Dark:</strong> High contrast information display.
            </Alert>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="space-y-4">
  <Alert variant="primary">Primary: Important information</Alert>
  <Alert variant="secondary">Secondary: General information</Alert>
  <Alert variant="success">Success: Action completed</Alert>
  <Alert variant="danger">Error: Something went wrong</Alert>
  <Alert variant="warning">Warning: Caution needed</Alert>
  <Alert variant="info">Info: Helpful information</Alert>
  <Alert variant="light">Light: Subtle information</Alert>
  <Alert variant="dark">Dark: High contrast display</Alert>
</div>`}
        />
      </section>

      {/* With Icons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Alert variant="success" showIcon>
              Your account has been created successfully!
            </Alert>
            <Alert variant="danger" showIcon>
              Failed to upload file. Please try again.
            </Alert>
            <Alert variant="warning" showIcon>
              Your session will expire in 5 minutes.
            </Alert>
            <Alert variant="info" showIcon>
              New features are available in the latest update.
            </Alert>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="space-y-4">
  <Alert variant="success" showIcon>
    Your account has been created successfully!
  </Alert>
  <Alert variant="danger" showIcon>
    Failed to upload file. Please try again.
  </Alert>
  <Alert variant="warning" showIcon>
    Your session will expire in 5 minutes.
  </Alert>
  <Alert variant="info" showIcon>
    New features are available in the latest update.
  </Alert>
</div>`}
        />
      </section>

      {/* Dismissible Alerts */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Dismissible Alerts</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            {showDismissible && (
              <Alert
                variant="info"
                dismissible
                onDismiss={() => setShowDismissible(false)}
                showIcon
              >
                This alert can be dismissed by clicking the X button.
              </Alert>
            )}
            {!showDismissible && (
              <button
                onClick={() => setShowDismissible(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Show Dismissible Alert
              </button>
            )}
            <Alert
              variant="warning"
              dismissible
              showIcon
            >
              This is a dismissible warning message.
            </Alert>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { useState } from 'react'
import { Alert } from '@akitectio/aki-ui'

function DismissibleAlert() {
  const [showAlert, setShowAlert] = useState(true)

  return (
    <div>
      {showAlert && (
        <Alert
          variant="info"
          dismissible
          onDismiss={() => setShowAlert(false)}
          showIcon
        >
          This alert can be dismissed by clicking the X button.
        </Alert>
      )}
      {!showAlert && (
        <button onClick={() => setShowAlert(true)}>
          Show Alert Again
        </button>
      )}
    </div>
  )
}`}
        />
      </section>

      {/* Custom Icons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Custom Icons</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Alert
              variant="success"
              icon={<span className="text-xl">🎉</span>}
            >
              Congratulations! You've completed all tasks.
            </Alert>
            <Alert
              variant="info"
              icon={<span className="text-xl">💡</span>}
            >
              Pro tip: Use keyboard shortcuts to work faster.
            </Alert>
            <Alert
              variant="warning"
              icon={<span className="text-xl">⚠️</span>}
            >
              Your storage is almost full. Consider upgrading your plan.
            </Alert>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="space-y-4">
  <Alert
    variant="success"
    icon={<span className="text-xl">🎉</span>}
  >
    Congratulations! You've completed all tasks.
  </Alert>
  <Alert
    variant="info"
    icon={<span className="text-xl">💡</span>}
  >
    Pro tip: Use keyboard shortcuts to work faster.
  </Alert>
  <Alert
    variant="warning"
    icon={<span className="text-xl">⚠️</span>}
  >
    Your storage is almost full. Consider upgrading your plan.
  </Alert>
</div>`}
        />
      </section>

      {/* Border Styles */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Border Styles</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Alert variant="primary" borderLeft>
              Alert with left border accent.
            </Alert>
            <Alert variant="success" borderLeft showIcon>
              Success alert with left border and icon.
            </Alert>
            <Alert variant="danger" borderLeft>
              Error alert with left border styling.
            </Alert>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="space-y-4">
  <Alert variant="primary" borderLeft>
    Alert with left border accent.
  </Alert>
  <Alert variant="success" borderLeft showIcon>
    Success alert with left border and icon.
  </Alert>
  <Alert variant="danger" borderLeft>
    Error alert with left border styling.
  </Alert>
</div>`}
        />
      </section>

      {/* Complex Content */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Complex Content</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Alert variant="success" showIcon dismissible>
              <div>
                <h4 className="font-semibold mb-2">Account Verified Successfully!</h4>
                <p className="mb-3">
                  Your email address has been verified. You now have access to all premium features.
                </p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                    Get Started
                  </button>
                  <button className="px-3 py-1 border border-green-600 text-green-600 text-sm rounded hover:bg-green-50">
                    Learn More
                  </button>
                </div>
              </div>
            </Alert>
            
            <Alert variant="warning" showIcon>
              <div>
                <h4 className="font-semibold mb-2">Update Required</h4>
                <p className="mb-3">
                  A new version is available with important security updates.
                </p>
                <ul className="list-disc list-inside text-sm space-y-1 mb-3">
                  <li>Enhanced security protocols</li>
                  <li>Bug fixes and performance improvements</li>
                  <li>New collaboration features</li>
                </ul>
                <button className="px-3 py-1 bg-orange-500 text-white text-sm rounded hover:bg-orange-600">
                  Update Now
                </button>
              </div>
            </Alert>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Alert variant="success" showIcon dismissible>
  <div>
    <h4 className="font-semibold mb-2">Account Verified Successfully!</h4>
    <p className="mb-3">
      Your email address has been verified. You now have access to all premium features.
    </p>
    <div className="flex gap-2">
      <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
        Get Started
      </button>
      <button className="px-3 py-1 border border-green-600 text-green-600 text-sm rounded hover:bg-green-50">
        Learn More
      </button>
    </div>
  </div>
</Alert>`}
        />
      </section>

      {/* API Reference */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
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
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The content of the alert</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'</td>
                <td className="border border-gray-300 px-4 py-2">'primary'</td>
                <td className="border border-gray-300 px-4 py-2">The visual style variant of the alert</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">dismissible</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Whether the alert is dismissible</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onDismiss</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">() => void</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Callback when the alert is dismissed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showIcon</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Show an icon based on the variant</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">icon</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Custom icon to show in the alert</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">borderLeft</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Whether the alert has a border on the left side</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Additional CSS classes to apply to the alert</td>
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
            <li>✅ Proper ARIA roles and attributes</li>
            <li>✅ Screen reader compatible with meaningful content</li>
            <li>✅ High contrast support for all variants</li>
            <li>✅ Focus management for dismissible alerts</li>
            <li>✅ Semantic HTML structure</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">ARIA Attributes</h3>
          <ul className="space-y-1">
            <li><code>role="alert"</code> - For important messages that need immediate attention</li>
            <li><code>aria-live="polite"</code> - For informational messages</li>
            <li><code>aria-live="assertive"</code> - For critical error messages</li>
            <li><code>aria-label</code> - On dismiss button for screen readers</li>
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
              <li>Use appropriate variants to convey the right message type</li>
              <li>Keep alert messages clear and concise</li>
              <li>Use icons to help users quickly identify message types</li>
              <li>Provide actionable next steps when possible</li>
              <li>Use dismissible alerts for non-critical information</li>
              <li>Position alerts where users expect to see feedback</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-red-500 bg-red-50 p-4">
            <h4 className="font-semibold text-red-800 mb-2">❌ Don't</h4>
            <ul className="text-red-700 space-y-1">
              <li>Use too many alerts on a single page</li>
              <li>Make critical error messages dismissible</li>
              <li>Use vague or confusing language</li>
              <li>Override semantic colors (red for success, green for errors)</li>
              <li>Use alerts for regular content that isn't status-related</li>
              <li>Make alerts disappear too quickly for users to read</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-3">Form Validation</h3>
            <Alert variant="danger" showIcon>
              Please correct the following errors before submitting:
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Email address is required</li>
                <li>Password must be at least 8 characters</li>
              </ul>
            </Alert>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-3">System Status</h3>
            <Alert variant="warning" showIcon>
              Scheduled maintenance will occur tonight from 11 PM to 1 AM PST. Some features may be unavailable.
            </Alert>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-3">Success Feedback</h3>
            <Alert variant="success" showIcon dismissible>
              Your profile has been updated successfully!
            </Alert>
          </div>
        </div>
      </section>
    </div>
  )
}
