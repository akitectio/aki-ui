import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/layout/grid");

export default function GridLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
