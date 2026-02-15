import { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Hazem Yasser for inquiries, collaborations, or just to say hello. Available for new opportunities in full-stack and 3D web development.",
};

export default function ContactPage() {
    return <ContactClient />;
}
