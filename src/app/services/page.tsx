import { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
    title: "Services",
    description: "Explore professional services including Full-Stack Web Development, Immersive 3D/Three.js Experiences, and Custom Framer Web Design offered by Hazem Yasser.",
};

export default function ServicesPage() {
    return <ServicesClient />;
}
