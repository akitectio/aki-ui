import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/textarea");

export default function TextareaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
