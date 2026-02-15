import { Metadata } from "next";
import TermsClient from "@/components/TermsClient";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Read the Terms of Service for Hazem Yasser's portfolio website.",
};

export default function TermsPage() {
    return <TermsClient />;
}
