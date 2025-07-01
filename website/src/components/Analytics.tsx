'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview, isAnalyticsEnabled } from '@/lib/analytics'

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (isAnalyticsEnabled()) {
      const url = pathname + searchParams.toString()
      pageview(url)
    }
  }, [pathname, searchParams])

  return null
}
