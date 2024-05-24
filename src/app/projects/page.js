import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'

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
        </div>
      </div>
    </ScrollArea>
  )
}
