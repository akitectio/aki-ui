import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/progress");

export default function ProgressLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
