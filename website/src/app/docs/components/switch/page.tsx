'use client'

import { useState } from 'react'
import { Switch } from '@/components/client-components'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function SwitchPage() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="space-y-8">
      <PageHeader
        title="Switch"
        description="Toggle switch component for boolean values with smooth animations and customizable styling."
      />

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Switch />
            <Switch defaultChecked />
            <Switch label="Enable feature" />
            <Switch label="Disabled switch" disabled />
            <Switch label="Disabled checked" disabled checked />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { Switch } from '@/components/client-components'

function BasicSwitch() {
  return (
    <div className="space-y-4">
      <Switch />
      <Switch defaultChecked />
      <Switch label="Enable feature" />
      <Switch label="Disabled switch" disabled />
      <Switch label="Disabled checked" disabled checked />
    </div>
  )
}`}
        />
      </section>

      {/* Controlled */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Controlled Component</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Switch
              label="Controlled switch"
              checked={isEnabled}
              onChange={setIsEnabled}
            />
            <Switch
              label="Enable notifications"
              checked={notifications}
              onChange={setNotifications}
            />
            <Switch
              label="Dark mode"
              checked={darkMode}
              onChange={setDarkMode}
            />
            <div className="mt-4 p-3 bg-white rounded border text-sm">
              <div>Feature enabled: {isEnabled ? 'Yes' : 'No'}</div>
              <div>Notifications: {notifications ? 'On' : 'Off'}</div>
              <div>Dark mode: {darkMode ? 'On' : 'Off'}</div>
            </div>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { useState } from 'react'
import { Switch } from '@/components/client-components'

function ControlledSwitch() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="space-y-4">
      <Switch
        label="Controlled switch"
        checked={isEnabled}
        onChange={setIsEnabled}
      />
      <Switch
        label="Enable notifications"
        checked={notifications}
        onChange={setNotifications}
      />
      <Switch
        label="Dark mode"
        checked={darkMode}
        onChange={setDarkMode}
      />
      <div>
        <div>Feature enabled: {isEnabled ? 'Yes' : 'No'}</div>
        <div>Notifications: {notifications ? 'On' : 'Off'}</div>
        <div>Dark mode: {darkMode ? 'On' : 'Off'}</div>
      </div>
    </div>
  )
}`}
        />
      </section>

      {/* Colors */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Colors</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Switch label="Primary" color="primary" defaultChecked />
            <Switch label="Secondary" color="secondary" defaultChecked />
            <Switch label="Success" color="success" defaultChecked />
            <Switch label="Danger" color="danger" defaultChecked />
            <Switch label="Warning" color="warning" defaultChecked />
            <Switch label="Info" color="info" defaultChecked />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <Switch label="Primary" color="primary" defaultChecked />
  <Switch label="Secondary" color="secondary" defaultChecked />
  <Switch label="Success" color="success" defaultChecked />
  <Switch label="Danger" color="danger" defaultChecked />
  <Switch label="Warning" color="warning" defaultChecked />
  <Switch label="Info" color="info" defaultChecked />
</div>`}
        />
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Switch label="Small switch" size="sm" defaultChecked />
            <Switch label="Medium switch" size="md" defaultChecked />
            <Switch label="Large switch" size="lg" defaultChecked />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="space-y-4">
  <Switch label="Small switch" size="sm" defaultChecked />
  <Switch label="Medium switch" size="md" defaultChecked />
  <Switch label="Large switch" size="lg" defaultChecked />
</div>`}
        />
      </section>

      {/* Label Position */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Label Position</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Switch label="Label on the right (default)" labelPosition="right" defaultChecked />
            <Switch label="Label on the left" labelPosition="left" defaultChecked />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="space-y-4">
  <Switch label="Label on the right (default)" labelPosition="right" />
  <Switch label="Label on the left" labelPosition="left" />
</div>`}
        />
      </section>

      {/* Use Cases */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-6">
            {/* Settings Panel */}
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">User Preferences</h3>
              <div className="space-y-3">
                <Switch label="Enable email notifications" defaultChecked />
                <Switch label="Auto-save drafts" defaultChecked />
                <Switch label="Show online status" />
                <Switch label="Enable two-factor authentication" />
              </div>
            </div>

            {/* Feature Toggles */}
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">Feature Toggles</h3>
              <div className="space-y-3">
                <Switch label="Beta features" color="warning" />
                <Switch label="Advanced mode" color="info" />
                <Switch label="Developer tools" color="secondary" />
              </div>
            </div>

            {/* Status Controls */}
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">Status Controls</h3>
              <div className="space-y-3">
                <Switch label="Service enabled" color="success" defaultChecked />
                <Switch label="Maintenance mode" color="danger" />
                <Switch label="Public visibility" color="primary" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`// Settings Panel
<div className="space-y-6">
  <div className="bg-white p-4 rounded-lg border">
    <h3 className="text-lg font-semibold mb-3">User Preferences</h3>
    <div className="space-y-3">
      <Switch label="Enable email notifications" defaultChecked />
      <Switch label="Auto-save drafts" defaultChecked />
      <Switch label="Show online status" />
      <Switch label="Enable two-factor authentication" />
    </div>
  </div>

  <div className="bg-white p-4 rounded-lg border">
    <h3 className="text-lg font-semibold mb-3">Feature Toggles</h3>
    <div className="space-y-3">
      <Switch label="Beta features" color="warning" />
      <Switch label="Advanced mode" color="info" />
      <Switch label="Developer tools" color="secondary" />
    </div>
  </div>
</div>`}
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
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">checked</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Whether the switch is checked (controlled)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">defaultChecked</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Default checked state (uncontrolled)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onChange</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">{`(checked: boolean) => void`}</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Called when the switch state changes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Whether the switch is disabled</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'sm' | 'md' | 'lg'</td>
                <td className="border border-gray-300 px-4 py-2">'md'</td>
                <td className="border border-gray-300 px-4 py-2">Size of the switch</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The label to display next to the switch</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">labelPosition</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'left' | 'right'</td>
                <td className="border border-gray-300 px-4 py-2">'right'</td>
                <td className="border border-gray-300 px-4 py-2">Position of the label relative to the switch</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">color</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'</td>
                <td className="border border-gray-300 px-4 py-2">'primary'</td>
                <td className="border border-gray-300 px-4 py-2">Color of the switch when checked</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Additional CSS classes</td>
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
            <li>✅ Supports focus management</li>
            <li>✅ High contrast mode support</li>
            <li>✅ Clear on/off state indication</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">Keyboard Navigation</h3>
          <ul className="space-y-1">
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Space</kbd> - Toggle switch state</li>
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Enter</kbd> - Toggle switch state</li>
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Tab</kbd> - Move focus to next focusable element</li>
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Shift + Tab</kbd> - Move focus to previous focusable element</li>
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
              <li>Use switches for binary state changes that take effect immediately</li>
              <li>Use clear and descriptive labels</li>
              <li>Group related switches logically</li>
              <li>Use consistent sizing throughout your application</li>
              <li>Provide visual feedback for state changes</li>
              <li>Use appropriate colors to convey meaning (success, danger, etc.)</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-red-500 bg-red-50 p-4">
            <h4 className="font-semibold text-red-800 mb-2">❌ Don't</h4>
            <ul className="text-red-700 space-y-1">
              <li>Use switches for actions that require confirmation</li>
              <li>Use switches when the change doesn't take effect immediately</li>
              <li>Make labels ambiguous about what the switch controls</li>
              <li>Use switches for multiple choice selections</li>
              <li>Disable switches without explanation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Switch vs Checkbox */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">When to Use Switch vs Checkbox</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Use Switch When:</h3>
            <ul className="text-green-700 space-y-2">
              <li>• The change takes effect immediately</li>
              <li>• Toggling a system setting or preference</li>
              <li>• Controlling a service state (on/off)</li>
              <li>• The action is like a physical switch</li>
              <li>• Binary state with immediate feedback</li>
            </ul>
            <div className="mt-4">
              <Switch label="Enable notifications" color="success" defaultChecked />
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Use Checkbox When:</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• Part of a form that requires submission</li>
              <li>• Multiple items can be selected</li>
              <li>• Agreeing to terms or conditions</li>
              <li>• Selecting options for later processing</li>
              <li>• Indeterminate state is needed</li>
            </ul>
            <div className="mt-4">
              <input type="checkbox" className="mr-2" defaultChecked />
              <label>I agree to the terms and conditions</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
