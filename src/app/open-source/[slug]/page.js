

import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'

export default async function OS(params, searchParams) {
    console.log(params)
    console.log(searchParams)

    return (
        <ScrollArea useScrollAreaId>
            <GradientBg3 />
            <FloatingHeader scrollTitle="Open Source" />
            <div className="content-wrapper">
                <div className="content">
                    <PageTitle title={1} />
                    <p>Blog content {JSON.stringify(params)}</p>
                </div>
            </div>
        </ScrollArea>
    )
}