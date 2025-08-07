import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/toggle");

export default function ToggleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
