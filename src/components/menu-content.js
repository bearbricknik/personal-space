import Link from 'next/link'

import { NavigationLink } from '@/components/navigation-link'
import { PROFILES, LATESTPROJECTS, LINKS } from '@/lib/constants'
import { Link2 } from 'lucide-react'

export const MenuContent = () => (
  <div className="flex w-full flex-col text-sm">
    <div className="flex flex-col gap-4">
      <Link href="/" className="inline-flex items-center gap-2 rounded-lg p-2 ring-1 ring-gray-300 hover:bg-gray-200">
        <img
          src="/assets/profileImage.jpg"
          alt="Dominik Huber"
          width={40}
          height={40}
          loading="lazy"
          className="rounded-full border shadow-sm"
          // eslint-disable-next-line react/no-unknown-property
          nopin="nopin"
        />
        <div className="flex flex-col">
          <span className="font-semibold tracking-tight">Dominik Huber</span>
          <span className="text-gray-600">BASc. & Software</span>
        </div>
      </Link>
      <div className="flex flex-col gap-1">
        {LINKS.map((link, linkIndex) => (
          <NavigationLink
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
            shortcutNumber={linkIndex + 1}
          />
        ))}
      </div>
    </div>
    <hr />
    <div className="flex flex-col gap-2 text-sm">
      <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">Latest & Ongoing Projects</span>
      <div className="flex flex-col gap-1">
        {Object.values(LATESTPROJECTS).map((project) => (
          <NavigationLink key={project.url} href={project.url} label={project.title} icon={project.icon} />
        ))}
      </div>
    </div>
    <hr />
    <div className="flex flex-col gap-2 text-sm">
      <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">Social Medias</span>
      <div className="flex flex-col gap-1">
        {Object.values(PROFILES).map((profile) => (
          <NavigationLink key={profile.url} href={profile.url} label={profile.title} icon={profile.icon} />
        ))}
      </div>
    </div>
    <hr />
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium leading-relaxed text-gray-600">Get in contact with me</span>
      <div className="inline-flex items-center gap-2 rounded-lg p-2 ring-1 ring-gray-300">
        <Link href="https://www.linkedin.com/in/dominik-huber-7a4394227/" target='_blank' className="flex flex-col">
          <span className="flex flex-row items-center gap-1 font-semibold tracking-tight">
            <Link2 className="text-blue-500" size={16} />
            Lets connect!
          </span>
          <span className="text-gray-600">Contact me on LinkedIn to exchange on future projects.</span>
        </Link>
      </div>
    </div>
  </div>
)
