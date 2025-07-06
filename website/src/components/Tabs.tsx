'use client'

import { useState, useEffect, ReactNode } from 'react'

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
}

export function Tabs({ tabs, defaultTab, className = '', persistKey }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

    // Load saved tab từ localStorage khi component mount
    useEffect(() => {
        if (persistKey && typeof window !== 'undefined') {
            const savedTab = localStorage.getItem(`tab-${persistKey}`)
            if (savedTab && tabs.find(tab => tab.id === savedTab)) {
                setActiveTab(savedTab)
            }
        }
    }, [persistKey, tabs])

    // Lưu tab hiện tại vào localStorage khi tab thay đổi
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId)
        if (persistKey && typeof window !== 'undefined') {
            localStorage.setItem(`tab-${persistKey}`, tabId)
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
