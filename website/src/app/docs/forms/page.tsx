'use client'

import Link from 'next/link'
import { Button, Card } from '@akitectio/aki-ui'
import { PageHeader } from '@/components/PageHeader'
import { 
  DocumentTextIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

const formComponents = [
  {
    id: 'form-control',
    title: 'Form Control',
    description: 'Build accessible and styled form controls with validation support.',
    href: '/docs/forms/form-control',
    icon: DocumentTextIcon
  },
  {
    id: 'validation',
    title: 'Validation',
    description: 'Client-side and server-side validation patterns for robust forms.',
    href: '/docs/forms/validation',
    icon: CheckCircleIcon
  }
]

export default function FormsPage() {
  return (
    <PageHeader
      title="Forms"
      description="Build accessible and user-friendly forms with Aki UI components."
    >
      <div className="space-y-8">
        <section>
          <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-start space-x-4">
              <ExclamationTriangleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-100">
                  Form Best Practices
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-4">
                  Aki UI form components are built with accessibility and user experience in mind. 
                  Follow our patterns for validation, error handling, and responsive design.
                </p>
                <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                  <li>• Always provide clear labels and helpful error messages</li>
                  <li>• Use proper HTML form semantics for screen readers</li>
                  <li>• Implement both client-side and server-side validation</li>
                  <li>• Consider mobile-first responsive design</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Form Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {formComponents.map((component) => {
              const Icon = component.icon
              return (
                <Link key={component.id} href={component.href}>
                  <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer group border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                    <div className="flex items-start space-x-4">
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {component.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {component.description}
                        </p>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm">
                          View documentation
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Related Components</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/docs/components/input">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer group border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                <h3 className="font-medium mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Input
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Text inputs, passwords, and more
                </p>
              </Card>
            </Link>
            <Link href="/docs/components/checkbox">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer group border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                <h3 className="font-medium mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Checkbox
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Checkboxes and checkbox groups
                </p>
              </Card>
            </Link>
            <Link href="/docs/components/radio">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer group border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                <h3 className="font-medium mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Radio
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Radio buttons and radio groups
                </p>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </PageHeader>
  )
}
