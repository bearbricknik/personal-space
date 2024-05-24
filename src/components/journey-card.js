import { Gauge, Code } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const MarkdownRenderer = dynamic(() => import('@/components/markdown-renderer').then((mod) => mod.MarkdownRenderer))

export const JourneyCard = ({ title, description, image, index, href, experienceLevel, technologies }) => (
  <div className="word-break-word flex flex-col">
    <span className="font-semibold tracking-tight">{title}</span>
    {description && <MarkdownRenderer className="text-sm">{description}</MarkdownRenderer>}
    {experienceLevel && (
      <div className="flex items-center text-sm">
        <Gauge size={14} />
        <span className="ml-1 font-medium">{experienceLevel}</span>
      </div>
    )}
    {technologies && technologies.length > 0 && (
      <div className="mt-1 flex items-center text-sm">
        <Code className='text-blue-500' size={14} />
        <span className="ml-1 font-bold">Technologies: {technologies.join(', ')}</span>
      </div>
    )}
    {image?.url && (
      <div className={`mt-2.5 overflow-hidden rounded-xl bg-white ${href && 'cursor-pointer'}`}>
        {href ? (
          <Link href={href}>
            <img
              src={image.url}
              alt={image.title || image.description}
              width={image.width}
              height={image.height}
              loading={index < 1 ? 'eager' : 'lazy'}
              className="animate-reveal"
              // eslint-disable-next-line react/no-unknown-property
              nopin="nopin"
            />
          </Link>
        ) : (
          <img
            src={image.url}
            alt={image.title || image.description}
            width={image.width}
            height={image.height}
            loading={index < 1 ? 'eager' : 'lazy'}
            className="animate-reveal"
            // eslint-disable-next-line react/no-unknown-property
            nopin="nopin"
          />
        )}
      </div>
    )}
  </div>
)