import type { Metadata } from 'next'
import { DocsLayoutClient } from '@/components/DocsLayoutClient'
import { seoConfigs } from '@/lib/seo'

export const metadata: Metadata = seoConfigs.docs

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DocsLayoutClient>{children}</DocsLayoutClient>
}
