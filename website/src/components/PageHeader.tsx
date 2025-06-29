import { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  description?: string
  children: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>
        )}
      </header>
      {children}
    </div>
  )
}
