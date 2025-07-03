import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Navbar Component - Aki UI',
    description: 'Navigation bar component with branding, menu items, and actions for responsive web applications.',
    keywords: ['navbar', 'navigation', 'menu', 'header', 'responsive', 'react', 'component'],
    authors: [{ name: 'Aki UI Team' }],
    openGraph: {
        title: 'Navbar Component - Aki UI',
        description: 'Navigation bar component with branding, menu items, and actions for responsive web applications.',
        type: 'website',
    },
}

export default function NavbarLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
