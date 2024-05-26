import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'
import { JourneyCard } from '@/components/journey-card'
import { ChevronRight } from 'lucide-react'

export const projects = [
  {
    logs: [
      {
        title: 'ProfitPath - A Sourcing Software',
        description: 'A software that helps Amazon sellers to find new profitable items for their online shops. The software is built with React, NextJS and NodeJS. We analyze product feed data from hundreds of suppliers around the world and calculate profit, roi, margin and other important metrics for the sellers. We add value to the sellers by providing them with a faster solution than manual product sourcing.',
        href: 'https://profitpath.app/en',
        technologies: ['React', 'NextJS', 'Golang', 'SQL', 'PostgreSQL', 'Typescript', 'TailwindCSS', 'ReactQuery', 'TRPC'],
        image: {
          url: '/assets/seo_image.png',
          width: 600,
          height: 600,
          title: 'ProfitPath Logo',
          description: 'ProfitPath Logo'
        }
      }
    ]
  },
  {
    logs: [
      {
        title: 'NexosSolutions - A Browser Extension & App to automate the purchase process',
        description: 'A browser extension for desktop, iOS & android and on top a mobile app that automates the process of purchasing limited items. Based on web-requests it automated the process of selecting, purchasing, submitting information & checking out the items. Due to the nature of the products (limited items) the software was built to be as fast as possible to get as many items as possible.',
        href: 'https://nexossolutions.com/',
        technologies: ['React Native', 'Expo', 'NodeJS', 'Express', 'Javascript', 'HTML', 'CSS', 'Webpack', 'MongoDB'],
        image: {
          url: '/assets/nexosios.jpeg',
          width: 600,
          height: 600,
          title: 'NexosSolutions Logo',
          description: 'NexosSolutions Logo'
        }
      }
    ]
  },
  {
    logs: [
      {
        title: 'Branchenbuch Scraper - A Business Directory',
        description: 'A custom scraper that scrapes business directories, contact information and more. The scraper is built with Python and is used to contact businesses to take part in a study.',
        technologies: ['Python', 'Threading', 'Pandas', 'Requests', 'BeautifulSoup'],
      }
    ]
  },
  {
    logs: [
      {
        title: 'NexosProxies - A Proxy Network',
        description: 'A proxy network that provides residential, datacenter and ISP proxies for businesses. The network can be accessed via an API to generate IP:PORT:USER:PASS proxies in 100 different countries.',
        href: 'https://nexosproxies.com/',
        technologies: ['NodeJS', 'Express', 'Javascript', 'HTML', 'CSS', 'MongoDB', 'Squid'],
        image: {
          url: '/assets/nexosproxies.png',
          width: 600,
          height: 600,
          title: 'NexosProxies Logo',
          description: 'NexosProxies Logo'
        }
      }
    ]
  },
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
