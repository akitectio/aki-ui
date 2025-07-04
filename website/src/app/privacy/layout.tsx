import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | Aki UI',
    description: 'Privacy policy for Aki UI - Learn how we collect, use, and protect your personal information.',
    keywords: ['privacy', 'policy', 'data protection', 'aki ui', 'akitect'],
    openGraph: {
        title: 'Privacy Policy | Aki UI',
        description: 'Privacy policy for Aki UI - Learn how we collect, use, and protect your personal information.',
        type: 'website',
        url: 'https://aki-ui.akitect.io/privacy',
    },
}

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
