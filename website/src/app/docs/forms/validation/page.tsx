'use client'

import { useState } from 'react'
import { Button, Card, Alert, Badge } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { CodeBlock } from '@/components/CodeBlock'
import { 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  ClipboardDocumentIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function ValidationPage() {
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

  const clientValidationExample = `import { useState } from 'react'
import { FormControl, Input, Button } from '@akitectio/aki-ui'

function ClientValidationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validators = {
    email: (value: string) => {
      if (!value) return 'Email is required'
      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
        return 'Please enter a valid email address'
      }
      return ''
    },
    password: (value: string) => {
      if (!value) return 'Password is required'
      if (value.length < 8) return 'Password must be at least 8 characters'
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/.test(value)) {
        return 'Password must contain uppercase, lowercase, and number'
      }
      return ''
    },
    confirmPassword: (value: string) => {
      if (!value) return 'Please confirm your password'
      if (value !== formData.password) return 'Passwords do not match'
      return ''
    }
  }

  const validateField = (name: string, value: string) => {
    const validator = validators[name as keyof typeof validators]
    return validator ? validator(value) : ''
  }

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, formData[name as keyof typeof formData])
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors: Record<string, string> = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) newErrors[key] = error
    })
    
    setErrors(newErrors)
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}))
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit data
      console.log('Form submitted:', formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormControl isInvalid={touched.email && !!errors.email}>
        <FormControl.Label>Email Address</FormControl.Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
        />
        {touched.email && errors.email && (
          <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={touched.password && !!errors.password}>
        <FormControl.Label>Password</FormControl.Label>
        <Input
          type="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          onBlur={() => handleBlur('password')}
        />
        {touched.password && errors.password && (
          <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={touched.confirmPassword && !!errors.confirmPassword}>
        <FormControl.Label>Confirm Password</FormControl.Label>
        <Input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
          onBlur={() => handleBlur('confirmPassword')}
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <FormControl.ErrorMessage>{errors.confirmPassword}</FormControl.ErrorMessage>
        )}
      </FormControl>

      <Button 
        type="submit" 
        disabled={Object.keys(errors).some(key => errors[key])}
      >
        Create Account
      </Button>
    </form>
  )
}`

  const serverValidationExample = `import { useState } from 'react'
import { FormControl, Input, Button, Alert } from '@akitectio/aki-ui'

function ServerValidationForm() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [serverError, setServerError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setServerError('')
    setErrors({})

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        if (result.fieldErrors) {
          // Field-specific errors from server
          setErrors(result.fieldErrors)
        } else {
          // General server error
          setServerError(result.message || 'An error occurred')
        }
      } else {
        // Success
        console.log('Login successful:', result)
      }
    } catch (error) {
      setServerError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {serverError && (
        <Alert variant="destructive">
          <ExclamationCircleIcon className="w-4 h-4" />
          {serverError}
        </Alert>
      )}

      <FormControl isInvalid={!!errors.email}>
        <FormControl.Label>Email Address</FormControl.Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          disabled={isSubmitting}
        />
        {errors.email && (
          <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <FormControl.Label>Password</FormControl.Label>
        <Input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          disabled={isSubmitting}
        />
        {errors.password && (
          <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
        )}
      </FormControl>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Signing In...' : 'Sign In'}
      </Button>
    </form>
  )
}`

  const zodValidationExample = `import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormControl, Input, Button } from '@akitectio/aki-ui'

const registrationSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/(?=.*[a-z])/, 'Password must contain a lowercase letter')
    .regex(/(?=.*[A-Z])/, 'Password must contain an uppercase letter')
    .regex(/(?=.*\\d)/, 'Password must contain a number'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

type RegistrationData = z.infer<typeof registrationSchema>

function ZodValidationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema)
  })

  const onSubmit = async (data: RegistrationData) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        console.log('Registration successful')
      }
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormControl isInvalid={!!errors.email}>
        <FormControl.Label>Email Address</FormControl.Label>
        <Input
          type="email"
          {...register('email')}
        />
        {errors.email && (
          <FormControl.ErrorMessage>{errors.email.message}</FormControl.ErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <FormControl.Label>Password</FormControl.Label>
        <Input
          type="password"
          {...register('password')}
        />
        {errors.password && (
          <FormControl.ErrorMessage>{errors.password.message}</FormControl.ErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors.confirmPassword}>
        <FormControl.Label>Confirm Password</FormControl.Label>
        <Input
          type="password"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <FormControl.ErrorMessage>{errors.confirmPassword.message}</FormControl.ErrorMessage>
        )}
      </FormControl>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </Button>
    </form>
  )
}`

  return (
    <PageHeader
      title="Form Validation"
      description="Implement robust client-side and server-side validation for better user experience and data integrity."
    >
      <div className="space-y-8">
        {/* Overview */}
        <section>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Proper form validation is crucial for user experience and data integrity. Aki UI provides 
              flexible validation patterns that work with popular libraries like React Hook Form, Formik, 
              and custom validation logic.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Client-side</Badge>
              <Badge variant="secondary">Server-side</Badge>
              <Badge variant="secondary">Real-time</Badge>
              <Badge variant="secondary">Accessible</Badge>
            </div>
          </Card>
        </section>

        {/* Validation Types */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Validation Approaches</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center mb-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400 mr-2" />
                <h3 className="font-semibold">Client-side</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Immediate feedback as users type or interact with form fields.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Real-time validation</li>
                <li>• Better UX</li>
                <li>• Reduced server load</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-3">
                <ShieldCheckIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="font-semibold">Server-side</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Authoritative validation on the server for security and data integrity.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Security enforcement</li>
                <li>• Business rule validation</li>
                <li>• Database constraints</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-3">
                <ExclamationTriangleIcon className="w-6 h-6 text-orange-600 dark:text-orange-400 mr-2" />
                <h3 className="font-semibold">Progressive</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Show validation messages after user interaction, not immediately.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Less intrusive</li>
                <li>• Better accessibility</li>
                <li>• Contextual feedback</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Client-side Validation */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Client-side Validation</h2>
          <Card className="p-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Custom Validation Logic</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(clientValidationExample, 'client')}
                >
                  <ClipboardDocumentIcon className="w-4 h-4 mr-2" />
                  {copiedStates.client ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Implement real-time validation with custom validators and progressive disclosure.
              </p>
            </div>
            <CodeBlock
              language="tsx"
              code={clientValidationExample}
            />
          </Card>
        </section>

        {/* Server-side Validation */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Server-side Validation</h2>
          <Card className="p-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Handling Server Errors</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(serverValidationExample, 'server')}
                >
                  <ClipboardDocumentIcon className="w-4 h-4 mr-2" />
                  {copiedStates.server ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Handle validation errors from API endpoints and display them appropriately.
              </p>
            </div>
            <CodeBlock
              language="tsx"
              code={serverValidationExample}
            />
          </Card>
        </section>

        {/* Schema Validation */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Schema Validation with Zod</h2>
          <Card className="p-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Type-safe Validation</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(zodValidationExample, 'zod')}
                >
                  <ClipboardDocumentIcon className="w-4 h-4 mr-2" />
                  {copiedStates.zod ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Use Zod with React Hook Form for powerful, type-safe validation schemas.
              </p>
            </div>
            <CodeBlock
              language="tsx"
              code={zodValidationExample}
            />
          </Card>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Validation Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-3 text-green-800 dark:text-green-200">Best Practices</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Validate on blur for better UX</li>
                    <li>• Show success states for completed fields</li>
                    <li>• Use clear, actionable error messages</li>
                    <li>• Implement both client and server validation</li>
                    <li>• Provide inline help for complex requirements</li>
                    <li>• Consider accessibility and screen readers</li>
                    <li>• Test validation with edge cases</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start space-x-3">
                <ExclamationCircleIcon className="w-6 h-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-3 text-red-800 dark:text-red-200">Common Pitfalls</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Validating on every keystroke</li>
                    <li>• Showing errors before user interaction</li>
                    <li>• Using technical error messages</li>
                    <li>• Relying only on client-side validation</li>
                    <li>• Not handling network errors gracefully</li>
                    <li>• Inconsistent validation timing</li>
                    <li>• Poor error message placement</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Libraries Integration */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Popular Libraries</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">React Hook Form</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Performant forms with easy validation and minimal re-renders.
              </p>
              <Badge variant="outline">Recommended</Badge>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Formik</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Popular form library with built-in validation and error handling.
              </p>
              <Badge variant="outline">Supported</Badge>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Zod + RHF</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Type-safe schema validation with React Hook Form integration.
              </p>
              <Badge variant="outline">Type-safe</Badge>
            </Card>
          </div>
        </section>
      </div>
    </PageHeader>
  )
}
