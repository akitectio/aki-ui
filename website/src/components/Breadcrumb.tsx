'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import { generateBreadcrumbStructuredData } from '@/lib/seo'

interface BreadcrumbItem {
  name: string
  href: string
  current?: boolean
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items = [], className = '' }: BreadcrumbProps) {
  // Early return if no items
  if (!items || items.length === 0) {
    return null
  }

  // Generate structured data for SEO
  const structuredData = generateBreadcrumbStructuredData(
    items.map(item => ({ name: item.name, url: item.href }))
  )

  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <nav className={`flex ${className}`} aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-2">
          <li>
            <div>
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                aria-label="Home"
              >
                <HomeIcon className="h-5 w-5 flex-shrink-0" />
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
          
          {items.map((item, index) => (
            <li key={item.href}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                />
                
                {item.current ? (
                  <span
                    className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-200"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="ml-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

// Helper hook to generate breadcrumbs from pathname
export function useBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  
  const breadcrumbs: BreadcrumbItem[] = []
  
  segments.forEach((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const isLast = index === segments.length - 1
    
    // Convert segment to readable name
    let name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    // Special cases for better naming
    if (segment === 'docs') name = 'Documentation'
    if (segment === 'components') name = 'Components'
    
    breadcrumbs.push({
      name,
      href,
      current: isLast,
    })
  })
  
  return breadcrumbs
}
