import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/separator");

export default function SeparatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
