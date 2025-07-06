import { generateBlockLayout } from '@/lib/blockDefinitions'

const blockSeo = generateBlockLayout('dashboard-01')
export const metadata = blockSeo?.metadata

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    if (!blockSeo) return children

    return (
        <>
            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blockSeo.jsonLd) }}
            />
            {children}
        </>
    )
}
