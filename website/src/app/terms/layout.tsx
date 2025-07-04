import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service | Aki UI',
    description: 'Terms of service for Aki UI - Learn about the terms and conditions for using our UI component library.',
    keywords: ['terms', 'service', 'conditions', 'aki ui', 'akitect'],
    openGraph: {
        title: 'Terms of Service | Aki UI',
        description: 'Terms of service for Aki UI - Learn about the terms and conditions for using our UI component library.',
        type: 'website',
        url: 'https://aki-ui.akitect.io/terms',
    },
}

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
