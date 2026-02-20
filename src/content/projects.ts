export interface Project {
    slug: string;
    title: string;
    description: string;
    fullDescription: string;
    category: string;
    tags: string[];
    github?: string;
    demo?: string;
    image?: string;
    highlights: string[];
    technicalDetails: {
        frontend: string[];
        backend: string[];
        other?: string[];
    };
}

export const projects: Project[] = [
    {
        slug: "personal-brand",
        title: "Mostafa Yasser Brand",
        category: "Full-Stack / NextJS",
        description: "A high-conversion personal branding website.",
        fullDescription: "A fully custom personal branding site designed for a professional consultant. It focuses on lead generation, appointment booking, and content delivery through a seamless bilingual interface.",
        tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
        demo: "https://www.mostafayasser.com/",
        highlights: [
            "Custom booking system integration",
            "Premium dark-mode aesthetic",
            "Bilingual SEO optimization",
            "High performance Core Web Vitals score"
        ],
        technicalDetails: {
            frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
            backend: ["Vercel Edge Functions", "Google Calendar API"],
            other: ["Mailchimp Integration"]
        }
    },
    {
        slug: "interactive-galaxy",
        title: "Interactive Galaxy",
        category: "3D Web / ThreeJS",
        description: "An immersive 3D experience exploring the cosmos using WebGL.",
        fullDescription: "A high-performance 3D visualization of a spiral galaxy. This project pushes the boundaries of web-based graphics using procedural generation to create thousands of unique stars and celestial bodies.",
        tags: ["Three.js", "WebGL", "React Three Fiber", "GLSL"],
        demo: "https://webgl-3d-galaxy.netlify.app/",
        highlights: [
            "Custom GLSL shaders for star rendering",
            "Procedural generation of 50,000+ points",
            "Interactive camera controls and spatial audio",
            "Optimized for 60FPS on mobile and desktop"
        ],
        technicalDetails: {
            frontend: ["React Three Fiber", "Three.js", "Drei", "GLSL Shaders"],
            backend: ["Static Hosting"],
            other: ["Performance Profiling", "Math-heavy procedural logic"]
        }
    },
    {
        slug: "notion-arabs",
        title: "Notion Arabs",
        category: "Full-Stack / NextJS",
        description: "The largest Arabic community platform for Notion users.",
        fullDescription: "Notion Arabs is a comprehensive ecosystem designed for the Arabic-speaking Notion community. It features a resource marketplace, templates directory, and a learning hub. The platform bridges the gap between Arabic users and powerful productivity tools.",
        tags: ["Next.js", "Notion API", "Tailwind CSS", "Node.js"],
        github: "https://github.com/hazemyasserprg",
        demo: "https://notionarabs.com",
        highlights: [
            "Real-time resource syncing with Notion API",
            "Multilingual support (Arabic/English)",
            "Automated template deployment system",
            "SEO optimized for Arabic search queries"
        ],
        technicalDetails: {
            frontend: ["Next.js App Router", "Server Components", "Tailwind CSS", "Framer Motion"],
            backend: ["Node.js", "Express", "Notion SDK", "Redis for caching"],
            other: ["Vercel Deployment", "GitHub Actions for CI/CD"]
        }
    },
    {
        slug: "haunted-house",
        title: "3D Haunted House",
        category: "3D Web / ThreeJS",
        description: "A spooky, interactive 3D environment built with Three.js.",
        fullDescription: "An atmospheric exploration game set in a haunted graveyard. This project demonstrates advanced lighting techniques, shadow mapping, and complex geometry placement in a web-based 3D engine.",
        tags: ["Three.js", "JavaScript", "Cannon.js"],
        demo: "https://webgl-haunted-house.netlify.app/",
        highlights: [
            "Advanced shadow and fog effects",
            "Procedural placement of graveyard assets",
            "Interactive light and particle systems",
            "Realistic textures and PBR materials"
        ],
        technicalDetails: {
            frontend: ["Vanilla Three.js", "Orbit Controls", "Custom Shaders"],
            backend: ["Static Hosting"],
            other: ["Optimization for low-end devices"]
        }
    },
    {
        slug: "yuyan-academy",
        title: "Yuyan Academy",
        category: "Full-Stack / NextJS",
        description: "A professional E-learning platform for language mastering.",
        fullDescription: "Yuyan Academy is a feature-rich educational platform that provides structured language courses. It includes student dashboards, progress tracking, and an integrated payment system.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
        demo: "https://yuyanacademy.com",
        highlights: [
            "Dynamic course progress tracking",
            "Integrated secure authentication system",
            "Custom video player with progress persistence",
            "Admin dashboard for content management"
        ],
        technicalDetails: {
            frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
            backend: ["Node.js", "PostgreSQL", "Prisma ORM", "NextAuth.js"],
            other: ["Cloudinary for media", "Stripe Integration"]
        }
    },
    {
        slug: "3d-text-effects",
        title: "3D Text Effects",
        category: "3D Web / ThreeJS",
        description: "Creative typography rendered in 3D space.",
        fullDescription: "An experimental project focused on the intersections of typography and 3D graphics. User can interact with floating letters and see how light interacts with custom-modeled type.",
        tags: ["Three.js", "Tessellation", "Interaction Design"],
        demo: "https://webgl-3d-text.netlify.app/",
        highlights: [
            "Dynamic font tessellation in real-time",
            "Mouse-reactive physics on floating text",
            "High-gloss material experiments",
            "Optimized geometry rendering"
        ],
        technicalDetails: {
            frontend: ["Three.js", "FontLoader", "TextGeometry"],
            backend: ["Static Hosting"],
            other: ["SVG to 3D Extrusion pipelines"]
        }
    },
    {
        slug: "moawya-portfolio",
        title: "Moawya | Video Editor",
        category: "Web Design / Framer",
        description: "A stunning video editing portfolio showcasing creative work, built with Framer.",
        fullDescription: "This project is a dynamic, high-performance portfolio website built using Framer for Moawya, a professional video editor. It features smooth animations, responsive design, and an engaging user interface that highlights storytelling and content creation capabilities.",
        tags: ["Framer", "Web Design", "Animation", "UI/UX"],
        demo: "https://moawya.framer.website/",
        highlights: [
            "Seamless page transitions and scrolling effects",
            "Fully responsive design across all devices",
            "Modern, clean, and media-focused user interface",
            "Optimized performance for high-quality video content"
        ],
        technicalDetails: {
            frontend: ["Framer", "React", "CSS Variables"],
            backend: ["Framer CMS", "Framer Hosting"],
            other: ["Custom Animations", "Responsive Breakpoints"]
        }
    }
];
