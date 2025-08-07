import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/dialog");

export default function DialogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
