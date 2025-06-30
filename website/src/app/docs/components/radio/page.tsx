'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function RadioPage() {
  const [selectedPlan, setSelectedPlan] = useState('basic')
  const [selectedSize, setSelectedSize] = useState('')

  return (
    <div className="space-y-8">
      <PageHeader
        title="Radio"
        description="Single choice selection component for mutually exclusive options with proper grouping support."
      />

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-3">Choose your plan:</h3>
              <RadioGroup name="plan" value={selectedPlan} onChange={setSelectedPlan}>
                <Radio value="free" label="Free Plan" />
                <Radio value="basic" label="Basic Plan" />
                <Radio value="premium" label="Premium Plan" />
                <Radio value="enterprise" label="Enterprise Plan" />
              </RadioGroup>
            </div>
            <p className="text-sm text-gray-600">
              Selected: {selectedPlan || 'None'}
            </p>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { useState } from 'react'
import { Radio, RadioGroup } from '@akitectio/aki-ui'

function BasicRadio() {
  const [selectedPlan, setSelectedPlan] = useState('basic')

  return (
    <div>
      <h3>Choose your plan:</h3>
      <RadioGroup name="plan" value={selectedPlan} onChange={setSelectedPlan}>
        <Radio value="free" label="Free Plan" />
        <Radio value="basic" label="Basic Plan" />
        <Radio value="premium" label="Premium Plan" />
        <Radio value="enterprise" label="Enterprise Plan" />
      </RadioGroup>
      <p>Selected: {selectedPlan}</p>
    </div>
  )
}`}
        />
      </section>

      {/* Individual Radio Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Individual Radio Buttons</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Select a size:</h3>
            <div className="space-y-2">
              <Radio
                name="size"
                value="small"
                label="Small"
                checked={selectedSize === 'small'}
                onChange={() => setSelectedSize('small')}
              />
              <Radio
                name="size"
                value="medium"
                label="Medium"
                checked={selectedSize === 'medium'}
                onChange={() => setSelectedSize('medium')}
              />
              <Radio
                name="size"
                value="large"
                label="Large"
                checked={selectedSize === 'large'}
                onChange={() => setSelectedSize('large')}
              />
            </div>
            <p className="text-sm text-gray-600">
              Selected size: {selectedSize || 'None'}
            </p>
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { useState } from 'react'
import { Radio } from '@akitectio/aki-ui'

function IndividualRadio() {
  const [selectedSize, setSelectedSize] = useState('')

  return (
    <div>
      <h3>Select a size:</h3>
      <div className="space-y-2">
        <Radio
          name="size"
          value="small"
          label="Small"
          checked={selectedSize === 'small'}
          onChange={() => setSelectedSize('small')}
        />
        <Radio
          name="size"
          value="medium"
          label="Medium"
          checked={selectedSize === 'medium'}
          onChange={() => setSelectedSize('medium')}
        />
        <Radio
          name="size"
          value="large"
          label="Large"
          checked={selectedSize === 'large'}
          onChange={() => setSelectedSize('large')}
        />
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
            <Radio name="color-demo" value="primary" label="Primary" color="primary" defaultChecked />
            <Radio name="color-demo" value="secondary" label="Secondary" color="secondary" />
            <Radio name="color-demo" value="success" label="Success" color="success" />
            <Radio name="color-demo" value="danger" label="Danger" color="danger" />
            <Radio name="color-demo" value="warning" label="Warning" color="warning" />
            <Radio name="color-demo" value="info" label="Info" color="info" />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <Radio name="colors" value="primary" label="Primary" color="primary" />
  <Radio name="colors" value="secondary" label="Secondary" color="secondary" />
  <Radio name="colors" value="success" label="Success" color="success" />
  <Radio name="colors" value="danger" label="Danger" color="danger" />
  <Radio name="colors" value="warning" label="Warning" color="warning" />
  <Radio name="colors" value="info" label="Info" color="info" />
</div>`}
        />
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Radio name="size-demo" value="sm" label="Small radio button" size="sm" />
            <Radio name="size-demo" value="md" label="Medium radio button" size="md" defaultChecked />
            <Radio name="size-demo" value="lg" label="Large radio button" size="lg" />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="space-y-4">
  <Radio name="sizes" value="sm" label="Small radio button" size="sm" />
  <Radio name="sizes" value="md" label="Medium radio button" size="md" />
  <Radio name="sizes" value="lg" label="Large radio button" size="lg" />
</div>`}
        />
      </section>

      {/* States */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Radio name="states" value="normal" label="Normal state" />
            <Radio name="states" value="checked" label="Checked state" defaultChecked />
            <Radio name="states" value="disabled" label="Disabled state" disabled />
            <Radio name="states" value="disabled-checked" label="Disabled checked" disabled checked />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="space-y-4">
  <Radio name="states" value="normal" label="Normal state" />
  <Radio name="states" value="checked" label="Checked state" defaultChecked />
  <Radio name="states" value="disabled" label="Disabled state" disabled />
  <Radio name="states" value="disabled-checked" label="Disabled checked" disabled checked />
</div>`}
        />
      </section>

      {/* With Helper Text */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">With Helper Text</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Radio
              name="helper"
              value="option1"
              label="Option with helper text"
              helperText="This option provides additional features"
            />
            <Radio
              name="helper"
              value="option2"
              label="Invalid option"
              helperText="This option has validation errors"
              isInvalid
              errorMessage="Please select a valid option"
            />
            <Radio
              name="helper"
              value="option3"
              label="Required option"
              helperText="This option is required for activation"
              required
            />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="space-y-4">
  <Radio
    name="helper"
    value="option1"
    label="Option with helper text"
    helperText="This option provides additional features"
  />
  <Radio
    name="helper"
    value="option2"
    label="Invalid option"
    isInvalid
    errorMessage="Please select a valid option"
  />
  <Radio
    name="helper"
    value="option3"
    label="Required option"
    required
  />
</div>`}
        />
      </section>

      {/* Label Position */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Label Position</h2>
        <div className="bg-gray-50 p-6 rounded-lg border mb-4">
          <div className="space-y-4">
            <Radio name="position" value="right" label="Label on the right (default)" />
            <Radio name="position" value="left" label="Label on the left" labelLeft />
          </div>
        </div>
        <CodeBlock
          language="tsx"
          code={`<div className="space-y-4">
  <Radio name="position" value="right" label="Label on the right (default)" />
  <Radio name="position" value="left" label="Label on the left" labelLeft />
</div>`}
        />
      </section>

      {/* API Reference */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
        
        <h3 className="text-xl font-semibold mb-3">Radio Props</h3>
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
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The label for the radio button</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">checked</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Whether the radio button is checked</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">defaultChecked</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Default checked state (uncontrolled)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onChange</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(checked: boolean) => void</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Called when the checked state changes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">disabled</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Whether the radio button is disabled</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">color</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'</td>
                <td className="border border-gray-300 px-4 py-2">'primary'</td>
                <td className="border border-gray-300 px-4 py-2">The radio button color</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'sm' | 'md' | 'lg'</td>
                <td className="border border-gray-300 px-4 py-2">'md'</td>
                <td className="border border-gray-300 px-4 py-2">The size of the radio button</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">value</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The value of the radio button</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">name</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">The name of the radio button (essential for grouping)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">labelLeft</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Whether to render the label on the left side</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">helperText</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Helper text to display below the radio button</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">errorMessage</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Error message to display when invalid</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">isInvalid</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Whether the radio button is invalid</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">required</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-300 px-4 py-2">false</td>
                <td className="border border-gray-300 px-4 py-2">Whether the radio button is required</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">RadioGroup Props</h3>
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
                <td className="border border-gray-300 px-4 py-2">Radio group children</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">name</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Name for all radio buttons in the group</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">value</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Currently selected value</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onChange</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(value: string) => void</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Called when the selected value changes</td>
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
            <li>✅ Supports focus management within radio groups</li>
            <li>✅ High contrast mode support</li>
            <li>✅ Proper labeling and grouping for assistive technologies</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">Keyboard Navigation</h3>
          <ul className="space-y-1">
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Arrow keys</kbd> - Navigate between radio buttons in the same group</li>
            <li><kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Space</kbd> - Select the focused radio button</li>
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
              <li>Use radio buttons for mutually exclusive options</li>
              <li>Always provide a name attribute for radio button groups</li>
              <li>Use clear and descriptive labels</li>
              <li>Group related radio buttons with RadioGroup</li>
              <li>Provide a default selection when appropriate</li>
              <li>Use helper text to clarify options</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-red-500 bg-red-50 p-4">
            <h4 className="font-semibold text-red-800 mb-2">❌ Don't</h4>
            <ul className="text-red-700 space-y-1">
              <li>Use radio buttons for multiple selections (use checkboxes instead)</li>
              <li>Have only one radio button in a group</li>
              <li>Use radio buttons for actions (use buttons instead)</li>
              <li>Make labels too long or confusing</li>
              <li>Forget to provide a way to deselect all options when appropriate</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
