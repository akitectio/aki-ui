import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chatbot Component - Aki UI',
    description: 'AI chatbot interface with customizable rules and responses for interactive user engagement.',
    keywords: ['chatbot', 'ai', 'assistant', 'chat', 'interactive', 'conversation', 'react', 'component'],
    authors: [{ name: 'Aki UI Team' }],
    openGraph: {
        title: 'Chatbot Component - Aki UI',
        description: 'AI chatbot interface with customizable rules and responses for interactive user engagement.',
        type: 'website',
    },
}

export default function ChatbotLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
