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
    href: 'https://profitpath.com/en',
    logs: [
      {
        title: 'ProfitPath Software',
        description: 'ProfitPath analyzes data from 700+ suppliers to identify profitable Amazon arbitrage opportunities, featuring automated wholesale scanning, competitor spy search, and comprehensive profit calculations across EU regions & UK.',
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
            Hi 👋 I'm Dominik, a former automotive and engine engineering student at the University of Stuttgart, Germany. During the pandemic, I taught myself programming and have since been involved in various software development projects.
          </p>
          <p>
            I began my journey by creating browser extensions using vanilla JavaScript, with invaluable support from my team as I initially struggled with HTML and CSS fundamentals. I then progressed to web scraping projects using Python and Node.js. Eventually, I discovered my passion for web development and began mastering React.js and Next.js, along with API design principles.
          </p>
          <p>This technical foundation led me to start developing innovative projects like <Link href="https://profitpath.com/en" className='hover:underline-accent-500 font-medium underline underline-offset-2 hover:text-accent-500'>ProfitPath</Link>, a comprehensive Amazon arbitrage software platform that simplifies online arbitrage for sellers. ProfitPath analyzes data from over 700+ companies and suppliers, 200M+ updated products on a daily basis, providing users with powerful tools like supplier search, wholesale scanning, competitor analysis, and automated profit calculations. The platform helps Amazon sellers maximize profits and save valuable time by automating the tedious process of product sourcing and analysis. Working on such data-intensive applications has deepened my understanding of how modern web technologies can solve real-world business challenges and create meaningful impact for users. If you want to find out more about us, visit our website or contact me directly throught <Link href="https://www.linkedin.com/in/dominik-huber-7a4394227/" className='hover:underline-accent-500 font-medium underline underline-offset-2 hover:text-accent-500'>LinkedIn</Link>.
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