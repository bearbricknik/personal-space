
import { ScrollArea } from '@/components/scroll-area'
import { JourneyCard } from '@/components/journey-card'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'
import { PlusIcon } from 'lucide-react'

const cvhistory = [
  {
    year: '2023',
    logs: [
      {
        title: 'UI / UX Developer at ProfitPath',
        description: 'Since the start of the company, we have been working on the software ProfitPath. A tool for amazon sellers to find new profitable items for their online shops.',
        href: 'https://profitpath.app/en',
        image: {
          url: '/assets/seo_image.png',
          width: 600,
          height: 600,
          title: 'ProfitPath Logo',
          description: 'ProfitPath Logo'
        }
      },
      {
        title: 'FourByte GmbH',
        description: 'Marten Enders, Luca Jurende, Leon Bendzko and I founded a company called FourByte GmbH. We are a company that specializes in software development. Under this company we developed the software ProfitPath. We are a team of four people who are passionate about software development & building products for businesses. We are always looking for new challenges and opportunities to grow.',
      }
    ]
  },
  {
    year: '2022',
    logs: [
      {
        title: 'Pandamic & the Idea of NexosSolutions',
        description: 'During the pandamic I got bored and started to look deeper into coding. I started to build my own software which was a browser extensions in plain JavaScript, HTML & CSS. I built that software together with my team. All of us had the same goal, to make the software as good as possible and to reduce our costs and get more limited items. NexosSolution was born.',
        href: 'https://nexossolutions.com/',
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
    year: '2021',
    logs: [
      {
        title: 'NexosProxies - A Service for Proxy Networks',
        description: 'I started to reduce my costs and that got me interested in creating my own IP proxy network. I started to look into proxy services and how they work. I learned a lot about networking and how to set up a proxy server. I then started to sell my own proxies to other people who were in the same situation as me. NexosProxies was born.',
        href: 'https://nexosproxies.com/',
        image: {
          url: '/assets/nexosproxies.png',
          width: 600,
          height: 600,
          title: 'NexosProxies Logo',
          description: 'NexosProxies Logo'
        }
      },
      {
        title: 'Bachelor of Science in Automotive & Engine Technology',
        description: 'There it is. I finally graduated from the University of Stuttgart with a Bachelor of Science in Automotive & Engine Technology. I learned a lot about the automotive sector and how to develop cars.',
      },
      {
        title: 'Started my journey with coding',
        description: 'At that time the software I was using to purchase limited items got more expensive to maintain. Servers, captcha providers, proxies and the software itself were needed as the game got more competitive and all the expanses drained my wallet. I was still a student and therefore I could not afford doing this for a very long time. Thats why I decided to learn how to code and build my own software.',
      }
    ]
  },
  {
    year: '2020',
    logs: [
      {
        title: 'Bachelor Thesis at FKFS Stuttgart',
        description: 'I wrote my bachelor thesis at the FKFS in Stuttgart. My research focused on comfort tests of automated driving functions in a driving simulator by analyzing a test person study.',
        href: 'https://www.fkfs.de/',
        image: {
          url: '/assets/fkfs.jpeg',
          width: 600,
          height: 600,
          title: 'FKFS Stuttgart',
          description: 'FKFS Stuttgart'
        }
      },
      {
        title: 'Founded my own very first company',
        description: 'During my university time I founded my first company. It was interesting to see that you can profit off from limited goods. At that time I used software that automatically buys limited goods from online retailers and later on resold them for a higher price on other marketplaces.',
      }
    ]
  },
  {
    year: '2017',
    logs: [
      {
        title: 'Started studying Automotive & Engine Technology at University of Stuttgart',
        description: 'After my trip to New Zealand I finally knew what I wanted to do, going into the automotive sector. I started to study Automotive & Engine Technology at the University of Stuttgart.',
      },
      {
        title: 'Gap Year to work & travel New Zealand',
        description: 'After my graduation I started to work at a larger company to save up some money for my trip to New Zealand. I traveled around the country for 4 months. I learned a lot about myself and the world. I met a lot of interesting people and made friends for life.',
      }
    ]
  },
  {
    year: '2016',
    logs: [
      {
        title: 'Graduated from High School',
        description: 'I graduated from the local high school in my hometown with the Abitur. I started to look out for opportunities to study.',
      }
    ]
  },
  {
    year: '2007',
    logs: [
      {
        title: 'High School',
        description: 'I started to attend the local high school in my hometown.',
      }
    ]
  },
  {
    year: '1997',
    logs: [
      {
        title: 'PNPM install -g dominik',
        description: 'I was born in a small town in Germany on the 14th of October 1997.',
      }
    ]
  }
]

export default async function CV() {
  return (
    <ScrollArea useScrollAreaId>
      <GradientBg3 />
      <FloatingHeader scrollTitle="Curriculum vitae" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Curriculum vitae" />
          <p>Lets start at the very beginning and where I am now.</p>
          <div className="flex flex-col items-stretch gap-12">
            {cvhistory.map((item, itemIndex) => (
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