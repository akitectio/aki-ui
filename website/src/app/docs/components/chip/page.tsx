'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function ChipPage() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-4">Chip</h2>
        <p className="mb-4">
          Chips are compact elements that represent an input, attribute, or action. They can be used for selections, filtering, or as interactive elements.
        </p>

        <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-3">Basic Chip Example</h3>
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
              Basic Chip
            </div>
          </div>
        </div>
        
        <CodeBlock
          code={`import { Chip } from "aki-ui";

export default function ChipExample() {
  return (
    <Chip label="Basic Chip" />
  );
}`}
          language="jsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <p className="mb-4">
          Chips come in three visual style variants: solid, outlined, and soft.
        </p>

        <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium">
              Solid
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-transparent border border-blue-500 text-blue-600 text-sm font-medium dark:text-blue-400 dark:border-blue-400">
              Outlined
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
              Soft
            </div>
          </div>
        </div>

        <CodeBlock
          code={`import { Chip } from "aki-ui";

export default function ChipVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip label="Solid" variant="solid" />
      <Chip label="Outlined" variant="outlined" />
      <Chip label="Soft" variant="soft" />
    </div>
  );
}`}
          language="jsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Colors</h2>
        <p className="mb-4">
          Chips support various color schemes to represent different states or categories.
        </p>

        <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm font-medium dark:bg-gray-700 dark:text-gray-200">
              Default
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
              Primary
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium dark:bg-purple-900/30 dark:text-purple-300">
              Secondary
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium dark:bg-green-900/30 dark:text-green-300">
              Success
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium dark:bg-yellow-900/30 dark:text-yellow-300">
              Warning
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-medium dark:bg-red-900/30 dark:text-red-300">
              Danger
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-sm font-medium dark:bg-cyan-900/30 dark:text-cyan-300">
              Info
            </div>
          </div>
        </div>

        <CodeBlock
          code={`import { Chip } from "aki-ui";

export default function ChipColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
      <Chip label="Warning" color="warning" />
      <Chip label="Danger" color="danger" />
      <Chip label="Info" color="info" />
    </div>
  );
}`}
          language="jsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <p className="mb-4">
          Chips are available in three sizes: small, medium, and large.
        </p>

        <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-medium dark:bg-blue-900/30 dark:text-blue-300">
              Small
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
              Medium
            </div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
              Large
            </div>
          </div>
        </div>

        <CodeBlock
          code={`import { Chip } from "aki-ui";

export default function ChipSizes() {
  return (
    <div className="flex items-center gap-2">
      <Chip label="Small" size="sm" />
      <Chip label="Medium" size="md" />
      <Chip label="Large" size="lg" />
    </div>
  );
}`}
          language="jsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Interactive Chips</h2>
        <p className="mb-4">
          Chips can be clickable, deletable, or both to support different interaction patterns.
        </p>

        <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-wrap gap-2">
            <div role="button" className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium cursor-pointer hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50">
              Clickable
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
              <span>Deletable</span>
              <button className="ml-1.5 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div role="button" className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium cursor-pointer hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50">
              <span>Both</span>
              <button className="ml-1.5 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <CodeBlock
          code={`import { Chip } from "aki-ui";

export default function InteractiveChips() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip 
        label="Clickable" 
        clickable 
        onClick={() => alert('Chip clicked')}
      />
      <Chip 
        label="Deletable" 
        deletable 
        onDelete={() => alert('Delete clicked')}
      />
      <Chip 
        label="Both" 
        clickable 
        deletable
        onClick={() => alert('Chip clicked')}
        onDelete={() => alert('Delete clicked')}
      />
    </div>
  );
}`}
          language="jsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Chips with Icons</h2>
        <p className="mb-4">
          Chips can include icons at the start or end to provide visual context.
        </p>

        <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>With Start Icon</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
              <span>With End Icon</span>
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <CodeBlock
          code={`import { Chip } from "aki-ui";

export default function ChipsWithIcons() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip
        label="With Start Icon"
        startIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M5 13l4 4L19 7" />
          </svg>
        }
      />
      <Chip
        label="With End Icon"
        endIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
    </div>
  );
}`}
          language="jsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Chips with Avatar</h2>
        <p className="mb-4">
          Chips can include an avatar for user representation or other visual contexts.
        </p>

        <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
              <span className="w-6 h-6 rounded-full overflow-hidden mr-1.5 flex-shrink-0">
                <img src="https://i.pravatar.cc/300?img=1" alt="John Doe" className="w-full h-full object-cover" />
              </span>
              <span>John Doe</span>
            </div>
          </div>
        </div>

        <CodeBlock
          code={`import { Chip } from "aki-ui";

export default function ChipsWithAvatar() {
  return (
    <div className="flex flex-wrap gap-2">
      <Chip
        label="John Doe"
        avatar={
          <img
            src="https://i.pravatar.cc/300?img=1"
            alt="John Doe"
            className="rounded-full w-full h-full object-cover"
          />
        }
      />
    </div>
  );
}`}
          language="jsx"
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Props Reference</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Prop</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Default</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">label</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Content of the chip</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">variant</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'solid' | 'outlined' | 'soft'</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'solid'</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Style variant of the chip</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">size</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'sm' | 'md' | 'lg'</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'md'</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Size of the chip</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">color</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'default'</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Color of the chip</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">disabled</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether the chip is disabled</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">clickable</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether the chip is clickable</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">deletable</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether the chip has a delete button</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">rounded</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">true</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether the chip has a circular shape</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">startIcon</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ReactNode</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Icon displayed at the start of the chip</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">endIcon</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ReactNode</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Icon displayed at the end of the chip</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">avatar</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ReactNode</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Avatar element to display at the start of the chip</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">onClick</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">() => void</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Callback fired when the chip is clicked</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">onDelete</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">() => void</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Callback fired when the delete icon is clicked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
