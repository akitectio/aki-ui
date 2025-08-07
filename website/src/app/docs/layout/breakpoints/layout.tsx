import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/layout/breakpoints");

export default function BreakpointsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
