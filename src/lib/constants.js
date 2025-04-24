
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  FolderOpenDot,
  Rocket,
  Layers,
  CodeXml,
  FolderMinus,
  Globe
} from 'lucide-react'

export const PROFILES = {
  twitter: {
    title: 'X (Twitter)',
    username: 'bearbricknik',
    url: 'https://x.com/bearbricknik',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    )
  },
  github: {
    title: 'GitHub',
    url: 'https://github.com/bearbricknik',
    icon: <GithubIcon size={16} />
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dominik-huber-7a4394227/',
    icon: <LinkedinIcon size={16} />
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/dominikhuber_',
    icon: <InstagramIcon size={16} />
  }
}

export const LATESTPROJECTS = {
  profitpath: {
    title: 'ProfitPath',
    url: 'https://profitpath.app',
    icon: <FolderOpenDot size={16} />
  },
  profit_go: {
    title: 'ProfitGo',
    url: 'https://chromewebstore.google.com/detail/profitgo-for-amazon-and-o/ephoilihbddhdekcpnpkokighhcdmljb',
    icon: <FolderOpenDot size={16} />
  },
  profitpath_companion: {
    title: 'ProfitPath Companion',
    url: 'https://chromewebstore.google.com/detail/profitpath-companion/kjcdokagfjgbhmmemolnmgccgoklglif',
    icon: <FolderOpenDot size={16} />
  },
  nexosSolutions: {
    title: 'Nexos Solutions',
    url: '',
    icon: <FolderMinus size={16} />
  },
  nexosProxies: {
    title: 'Nexos Proxies',
    url: '',
    icon: <FolderMinus size={16} />
  },
}

export const TWEETS_COLLECTION_ID = 15896982

export const COLLECTION_IDS = [
  18259129,
  15968768,
  23598938,
  16949672,
  15807896,
  15807897,
  15969648,
  16338467,
  TWEETS_COLLECTION_ID,
  25589709,
  17139082,
  22029101,
  39696243
]

export const LINKS = [
  {
    href: '/',
    label: 'Welcome',
    icon: <Globe size={16} />
  },
  {
    href: '/cv',
    label: 'Curriculum vitae',
    icon: <Rocket size={16} />
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: <FolderOpenDot size={16} />
  },
  {
    href: '/open-source',
    label: 'Open Source (free)',
    icon: <CodeXml size={16} />
  },
  {
    href: '/stack',
    label: 'Tech Stack',
    icon: <Layers size={16} />
  }
]

export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20