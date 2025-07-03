'use client'

import { useState } from 'react'
// @ts-ignore - Importing directly from package
import { AsyncSelect } from '@/components/client-components'
import { CodeBlock } from '@/components/CodeBlock'
import { PageHeader } from '@/components/PageHeader'

export default function AsyncSelectPage() {
    // All fruit options
    const fruitOptions = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'grape', label: 'Grape' },
        { value: 'kiwi', label: 'Kiwi' },
        { value: 'mango', label: 'Mango' },
        { value: 'pineapple', label: 'Pineapple' }
    ];

    // Function to load options asynchronously
    const loadOptions = async (inputValue: string) => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Return filtered options based on input
        return fruitOptions.filter(option =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    // For basic example
    const [selectedFruit, setSelectedFruit] = useState<string | null>(null);

    // For multi-select demo
    const [selectedFruits, setSelectedFruits] = useState<string[]>(['mango', 'apple', 'banana', 'orange']);

    // For creatable demo
    const [selectedCreatableFruit, setSelectedCreatableFruit] = useState<string | null>(null);

    // Function to load countries for API integration example
    const loadCountries = async (inputValue: string) => {
        if (!inputValue || inputValue.length < 2) return [];

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock countries data
            const countries = [
                { value: 'us', label: 'United States' },
                { value: 'ca', label: 'Canada' },
                { value: 'uk', label: 'United Kingdom' },
                { value: 'fr', label: 'France' },
                { value: 'de', label: 'Germany' },
                { value: 'jp', label: 'Japan' },
                { value: 'au', label: 'Australia' },
                { value: 'br', label: 'Brazil' },
                { value: 'in', label: 'India' },
                { value: 'cn', label: 'China' }
            ];

            return countries.filter(country =>
                country.label.toLowerCase().includes(inputValue.toLowerCase())
            );
        } catch (error) {
            console.error('Failed to load countries:', error);
            return [];
        }
    };

    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    return (
        <PageHeader
            title="AsyncSelect"
            description="Asynchronously load options for a select dropdown, perfect for searching large datasets or remote APIs."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-3xl font-bold mb-4">AsyncSelect</h2>
                    <p className="mb-4">
                        The AsyncSelect component is a powerful dropdown that loads options
                        asynchronously, ideal for searching large datasets or remote APIs. It
                        supports multiple selection, option creation, and customizable loading
                        behavior.
                    </p>

                    <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
                        <h3 className="text-lg font-semibold mb-3">Basic AsyncSelect Example</h3>
                        <div className="w-full max-w-md">
                            {/* @ts-ignore */}
                            <AsyncSelect
                                loadOptions={loadOptions}
                                placeholder="Search for an option"
                                debounceMs={300}
                                defaultOptions={true}
                                cacheOptions={true}
                                value={selectedFruit}
                                onChange={setSelectedFruit}
                            />
                        </div>
                    </div>

                    <CodeBlock
                        code={`import { AsyncSelect } from "@akitectio/aki-ui";

// Define a function that returns a Promise with options
const loadOptions = async (inputValue) => {
  // Simulate API call
  const response = await fetch(\`/api/search?q=\${inputValue}\`);
  const data = await response.json();
  
  // Transform to the format expected by AsyncSelect
  return data.map(item => ({
    value: item.id,
    label: item.name
  }));
};

export default function SearchComponent() {
  return (
    <AsyncSelect
      loadOptions={loadOptions}
      placeholder="Search for an option"
      debounceMs={300}
      defaultOptions={true}
      cacheOptions={true}
    />
  );
}`}
                        language="jsx"
                    />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Multiple Selection</h2>
                    <p className="mb-4">
                        Enable users to select multiple options by setting the{" "}
                        <code>multiple</code> prop to <code>true</code>.
                    </p>

                    <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
                        <h3 className="text-lg font-semibold mb-3">Multi-Select Example</h3>
                        <div className="w-full max-w-md">
                            {/* @ts-ignore */}
                            <AsyncSelect
                                loadOptions={loadOptions}
                                placeholder="Select multiple fruits"
                                multiple={true}
                                value={selectedFruits}
                                onChange={setSelectedFruits}
                                closeMenuOnSelect={false}
                                defaultOptions={true}
                            />
                        </div>
                    </div>

                    <CodeBlock
                        code={`import { useState } from "react";
import { AsyncSelect } from "@akitectio/aki-ui";

export default function MultiSelectExample() {
  const [selectedFruits, setSelectedFruits] = useState([]);

  return (
    <AsyncSelect
      loadOptions={loadFruits}
      placeholder="Select multiple fruits"
      multiple={true}
      value={selectedFruits}
      onChange={setSelectedFruits}
      closeMenuOnSelect={false}
    />
  );
}`}
                        language="jsx"
                    />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Creatable Options</h2>
                    <p className="mb-4">
                        Allow users to create new options on the fly by setting the{" "}
                        <code>creatable</code> prop to <code>true</code>.
                    </p>

                    <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
                        <h3 className="text-lg font-semibold mb-3">Creatable AsyncSelect</h3>
                        <div className="w-full max-w-md">
                            {/* @ts-ignore */}
                            <AsyncSelect
                                loadOptions={loadOptions}
                                placeholder="Type to create a new fruit"
                                creatable={true}
                                createOptionMessage='Create "{inputValue}"'
                                value={selectedCreatableFruit}
                                onChange={setSelectedCreatableFruit}
                                defaultOptions={true}
                            />
                        </div>
                    </div>

                    <CodeBlock
                        code={`import { AsyncSelect } from "@akitectio/aki-ui";

export default function CreatableSelectExample() {
  return (
    <AsyncSelect
      loadOptions={loadFruits}
      placeholder="Type to create a new fruit"
      creatable={true}
      createOptionMessage='Create "{inputValue}"'
    />
  );
}`}
                        language="jsx"
                    />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">API Integration Example</h2>
                    <p className="mb-4">
                        A practical example of integrating AsyncSelect with a real-world API.
                    </p>

                    <div className="mb-6 p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
                        <h3 className="text-lg font-semibold mb-3">Country Selector Example</h3>
                        <div className="w-full max-w-md">
                            {/* @ts-ignore */}
                            <AsyncSelect
                                loadOptions={loadCountries}
                                placeholder="Search for a country (type at least 2 chars)"
                                value={selectedCountry}
                                onChange={setSelectedCountry}
                                debounceMs={300}
                                label="Country"
                                helperText="Start typing a country name"
                            />
                        </div>
                    </div>

                    <CodeBlock
                        code={`import { useState } from "react";
import { AsyncSelect } from "@akitectio/aki-ui";

export default function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Load countries from an API
  const loadCountries = async (inputValue) => {
    try {
      const response = await fetch(
        \`https://restcountries.com/v3.1/name/\${inputValue}\`
      );
      const data = await response.json();
      
      // Transform the API response to SelectOptions
      return data.map(country => ({
        value: country.cca2,
        label: country.name.common
      }));
    } catch (error) {
      console.error("Failed to load countries:", error);
      return [];
    }
  };

  return (
    <AsyncSelect
      loadOptions={loadCountries}
      placeholder="Search for a country"
      value={selectedCountry}
      onChange={setSelectedCountry}
      debounceMs={300}
      label="Country"
      helperText="Start typing a country name"
    />
  );
}`}
                        language="jsx"
                    />
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4">AsyncSelect Props</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-800">
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold dark:border-gray-700">Prop</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold dark:border-gray-700">Type</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold dark:border-gray-700">Default</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold dark:border-gray-700">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>loadOptions</code> *</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>(inputValue: string) =&gt; Promise&lt;SelectOption[]&gt;</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">-</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Function that returns a promise with the options to display based on the input value</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>defaultOptions</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>boolean | SelectOption[]</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>false</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Initial options to display before the user types, or true to call loadOptions with empty string</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>debounceMs</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>number</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>300</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Milliseconds to wait before calling loadOptions after user input</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>cacheOptions</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>boolean</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>false</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Whether to cache previously loaded options</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>multiple</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>boolean</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>false</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Allow multiple options to be selected</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>creatable</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>boolean</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>false</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Allow creating new options not in the loaded options</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>createOptionMessage</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>string</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>"Create "{"{inputValue}"}""</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Message template for creating new options. Use {"{inputValue}"} as placeholder</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>value</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>string | string[] | null</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">-</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">The current value(s) of the select</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>onChange</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>(value: string | string[] | null) =&gt; void</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">-</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Callback fired when the value changes</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>variant</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>"outline" | "filled" | "flushed" | "unstyled"</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>"outline"</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">The visual style of the select</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>size</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>"sm" | "md" | "lg"</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>"md"</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">The size of the select</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>placeholder</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>string</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">-</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Placeholder text when no option is selected</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>label</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>string</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">-</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Label text for the select</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>helperText</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>string</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">-</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Helper text displayed below the select</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>errorMessage</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>string</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">-</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Error message to display when isInvalid is true</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>isInvalid</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>boolean</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>false</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Whether the select is in an error state</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>disabled</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>boolean</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>false</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Whether the select is disabled</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>clearable</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>boolean</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>true</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Whether the select value can be cleared</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>closeMenuOnSelect</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>boolean</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>true (single), false (multiple)</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Whether to close the menu when an option is selected</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>className</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700"><code>string</code></td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">-</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">Additional CSS class for the select container</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </PageHeader>
    );
}
