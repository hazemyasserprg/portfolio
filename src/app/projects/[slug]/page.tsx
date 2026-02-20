import { projects } from "@/content/projects";
import { notFound } from "next/navigation";
import ProjectContent from "@/components/ProjectContent";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return {};

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            type: "article",
            images: [project.image || "/og-image.jpg"],
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": `https://hazem.vip/projects/${project.slug}`,
        "author": {
            "@type": "Person",
            "name": "Hazem Yasser"
        },
        "image": project.image ? `https://hazem.vip${project.image}` : "https://hazem.vip/og-image.jpg"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <ProjectContent project={project} />
        </>
    );
}
