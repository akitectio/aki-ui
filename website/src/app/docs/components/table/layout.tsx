import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/table");

export default function TableLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
