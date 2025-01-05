

import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'
import fs from 'fs'
import path from 'path'

// Add force-static rendering
export const dynamic = 'force-static'
export const dynamicParams = false

// Generate static params at build time
export async function generateStaticParams() {
    console.log('Hi')
    const postsDirectory = path.join(process.cwd(), 'src/content/open-source')
    console.log('postsDirectory', postsDirectory)
    const files = fs.readdirSync(postsDirectory)
    console.log('files', files)

    const filteredAndMapped = files
        .filter(file => file.endsWith('.mdx'))
        .map(file => ({
            slug: file.replace(/\.mdx$/, '')
        }))

    console.log('filteredAndMapped', filteredAndMapped)

    return filteredAndMapped
}

export default async function OS({ params }) {
    const { slug } = params

    const { default: Content } = await import(`@/content/open-source/${slug}.mdx`)

    return (
        <ScrollArea useScrollAreaId>
            <GradientBg3 />
            <FloatingHeader scrollTitle="Open Source" />
            <div className="content-wrapper">
                <div className="content">
                    <PageTitle title={slug} />
                    <Content />
                </div>
            </div>
        </ScrollArea>
    )
}