import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'
import Link from 'next/link'
import { SatelliteDish } from 'lucide-react'
import { JourneyCard } from '@/components/journey-card'

const recentProjects = [
  {
    project: 'ProfitPath',
    href: 'https://profitpath.app/en',
    logs: [
      {
        title: 'ProfitPath Sourcing Software',
        description: 'ProfitPath sourcing software scans through hundreds of suppliers to find profitpath products for your Amazon Shop. It analyzes historical data, calculates ROI, Margin and another key metrics to help you make the right decision.',
        image: {
          url: '/assets/seo_image.png',
          width: 600,
          height: 600,
          title: 'ProfitPath Seo Image',
          description: 'ProfitPath Seo Image'
        }
      }
    ]
  }
]

export default async function Home() {
  return (
    <ScrollArea useScrollAreaId>
      <GradientBg3 />
      <FloatingHeader scrollTitle="Welcome to my Portfolio" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Welcome to my Portfolio" />
          <p>
            Hi 👋 I'm Dominik, a previous automative & engine student at the University of Stuttgart, Germany. During
            the pandamic I teached myself how to write code and since then I am in various software projects.
          </p>
          <p>
            I started my journey with creating browser extensions in plain JavaScript with the great help of my team as
            I struggled with HTML and CSS at that time. I then moved on to do scraping projects with Python and NodeJS.
            Ultimately I found my passion in web development and started to learn ReactJS and NextJS and additionally
            API Design.
          </p>
          <p>Finally, I am now working on my own projects and all my passion & energy currently goes into <Link href="https://profitpath.app/en" className='font-medium underline underline-offset-2'>ProfitPath</Link>.
            It's a software accessible through your browser that helps you building your Amazon Business with ease. We help you finding profitable products for your Amazon Shop. If you want to find out more about us, visit our website or contact me directly throught <span className='font-medium'>LinkedIn</span>.
          </p>
          <div className="flex flex-col items-stretch gap-12">
            {recentProjects.map((item, itemIndex) => (
              <div key={`data_${itemIndex}`} className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
                <div className="flex items-center">
                  <h2>{item.project}</h2>
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
                        <SatelliteDish size={16} />
                      </div>
                      <div className="grow pl-8">
                        <JourneyCard {...log} index={logIndex} href={item.href} />
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