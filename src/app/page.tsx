import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
    title: "Hazem Yasser | Full-Stack Developer & 3D Web Creative",
    description: "Full-Stack Developer Specializing in high-performance web applications and immersive 3D experiences. Transforming complex logic into stunning digital worlds.",
};

export default function Home() {
    return <HomeClient />;
}
