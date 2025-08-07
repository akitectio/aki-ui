'use client'

import { useState } from 'react'
import { ColorPicker } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'

export default function ColorPickerPage() {
    const [color, setColor] = useState('#3b82f6')
    const [primaryColor, setPrimaryColor] = useState('#3b82f6')
    const [secondaryColor, setSecondaryColor] = useState('#10b981')
    const [accentColor, setAccentColor] = useState('#f59e0b')

    return (
        <PageHeader
            title="ColorPicker"
            description="A color picker component that allows users to select colors with preset options and custom color input."
        >
            <div className="space-y-8">
                {/* Basic Usage */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <div className="space-y-4">
                            <ColorPicker
                                value={color}
                                onChange={setColor}
                                placeholder="Select color"
                            />
                            <div className="text-sm text-gray-600">
                                Selected color: <span className="font-mono">{color}</span>
                            </div>
                        </div>
                    </div>

                    <CodeBlock
                        code={`import { ColorPicker } from "@akitectio/aki-ui";
import { useState } from "react";

export default function ColorPickerExample() {
  const [color, setColor] = useState('#3b82f6');

  return (
    <div className="space-y-4">
      <ColorPicker 
        value={color} 
        onChange={setColor} 
        placeholder="Select color" 
      />
      <div className="text-sm text-gray-600">
        Selected color: <span className="font-mono">{color}</span>
      </div>
    </div>
  );
}`}
                    />
                </section>

                {/* Sizes */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <div className="flex items-center space-x-6">
                            <div className="text-center">
                                <ColorPicker value="#ef4444" size="sm" onChange={() => { }} />
                                <div className="text-xs text-gray-500 mt-2">Small</div>
                            </div>
                            <div className="text-center">
                                <ColorPicker value="#22c55e" size="md" onChange={() => { }} />
                                <div className="text-xs text-gray-500 mt-2">Medium</div>
                            </div>
                            <div className="text-center">
                                <ColorPicker value="#8b5cf6" size="lg" onChange={() => { }} />
                                <div className="text-xs text-gray-500 mt-2">Large</div>
                            </div>
                        </div>
                    </div>

                    <CodeBlock
                        code={`import { ColorPicker } from "@akitectio/aki-ui";

export default function ColorPickerSizes() {
  return (
    <div className="flex items-center space-x-6">
      <ColorPicker value="#ef4444" size="sm" onChange={setColor} />
      <ColorPicker value="#22c55e" size="md" onChange={setColor} />
      <ColorPicker value="#8b5cf6" size="lg" onChange={setColor} />
    </div>
  );
}`}
                    />
                </section>

                {/* Custom Preset Colors */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Custom Preset Colors</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <ColorPicker
                            value="#ff6b6b"
                            onChange={() => { }}
                            presetColors={[
                                '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7',
                                '#dda0dd', '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9',
                                '#bae1ff', '#c9baff', '#ffcccb', '#f0e68c', '#e6e6fa'
                            ]}
                        />
                    </div>

                    <CodeBlock
                        code={`import { ColorPicker } from "@akitectio/aki-ui";

export default function CustomPresetColors() {
  const customColors = [
    '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7',
    '#dda0dd', '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9'
  ];

  return (
    <ColorPicker
      value="#ff6b6b"
      onChange={setColor}
      presetColors={customColors}
    />
  );
}`}
                    />
                </section>

                {/* Without Preset Colors */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Without Preset Colors</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <ColorPicker
                            value="#2563eb"
                            onChange={() => { }}
                            showPresets={false}
                            placeholder="Select custom color"
                        />
                    </div>

                    <CodeBlock
                        code={`import { ColorPicker } from "@akitectio/aki-ui";

export default function NoPresets() {
  return (
    <ColorPicker
      value="#2563eb"
      onChange={setColor}
      showPresets={false}
      placeholder="Select custom color"
    />
  );
}`}
                    />
                </section>

                {/* Disabled State */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Disabled State</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <div className="space-y-4">
                            <ColorPicker
                                value="#6b7280"
                                disabled
                                placeholder="Cannot select color"
                                onChange={() => { }}
                            />
                            <div className="text-sm text-gray-500">
                                ColorPicker is disabled
                            </div>
                        </div>
                    </div>

                    <CodeBlock
                        code={`import { ColorPicker } from "@akitectio/aki-ui";

export default function DisabledColorPicker() {
  return (
    <ColorPicker
      value="#6b7280"
      disabled
      placeholder="Cannot select color"
      onChange={setColor}
    />
  );
}`}
                    />
                </section>

                {/* Multiple ColorPickers */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Multiple ColorPickers</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Primary Color
                                    </label>
                                    <ColorPicker
                                        value={primaryColor}
                                        onChange={setPrimaryColor}
                                        placeholder="Select primary color"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Secondary Color
                                    </label>
                                    <ColorPicker
                                        value={secondaryColor}
                                        onChange={setSecondaryColor}
                                        placeholder="Select secondary color"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Accent Color
                                    </label>
                                    <ColorPicker
                                        value={accentColor}
                                        onChange={setAccentColor}
                                        placeholder="Select accent color"
                                    />
                                </div>
                            </div>

                            <div className="p-4 rounded-lg border-2 space-y-2" style={{ borderColor: primaryColor }}>
                                <h3 className="font-semibold" style={{ color: primaryColor }}>
                                    Preview Theme Colors
                                </h3>
                                <div className="flex space-x-2">
                                    <div
                                        className="w-8 h-8 rounded"
                                        style={{ backgroundColor: primaryColor }}
                                        title={`Primary: ${primaryColor}`}
                                    />
                                    <div
                                        className="w-8 h-8 rounded"
                                        style={{ backgroundColor: secondaryColor }}
                                        title={`Secondary: ${secondaryColor}`}
                                    />
                                    <div
                                        className="w-8 h-8 rounded"
                                        style={{ backgroundColor: accentColor }}
                                        title={`Accent: ${accentColor}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <CodeBlock
                        code={`import { ColorPicker } from "@akitectio/aki-ui";
import { useState } from "react";

export default function MultipleColorPickers() {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [secondaryColor, setSecondaryColor] = useState('#10b981');
  const [accentColor, setAccentColor] = useState('#f59e0b');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Color
          </label>
          <ColorPicker
            value={primaryColor}
            onChange={setPrimaryColor}
            placeholder="Select primary color"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Secondary Color
          </label>
          <ColorPicker
            value={secondaryColor}
            onChange={setSecondaryColor}
            placeholder="Select secondary color"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Accent Color
          </label>
          <ColorPicker
            value={accentColor}
            onChange={setAccentColor}
            placeholder="Select accent color"
          />
        </div>
      </div>

      <div className="p-4 rounded-lg border-2 space-y-2" style={{ borderColor: primaryColor }}>
        <h3 className="font-semibold" style={{ color: primaryColor }}>
          Preview Theme Colors
        </h3>
        <div className="flex space-x-2">
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: primaryColor }}
            title={\`Primary: \${primaryColor}\`}
          />
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: secondaryColor }}
            title={\`Secondary: \${secondaryColor}\`}
          />
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: accentColor }}
            title={\`Accent: \${accentColor}\`}
          />
        </div>
      </div>
    </div>
  );
}`}
                    />
                </section>

                {/* API Reference */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="border border-gray-200 px-4 py-2 text-left">Prop</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Type</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Default</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">value</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">string</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'#3b82f6'</td>
                                    <td className="border border-gray-200 px-4 py-2">Current color value in hex format</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">onChange</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">(color: string) =&gt; void</td>
                                    <td className="border border-gray-200 px-4 py-2">-</td>
                                    <td className="border border-gray-200 px-4 py-2">Callback when color changes</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">disabled</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">boolean</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">false</td>
                                    <td className="border border-gray-200 px-4 py-2">Whether the component is disabled</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">className</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">string</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">''</td>
                                    <td className="border border-gray-200 px-4 py-2">Additional CSS classes</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">placeholder</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">string</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'Select color'</td>
                                    <td className="border border-gray-200 px-4 py-2">Placeholder text for the button</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">presetColors</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">string[]</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">DEFAULT_PRESET_COLORS</td>
                                    <td className="border border-gray-200 px-4 py-2">Array of preset color values</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">showPresets</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">boolean</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">true</td>
                                    <td className="border border-gray-200 px-4 py-2">Whether to show preset colors</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">size</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'sm' | 'md' | 'lg'</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'md'</td>
                                    <td className="border border-gray-200 px-4 py-2">Size of the color picker button</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">labels</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">object</td>
                                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">{ }</td>
                                    <td className="border border-gray-200 px-4 py-2">Custom labels for internationalization</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Labels Object Structure */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3">Labels Object Structure</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <CodeBlock
                                code={`interface Labels {
  customColor?: string;        // Default: "Custom Color"
  presetColors?: string;       // Default: "Preset Colors"
  invalidHexMessage?: string;  // Default: "Please enter a valid hex color (e.g., #FF0000)"
  selectColor?: string;        // Default: "Select color"
  cancel?: string;             // Default: "Cancel"
  select?: string;             // Default: "Select"
}`}
                            />
                        </div>
                    </div>
                </section>

                {/* Internationalization Example */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Internationalization</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border mb-4">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-gray-800 mb-2">Vietnamese Language Example</h3>
                            <ColorPicker
                                value="#e11d48"
                                onChange={() => { }}
                                placeholder="Chọn màu"
                                labels={{
                                    customColor: 'Màu tùy chỉnh',
                                    presetColors: 'Màu có sẵn',
                                    invalidHexMessage: 'Vui lòng nhập mã màu hex hợp lệ (ví dụ: #FF0000)',
                                    selectColor: 'Chọn màu',
                                    cancel: 'Hủy',
                                    select: 'Chọn',
                                }}
                            />
                        </div>
                    </div>

                    <CodeBlock
                        code={`import { ColorPicker } from "@akitectio/aki-ui";

export default function VietnameseColorPicker() {
  const [color, setColor] = useState('#e11d48');

  return (
    <ColorPicker
      value={color}
      onChange={setColor}
      placeholder="Chọn màu"
      labels={{
        customColor: 'Màu tùy chỉnh',
        presetColors: 'Màu có sẵn',
        invalidHexMessage: 'Vui lòng nhập mã màu hex hợp lệ (ví dụ: #FF0000)',
        selectColor: 'Chọn màu',
        cancel: 'Hủy',
        select: 'Chọn',
      }}
    />
  );
}`}
                    />

                    <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-medium text-blue-900 mb-1">Internationalization Support</h4>
                                <p className="text-blue-800 text-sm">
                                    The ColorPicker component now supports custom labels for different languages.
                                    You can customize all text displayed in the component interface by providing
                                    a <code className="bg-blue-100 px-1 rounded">labels</code> object with your preferred translations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Features</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border">
                        <ul className="space-y-2 text-gray-700">
                            <li>• <strong>Preset Colors:</strong> Quick selection from predefined color palette</li>
                            <li>• <strong>Custom Color:</strong> Select any color using color picker or hex input</li>
                            <li>• <strong>Multiple Sizes:</strong> Support for small, medium, and large sizes</li>
                            <li>• <strong>Validation:</strong> Validates hex color format</li>
                            <li>• <strong>Internationalization:</strong> Customizable labels for different languages</li>
                            <li>• <strong>Accessible:</strong> Keyboard navigation and screen reader support</li>
                            <li>• <strong>Responsive:</strong> Adapts to different screen sizes</li>
                            <li>• <strong>TypeScript:</strong> Full TypeScript support with proper types</li>
                        </ul>
                    </div>
                </section>
            </div>
        </PageHeader>
    )
}
