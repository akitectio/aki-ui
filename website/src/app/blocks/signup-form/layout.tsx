import { getBlockData } from '@/lib/blockDefinitions'
import { generateBlockMetadata, generateBlockJsonLd } from '@/lib/blockSeo'

const blockData = getBlockData('signup-form')!

export const metadata = generateBlockMetadata(blockData)

export default function SignupFormLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const jsonLd = generateBlockJsonLd(blockData)

    return (
        <>
            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    )
}
