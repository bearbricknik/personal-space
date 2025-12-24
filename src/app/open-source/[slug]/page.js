

import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { GradientBg3 } from '@/components/gradient-bg'
import fs from 'fs'
import path from 'path'

// Static imports for webpack to analyze
import PressableButton from '@/content/open-source/pressable-button.mdx'

// Mapping of slugs to MDX components
const contentMap = {
    'pressable-button': PressableButton,
}

// Add force-static rendering
export const dynamic = 'force-static'
export const dynamicParams = false

// Generate static params at build time
export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'src/content/open-source')
    const files = fs.readdirSync(postsDirectory)

    const filteredAndMapped = files
        .filter(file => file.endsWith('.mdx'))
        .map(file => ({
            slug: file.replace(/\.mdx$/, '')
        }))

    return filteredAndMapped
}

export default async function OS({ params }) {
    const { slug } = params

    const Content = contentMap[slug]

    if (!Content) {
        return <div>Content not found</div>
    }

    return (
        <ScrollArea useScrollAreaId>
            <GradientBg3 />
            <FloatingHeader scrollTitle="Open Source" />
            <div className="content-wrapper">
                <div className="content">
                    <Content />
                </div>
            </div>
        </ScrollArea>
    )
}