import { Metadata } from 'next'
import ToastDemoPage from './page'

export const metadata: Metadata = {
    title: 'Toast Demo - Client-side Notifications',
    description: 'A demonstration of the Toast component implementation that works with Next.js Server Components',
}

export default function ToastDemoLayout() {
    return <ToastDemoPage />
}
