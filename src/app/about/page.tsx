import { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Hazem Yasser, a Full-Stack Developer specializing in 3D web experiences and high-performance applications.",
};

export default function AboutPage() {
    return <AboutClient />;
}
