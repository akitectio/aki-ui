import { generateBlockLayout } from '@/lib/blockDefinitions'

const blockSeo = generateBlockLayout('hero-section')
export const metadata = blockSeo?.metadata

export default function BlockLayout({
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
