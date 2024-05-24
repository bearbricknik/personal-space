import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'

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
          <p>Coming soon...</p>
        </div>
      </div>
    </ScrollArea>
  )
}
