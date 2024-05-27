import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'
import { JourneyCard } from '@/components/journey-card'
import { ChevronRight } from 'lucide-react'
import { projects } from '../../data/projects_local'

export default async function Home() {
  return (
    <ScrollArea useScrollAreaId>
      <GradientBg3 />
      <FloatingHeader scrollTitle="Projects" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Projects" />
          <p>
            Throughout the last couple of years I worked on different personal projects with my own software company.
            All of them are linked down below. Do not hesitate to contact me if you have any questions or feedback or if
            you are <span className="font-medium">interested in one of the products</span>.
          </p>
          <div className="flex flex-col items-stretch gap-6">
            {projects.map((item, itemIndex) => (
              <div key={`data_${itemIndex}`} className="flex flex-col items-baseline gap-4">
                <section>
                  {item.logs.map((log, logIndex) => (
                    <div key={`data_${itemIndex}_log_${logIndex}`} className="relative flex pb-8 last:pb-0">
                      {logIndex !== item.logs.length - 1 && (
                        <div className="absolute inset-0 flex w-6 items-center justify-center">
                          <div className="pointer-events-none h-full w-px border-l border-gray-200"></div>
                        </div>
                      )}
                      <div className="z-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-500 align-middle text-white">
                        <ChevronRight size={16} />
                      </div>
                      <div className="grow pl-6">
                        <JourneyCard {...log} index={logIndex} href={log.href} />
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
