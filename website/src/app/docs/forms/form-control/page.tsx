'use client'

import { useState } from 'react'
import { Button, Card, Alert, Badge } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'
import { 
  DocumentTextIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ClipboardDocumentIcon
} from '@heroicons/react/24/outline'

export default function FormControlPage() {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStates(prev => ({ ...prev, [key]: true }))
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }))
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const basicFormExample = `import { FormControl, Input, Button } from '@akitectio/aki-ui'

function BasicForm() {
  return (
    <form className="space-y-4">
      <FormControl>
        <FormControl.Label>Email Address</FormControl.Label>
        <Input 
          type="email" 
          placeholder="Enter your email"
          required
        />
        <FormControl.HelperText>
          We'll never share your email with anyone else.
        </FormControl.HelperText>
      </FormControl>
      
      <FormControl>
        <FormControl.Label>Password</FormControl.Label>
        <Input 
          type="password" 
          placeholder="Enter password"
          required
        />
      </FormControl>
      
      <Button type="submit">Submit</Button>
    </form>
  )
}`

  const validationExample = `import { FormControl, Input, Button } from '@akitectio/aki-ui'
import { useState } from 'react'

function ValidatedForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'email':
        return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value) 
          ? '' : 'Please enter a valid email address'
      case 'password':
        return value.length >= 8 
          ? '' : 'Password must be at least 8 characters'
      default:
        return ''
    }
  }

  return (
    <form className="space-y-4">
      <FormControl isInvalid={!!errors.email}>
        <FormControl.Label>Email Address</FormControl.Label>
        <Input 
          type="email" 
          name="email"
          onChange={(e) => {
            const error = validateField('email', e.target.value)
            setErrors(prev => ({ ...prev, email: error }))
          }}
        />
        {errors.email && (
          <FormControl.ErrorMessage>
            {errors.email}
          </FormControl.ErrorMessage>
        )}
      </FormControl>
      
      <FormControl isInvalid={!!errors.password}>
        <FormControl.Label>Password</FormControl.Label>
        <Input 
          type="password" 
          name="password"
          onChange={(e) => {
            const error = validateField('password', e.target.value)
            setErrors(prev => ({ ...prev, password: error }))
          }}
        />
        {errors.password && (
          <FormControl.ErrorMessage>
            {errors.password}
          </FormControl.ErrorMessage>
        )}
      </FormControl>
    </form>
  )
}`

  return (
    <PageHeader
      title="Form Control"
      description="Build accessible and styled form controls with proper labeling and validation states."
    >
      <div className="space-y-8">
        {/* Overview */}
        <section>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              FormControl provides a consistent way to build form fields with proper accessibility, 
              labeling, help text, and error states. It automatically manages ARIA attributes and 
              ensures screen readers can understand the form structure.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Accessible</Badge>
              <Badge variant="secondary">ARIA Support</Badge>
              <Badge variant="secondary">Validation Ready</Badge>
              <Badge variant="secondary">TypeScript</Badge>
            </div>
          </Card>
        </section>

        {/* Basic Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
          <Card className="p-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Simple Form Control</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(basicFormExample, 'basic')}
                >
                  <ClipboardDocumentIcon className="w-4 h-4 mr-2" />
                  {copiedStates.basic ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The most basic form control with label and helper text.
              </p>
            </div>
            <CodeBlock
              language="tsx"
              code={basicFormExample}
            />
          </Card>
        </section>

        {/* Validation States */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Validation States</h2>
          <Card className="p-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Form Validation</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(validationExample, 'validation')}
                >
                  <ClipboardDocumentIcon className="w-4 h-4 mr-2" />
                  {copiedStates.validation ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Handle validation states with error messages and visual feedback.
              </p>
            </div>
            <CodeBlock
              language="tsx"
              code={validationExample}
            />
          </Card>
        </section>

        {/* API Reference */}
        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">FormControl Props</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Prop
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Default
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-100">
                        isRequired
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        boolean
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        false
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                        Whether the field is required
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-100">
                        isInvalid
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        boolean
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        false
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                        Whether the field has validation errors
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-100">
                        isDisabled
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        boolean
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        false
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                        Whether the field is disabled
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Subcomponents</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">FormControl.Label</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Accessible label for the form control. Automatically links to the input field.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">FormControl.HelperText</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Additional help text to guide users. Appears below the input field.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">FormControl.ErrorMessage</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Error message displayed when validation fails. Automatically styled with error colors.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Do</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Always provide clear, descriptive labels</li>
                    <li>• Use helper text for additional context</li>
                    <li>• Implement real-time validation feedback</li>
                    <li>• Group related fields logically</li>
                    <li>• Test with screen readers</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start space-x-3">
                <ExclamationCircleIcon className="w-6 h-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-red-800 dark:text-red-200">Don't</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Use placeholder text as labels</li>
                    <li>• Hide important validation messages</li>
                    <li>• Make error messages too technical</li>
                    <li>• Disable form submission unnecessarily</li>
                    <li>• Forget to handle loading states</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </PageHeader>
  )
}
