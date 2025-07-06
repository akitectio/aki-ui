'use client'

import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

interface BlockHeaderProps {
    title: string
    backUrl?: string
    backLabel?: string
}

export default function BlockHeader({
    title,
    backUrl = '/blocks',
    backLabel = 'Back to Blocks'
}: BlockHeaderProps) {

    return (
        <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <nav className="flex items-center space-x-4" aria-label="Breadcrumb">
                        <Link
                            href={backUrl}
                            className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            aria-label={backLabel}
                        >
                            <ArrowLeftIcon className="w-5 h-5" />
                            <span>{backLabel}</span>
                        </Link>
                        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" role="separator"></div>
                        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h1>
                    </nav>
                </div>
            </div>
        </header>
    )
}
