import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/layout/stack");

export default function StackLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
