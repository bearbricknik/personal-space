
import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'
import Link from 'next/link'
import { opensource_content_posts } from '../../data/opensource_content_posts'

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
                        {opensource_content_posts.map((content, index) => {

                            return (
                                <div key={index} className={`flex size-full h-40 items-center justify-center overflow-hidden rounded-lg border bg-white transition-all duration-200 hover:scale-102 ${content.href && 'cursor-pointer'}`}>
                                    <Link href={content.href}>
                                        <img
                                            src={content.image.url}
                                            alt={content.image.title || content.image.description}
                                            width={content.image.width}
                                            height={content.image.height}
                                            loading={index < 1 ? 'eager' : 'lazy'}
                                            className="animate-reveal border-none"
                                            // eslint-disable-next-line react/no-unknown-property
                                            nopin="nopin"
                                        />
                                    </Link>
                                </div>
                            )
                        })}
                        {Array.from({ length: 19 }).map((_, index) => {
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