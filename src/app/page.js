import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'

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
            API Design. Finally, I am now working on my own projects.
          </p>
        </div>
      </div>
    </ScrollArea>
  )
}
