'use client'

import BlockTemplate from '@/components/BlockTemplate'

export default function SettingsFormPage() {
    return (
        <BlockTemplate
            title="Settings Form"
            description="A comprehensive user settings form with tabbed sections, profile management, and preference controls. Perfect for user account management interfaces."
            category="Forms"
            features={[
                'Tabbed section organization',
                'Profile picture upload',
                'Password change form',
                'Notification preferences',
                'Privacy settings',
                'Account deletion option',
                'Form auto-save',
                'Success/error feedback'
            ]}
            useCases={[
                'User account pages',
                'Admin settings panels',
                'Application preferences',
                'Profile management',
                'Privacy controls',
                'Notification settings',
                'Security preferences',
                'System configuration'
            ]}
        />
    )
}
