import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/colorpicker");

export default function ColorPickerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
