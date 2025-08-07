import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/label");

export default function LabelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
