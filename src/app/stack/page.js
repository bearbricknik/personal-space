import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'
import { JourneyCard } from '@/components/journey-card'
import { Database, Code2 } from 'lucide-react'

const stacks = [
  {
    stack: 'NextJs, React & React Native',
    type: 'frameworks', // databases, frameworks
    logs: [
      {
        title: 'NextJS Frontend Framework',
        description: 'A frontend framework that enables developers to build web applications with React by adding server-side rendering, static site generation, routing, data fetching, image optimization, and more.',
        href: 'https://nextjs.org/',
        experienceLevel: 'Professional',
        image: {
          url: '/assets/nextjs.webp',
          width: 500,
          height: 500,
          title: 'NextJs Logo',
          description: 'NextJs Logo'
        }
      },
      {
        title: 'ReactJS Frontend Framework',
        description: 'A JavaScript library for building user interfaces. ',
        href: 'https://reactjs.org/',
        experienceLevel: 'Intermediate',
        image: {
          url: '/assets/reactjs.png',
          width: 500,
          height: 500,
          title: 'ReactJS Logo',
          description: 'ReactJS Logo'
        }
      },
      {
        title: 'React Native Mobile Framework',
        description: 'A framework for building native applications using React. In the past we built the NexosSolutions App for Android and iOS with React Native.',
        href: 'https://reactnative.dev/',
        experienceLevel: 'Intermediate',
      }
    ]
  },
  {
    stack: 'Python',
    type: 'frameworks',
    logs: [
      {
        title: 'Python Language',
        description: 'Used for web scraping and data analysis in past projects. The University of Munich hired me for a project to scrape data from the web for their research and study purposes.',
        href: 'https://www.python.org/',
        experienceLevel: 'Basic',
      }
    ]
  },
  {
    stack: 'Golang',
    type: 'frameworks',
    logs: [
      {
        title: 'Golang Language',
        description: 'Extremely fast and efficient language. In some projects we used Golang for the backend to deliver the data to the frontend and to handle the API requests.',
        href: 'https://www.python.org/',
        experienceLevel: 'Basic',
      }
    ]
  },
  {
    stack: 'Typescript',
    type: 'frameworks',
    logs: [
      {
        title: 'Typescript Language',
        description: 'Typesafety used in almost all projects. Typescript is a superset of JavaScript that adds type definitions to the language.',
        href: 'https://www.python.org/',
        experienceLevel: 'Intermediate',
        image: {
          url: '/assets/typescript.avif',
          width: 500,
          height: 500,
          title: 'ReactJS Logo',
          description: 'ReactJS Logo'
        }
      }
    ]
  },
  {
    stack: 'Javascript & NodeJS',
    type: 'frameworks',
    logs: [
      {
        title: 'Javscript Language',
        description: 'Used for web development and browser extensions in the past. NexosSolutions is a browser extension that automates the process of purchasing limited items. Based on web-requests it automated the process of selecting, purchasing and submitting the order.',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        experienceLevel: 'Professional',
      },
      {
        title: 'NodeJS Backend Framework',
        description: 'The backend framework for the NexosSolutions Extension and App. Our API is built with NodeJS and ExpressJS to deliver the data to the frontend.',
        href: 'https://nodejs.org/en',
        experienceLevel: 'Professional',
        image: {
          url: '/assets/nodejs.jpeg',
          width: 500,
          height: 500,
          title: 'NodeJS Logo',
          description: 'NodeJS Logo'
        }
      }
    ]
  },
  {
    stack: 'MongoDB & PostgreSQL',
    type: 'databases',
    logs: [
      {
        title: 'MongoDB',
        description: 'A NoSQL database program, which uses JSON-like documents with optional schemas. Used for the NexosSolutions Extension and App to store user data and product information.',
        href: 'https://www.mongodb.com/',
        experienceLevel: 'Intermediate',
        image: {
          url: '/assets/mongodb.webp',
          width: 500,
          height: 500,
          title: 'MongoDB Logo',
          description: 'MongoDB Logo'
        }
      },
      {
        title: 'PostgreSQL',
        description: 'A powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
        href: 'https://www.postgresql.org/',
        experienceLevel: 'Intermediate',
        image: {
          url: '/assets/postgres-logo.png',
          width: 500,
          height: 500,
          title: 'PostgreSQL Logo',
          description: 'PostgreSQL Logo'
        }
      },
    ]
  }
]

export default async function Home() {
  return (
    <ScrollArea useScrollAreaId>
      <GradientBg3 />
      <FloatingHeader scrollTitle="Tech Stack" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Tech Stack" />
          <p>
            In the following I am presenting you my Tech Stack which I all learned by videos & courses on the internet.
            Youtube & Udemy are your best friends when it comes to learn new skills.{' '}
          </p>
          <div className="flex flex-col items-stretch gap-12">
            {stacks.map((item, itemIndex) => (
              <div key={`data_${itemIndex}`} className="flex flex-col items-baseline gap-4">
                <div className="flex items-center">
                  <h2>{item.stack}</h2>
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
                        {item.type === 'frameworks' ? <Code2 size={16} /> : <Database size={16} />}
                      </div>
                      <div className="grow pl-8">
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