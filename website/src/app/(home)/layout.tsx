import { getPageSEO } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = getPageSEO('/')

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
