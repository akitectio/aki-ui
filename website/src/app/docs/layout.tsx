import type { Metadata } from 'next'
import { DocsLayoutClient } from '@/components/DocsLayoutClient'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Complete documentation for Aki UI React component library including guides, examples, and API references.',
  openGraph: {
    title: 'Aki UI Documentation',
    description: 'Complete documentation for Aki UI React component library including guides, examples, and API references.',
  },
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DocsLayoutClient>{children}</DocsLayoutClient>
}
