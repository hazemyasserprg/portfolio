import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GalaxyBackground from "@/components/GalaxyBackground";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <GalaxyBackground />
            <h1 className="text-9xl font-bold text-white/10 absolute -z-10">404</h1>
            <h2 className="text-4xl font-bold mb-4">Lost in Space</h2>
            <p className="text-neutral-400 mb-8 max-w-md">
                The page you are looking for has drifted into a black hole or never existed in this dimension.
            </p>
            <Link
                href="/"
                className="premium-button flex items-center gap-2"
            >
                <ArrowLeft size={18} /> Back to Reality
            </Link>
        </div>
    );
}
