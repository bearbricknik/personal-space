
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
                    <p>We soon cooking some free content meals here. Come back later...</p>
                    <div className='grid w-full grid-cols-1 gap-2 md:grid-cols-2'>
                        {Array.from({ length: 20 }).map((_, index) => {
                            return <div className='flex h-40 w-full items-center justify-center rounded-lg border' key={index}>
                                <span className='font-semibold'>coming soon...</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}