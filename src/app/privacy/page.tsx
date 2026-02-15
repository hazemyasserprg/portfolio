import { Metadata } from "next";
import PrivacyClient from "@/components/PrivacyClient";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Learn how Hazem Yasser collects, uses, and protects your information when you visit this portfolio website.",
};

export default function PrivacyPage() {
    return <PrivacyClient />;
}
