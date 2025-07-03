'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/client-components'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)

  return (
    <div className="space-y-8">
      <PageHeader
        title="Checkbox"
        description="Binary choice input component with support for indeterminate state and custom styling."
      />

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Checkbox label="Accept terms and conditions" />
            <Checkbox label="Subscribe to newsletter" defaultChecked />
            <Checkbox label="Enable notifications" disabled />
            <Checkbox label="Disabled checked" disabled checked />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { Checkbox } from '@/components/client-components'

function BasicCheckbox() {
  return (
    <div className="space-y-4">
      <Checkbox label="Accept terms and conditions" />
      <Checkbox label="Subscribe to newsletter" defaultChecked />
      <Checkbox label="Enable notifications" disabled />
      <Checkbox label="Disabled checked" disabled checked />
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
            <Checkbox
              label="Controlled checkbox"
              checked={checked}
              onChange={setChecked}
            />
            <p className="text-sm text-gray-600">
              Current state: {checked ? 'Checked' : 'Unchecked'}
            </p>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { useState } from 'react'
import { Checkbox } from '@/components/client-components'

function ControlledCheckbox() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="space-y-4">
      <Checkbox
        label="Controlled checkbox"
        checked={checked}
        onChange={setChecked}
      />
      <p>Current state: {checked ? 'Checked' : 'Unchecked'}</p>
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
            <Checkbox label="Primary" color="primary" defaultChecked />
            <Checkbox label="Secondary" color="secondary" defaultChecked />
            <Checkbox label="Success" color="success" defaultChecked />
            <Checkbox label="Danger" color="danger" defaultChecked />
            <Checkbox label="Warning" color="warning" defaultChecked />
            <Checkbox label="Info" color="info" defaultChecked />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <Checkbox label="Primary" color="primary" defaultChecked />
  <Checkbox label="Secondary" color="secondary" defaultChecked />
  <Checkbox label="Success" color="success" defaultChecked />
  <Checkbox label="Danger" color="danger" defaultChecked />
  <Checkbox label="Warning" color="warning" defaultChecked />
  <Checkbox label="Info" color="info" defaultChecked />
</div>`}
        />
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Checkbox label="Small checkbox" size="sm" defaultChecked />
            <Checkbox label="Medium checkbox" size="md" defaultChecked />
            <Checkbox label="Large checkbox" size="lg" defaultChecked />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="space-y-4">
  <Checkbox label="Small checkbox" size="sm" defaultChecked />
  <Checkbox label="Medium checkbox" size="md" defaultChecked />
  <Checkbox label="Large checkbox" size="lg" defaultChecked />
</div>`}
        />
      </section>

      {/* Indeterminate */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Indeterminate State</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Checkbox
              label="Parent checkbox"
              indeterminate={indeterminate}
              onChange={(checked) => {
                setIndeterminate(false)
                // Handle parent change logic
              }}
            />
            <div className="ml-6 space-y-2">
              <Checkbox label="Child option 1" />
              <Checkbox label="Child option 2" />
              <Checkbox label="Child option 3" />
            </div>
            <button
              onClick={() => setIndeterminate(!indeterminate)}
              className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            >
              Toggle Indeterminate
            </button>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { useState } from 'react'
import { Checkbox } from '@/components/client-components'

function IndeterminateCheckbox() {
  const [parentChecked, setParentChecked] = useState(false)
  const [childChecked, setChildChecked] = useState([false, false, false])

  const handleParentChange = (checked: boolean) => {
    setParentChecked(checked)
    setChildChecked([checked, checked, checked])
  }

  const handleChildChange = (index: number, checked: boolean) => {
    const newChildChecked = [...childChecked]
    newChildChecked[index] = checked
    setChildChecked(newChildChecked)
    
    const checkedCount = newChildChecked.filter(Boolean).length
    setParentChecked(checkedCount === newChildChecked.length)
  }

  const isIndeterminate = childChecked.some(Boolean) && !childChecked.every(Boolean)

  return (
    <div className="space-y-4">
      <Checkbox
        label="Select all"
        checked={parentChecked}
        indeterminate={isIndeterminate}
        onChange={handleParentChange}
      />
      <div className="ml-6 space-y-2">
        {childChecked.map((checked, index) => (
          <Checkbox
            key={index}
            label={\`Option \${index + 1}\`}
            checked={checked}
            onChange={(checked) => handleChildChange(index, checked)}
          />
        ))}
      </div>
    </div>
  )
}`}
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
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The label for the checkbox</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">checked</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Whether the checkbox is checked (controlled)</td>
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
                <td className="border border-gray-300 px-4 py-2">Called when the checked state changes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">indeterminate</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Whether the checkbox is in an indeterminate state</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Whether the checkbox is disabled</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">color</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'</td>
                <td className="border border-gray-300 px-4 py-2">'primary'</td>
                <td className="border border-gray-300 px-4 py-2">The checkbox color</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'sm' | 'md' | 'lg'</td>
                <td className="border border-gray-300 px-4 py-2">'md'</td>
                <td className="border border-gray-300 px-4 py-2">The size of the checkbox</td>
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
            <li>✅ Proper labeling for assistive technologies</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">Keyboard Navigation</h3>
          <ul className="space-y-1">
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Space</kbd> - Toggle checkbox state</li>
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
              <li>Use clear and descriptive labels</li>
              <li>Group related checkboxes logically</li>
              <li>Use indeterminate state for parent/child relationships</li>
              <li>Provide sufficient spacing between checkboxes</li>
              <li>Use consistent sizing throughout your application</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-red-500 bg-red-50 p-4">
            <h4 className="font-semibold text-red-800 mb-2">❌ Don't</h4>
            <ul className="text-red-700 space-y-1">
              <li>Use checkboxes for mutually exclusive options (use radio buttons instead)</li>
              <li>Make labels too long or confusing</li>
              <li>Use only icons without text labels</li>
              <li>Forget to handle the indeterminate state properly</li>
              <li>Use disabled checkboxes without explanation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
