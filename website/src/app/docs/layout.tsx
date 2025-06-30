import type { Metadata } from 'next'
import { DocsLayoutClient } from '@/components/DocsLayoutClient'
import { getPageSEO, generateBreadcrumbStructuredData } from '@/lib/seo'

export const metadata: Metadata = getPageSEO('/docs')

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Documentation', url: '/docs' }
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <DocsLayoutClient>{children}</DocsLayoutClient>
    </>
  )
}
