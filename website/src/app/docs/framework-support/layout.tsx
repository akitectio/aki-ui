import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/framework-support");

export default function FrameworkSupportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
