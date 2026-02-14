import { MetadataRoute } from 'next'
import { projects } from '@/content/projects'

export default function sitemap(): MetadataRoute.Sitemap {
    const projectUrls = projects.map((project) => ({
        url: `https://hazem.vip/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: 'https://hazem.vip',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://hazem.vip/projects',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://hazem.vip/about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://hazem.vip/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://hazem.vip/privacy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://hazem.vip/terms',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        ...projectUrls,
    ]
}
