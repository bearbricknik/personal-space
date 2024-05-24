import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'
import { PlusIcon } from 'lucide-react'
import { JourneyCard } from '@/components/journey-card'


const projects = [
  // {
  //   year: '2021',
  //   logs: [
  //     {
  //       title: 'Started my journey with coding',
  //       description:
  //         'I started my journey with creating browser extensions in plain JavaScript with the great help of my team as I struggled with HTML and CSS at that time.',
  //       image: {
  //         url: 'https://avatars.githubusercontent.com/u/91036480?s=200&v=4',
  //         width: 200,
  //         height: 200,
  //         title: 'Dominik',
  //         description: 'Dominik'
  //       }
  //     }
  //   ]
  // }
]

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
          <p>Coming soon...</p>
          <div className="flex flex-col items-stretch gap-12">
            {projects.map((item, itemIndex) => (
              <div key={`data_${itemIndex}`} className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
                <div className="flex items-center">
                  <h2>{item.year}</h2>
                  <hr className="my-0 ml-4 flex-1 border-dashed border-gray-200" />
                </div>
                <section>
                  {item.logs.map((log, logIndex) => (
                    <div key={`data_${itemIndex}_log_${logIndex}`} className="relative flex pb-8 last:pb-0">
                      {logIndex !== item.logs.length - 1 && (
                        <div className="absolute inset-0 flex w-6 items-center justify-center">
                          <div className="pointer-events-none h-full w-px border-l border-gray-200"></div>
                        </div>
                      )}
                      <div className="z-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-black align-middle text-white">
                        <PlusIcon size={16} />
                      </div>
                      <div className="grow pl-8">
                        <JourneyCard {...log} index={logIndex} />
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
