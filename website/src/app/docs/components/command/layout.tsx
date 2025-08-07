import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/command");

export default function CommandLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
