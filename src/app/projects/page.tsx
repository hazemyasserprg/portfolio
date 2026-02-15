import { Metadata } from "next";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore a curated collection of full-stack applications, 3D experiments, and digital brand experiences from Hazem Yasser's portfolio.",
};

export default function ProjectsPage() {
    return <ProjectsClient />;
}
