
import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'

export default async function OS() {
    return (
        <ScrollArea useScrollAreaId>
            <GradientBg3 />
            <FloatingHeader scrollTitle="Open Source" />
            <div className="content-wrapper">
                <div className="content">
                    <PageTitle title="Open Source Content" />
                    <p>We soon cooking here some free content meals. Come back later...</p>
                </div>
            </div>
        </ScrollArea>
    )
}