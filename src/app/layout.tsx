import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { SoundProvider } from "@/context/SoundContext";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

export const metadata: Metadata = {
    metadataBase: new URL('https://hazem.vip'),
    title: {
        default: "Hazem Yasser | Full-Stack Developer & 3D Web Creative",
        template: "%s | Hazem Yasser"
    },
    description: "Full-Stack Developer Specializing in high-performance web applications and immersive 3D experiences. Transforming complex logic into stunning digital worlds.",
    keywords: ["Full-Stack Developer", "Next.js", "React", "3D Web", "Three.js", "Creative Developer", "Hazem Yasser", "Portfolio"],
    authors: [{ name: "Hazem Yasser" }],
    creator: "Hazem Yasser",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://hazem.vip",
        siteName: "Hazem Yasser Portfolio",
        title: "Hazem Yasser | Full-Stack Developer & 3D Web Creative",
        description: "Transforming complex logic into stunning digital worlds with React, Next.js, and Three.js.",
        images: [
            {
                url: "/og-image.jpg", // Make sure to add this image to your public folder!
                width: 1200,
                height: 630,
                alt: "Hazem Yasser Portfolio Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hazem Yasser | Full-Stack Developer",
        description: "Full-Stack Developer & 3D Web Creative. Specializing in high-performance web applications.",
        creator: "@HazemYa23091301",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
                suppressHydrationWarning
            >
                <SoundProvider>
                    <CustomCursor />
                    <SmoothScroll>
                        <Navbar />
                        {children}
                        <Footer />
                    </SmoothScroll>
                </SoundProvider>
            </body>
        </html>
    );
}
