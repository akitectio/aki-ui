'use client'

import { usePathname } from 'next/navigation'
import { Breadcrumb } from '@/components/Breadcrumb'
import { getBreadcrumbsForPath } from '@/utils/breadcrumb'

interface DocsPageWrapperProps {
    children: React.ReactNode
}

export function DocsPageWrapper({ children }: DocsPageWrapperProps) {
    const pathname = usePathname()
    const breadcrumbItems = getBreadcrumbsForPath(pathname || '')

    // Only show breadcrumb if we have items and we're in docs section
    const shouldShowBreadcrumb = breadcrumbItems.length > 0 && pathname?.startsWith('/docs')

    return (
        <>
            {shouldShowBreadcrumb && (
                <Breadcrumb items={breadcrumbItems} className="mb-6" />
            )}
            {children}
        </>
    )
}
