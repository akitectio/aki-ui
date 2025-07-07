'use client'

import { useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface Tab {
    id: string
    label: string
    content: ReactNode
}

interface TabsProps {
    tabs: Tab[]
    defaultTab?: string
    className?: string
    persistKey?: string // Key để lưu trữ tab state
    useUrlHash?: boolean // Có sử dụng URL hash không
}

export function Tabs({ tabs, defaultTab, className = '', persistKey, useUrlHash = false }: TabsProps) {
    // Initialize with default tab to prevent hydration mismatch
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)
    const [isClient, setIsClient] = useState(false)
    const router = useRouter()

    // Track if we're on the client side to prevent hydration mismatch
    useEffect(() => {
        setIsClient(true)
    }, [])

    // Initialize proper tab selection only on client side
    useEffect(() => {
        if (!isClient) return

        let initialTab = defaultTab || tabs[0]?.id

        // Ưu tiên URL hash nếu useUrlHash = true
        if (useUrlHash && window.location.hash) {
            const hashTab = window.location.hash.replace('#', '')
            if (tabs.find(tab => tab.id === hashTab)) {
                initialTab = hashTab
            }
        }
        // Nếu không có hash, load từ localStorage
        else if (persistKey) {
            const savedTab = localStorage.getItem(`tab-${persistKey}`)
            if (savedTab && tabs.find(tab => tab.id === savedTab)) {
                initialTab = savedTab
                // Nếu useUrlHash = true và không có hash trong URL, cập nhật URL với saved tab
                if (useUrlHash && !window.location.hash) {
                    const newUrl = `${window.location.pathname}${window.location.search}#${savedTab}`
                    window.history.replaceState(null, '', newUrl)
                }
            }
        }

        if (initialTab !== activeTab) {
            setActiveTab(initialTab)
        }
    }, [isClient, persistKey, tabs, defaultTab, useUrlHash, activeTab])

    // Separate effect để lắng nghe sự thay đổi hash từ browser navigation
    useEffect(() => {
        if (!useUrlHash || !isClient) return

        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '')
            if (hash && tabs.find(tab => tab.id === hash)) {
                setActiveTab(hash)
            } else if (!hash) {
                // Nếu hash bị xóa, quay về default tab
                setActiveTab(defaultTab || tabs[0]?.id)
            }
        }

        // Cũng check hash ngay khi component mount
        handleHashChange()

        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [useUrlHash, tabs, defaultTab, isClient])

    // Separate effect để handle popstate (back/forward navigation)
    useEffect(() => {
        if (!useUrlHash || !isClient) return

        const handlePopState = () => {
            const hash = window.location.hash.replace('#', '')
            if (hash && tabs.find(tab => tab.id === hash)) {
                setActiveTab(hash)
            } else if (!hash) {
                setActiveTab(defaultTab || tabs[0]?.id)
            }
        }

        window.addEventListener('popstate', handlePopState)
        return () => window.removeEventListener('popstate', handlePopState)
    }, [useUrlHash, tabs, defaultTab, isClient])

    // Lưu tab hiện tại vào localStorage và cập nhật URL hash
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId)

        if (!isClient) return

        // Lưu vào localStorage
        if (persistKey) {
            localStorage.setItem(`tab-${persistKey}`, tabId)
        }

        // Cập nhật URL hash
        if (useUrlHash) {
            const newUrl = `${window.location.pathname}${window.location.search}#${tabId}`
            window.history.pushState(null, '', newUrl)
        }
    }

    return (
        <div className={className}>
            {/* Tab Headers */}
            <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === tab.id
                                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={activeTab === tab.id ? 'block' : 'hidden'}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    )
}
