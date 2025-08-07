import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO("/docs/components/calendar");

export default function CalendarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
