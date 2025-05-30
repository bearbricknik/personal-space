import million from 'million/compiler'
import createMDX from '@next/mdx'
import { rehypePrettyCode } from 'rehype-pretty-code'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  // Optionally provide remark and rehype plugins
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [rehypePrettyCode],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === 'development'
    }
  },
  compiler: {
    removeConsole: {
      exclude: ['error', 'info']
    }
  },
  trailingSlash: false,
  images: {
    deviceSizes: [390, 435, 768, 1024, 1280],
    formats: ['image/avif']
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/turkiyeden-gitmek-berline-uzanan-bir-goc-hikayesi-bolum-1-nedenler',
        destination: '/writing/bir-yazilimci-olarak-turkiyeden-gitmek',
        permanent: true
      },
      {
        source: '/writing/bir-yazilimci-olarak-turkiyeden-gitmek-bolum-1-nedenler',
        destination: '/writing/bir-yazilimci-olarak-turkiyeden-gitmek',
        permanent: true
      },
      {
        source: '/what-i-have-learned-from-working-with-html5-video-over-a-month',
        destination: '/writing/what-i-have-learned-from-working-with-html5-video-over-a-month',
        permanent: true
      },
      {
        source: '/useFetch-react-hook',
        destination: '/writing/useFetch-react-hook',
        permanent: true
      },
      {
        source: '/understanding-react-memo',
        destination: '/writing/understanding-react-memo',
        permanent: true
      },
      {
        source: '/blog/:slug',
        destination: '/writing/:slug',
        permanent: true
      },
      {
        source: '/bookmarks/18259129',
        destination: '/bookmarks/apps-and-tools',
        permanent: true
      },
      {
        source: '/bookmarks/15968768',
        destination: '/bookmarks/design',
        permanent: true
      },
      {
        source: '/bookmarks/23598938',
        destination: '/bookmarks/fonts',
        permanent: true
      },
      {
        source: '/bookmarks/16949672',
        destination: '/bookmarks/frontend',
        permanent: true
      },
      {
        source: '/bookmarks/15807896',
        destination: '/bookmarks/portfolio',
        permanent: true
      },
      {
        source: '/bookmarks/15807897',
        destination: '/bookmarks/reading',
        permanent: true
      },
      {
        source: '/bookmarks/15896982',
        destination: '/bookmarks/tweets',
        permanent: true
      },
      {
        source: '/bookmarks/15969648',
        destination: '/bookmarks/vs-code',
        permanent: true
      },
      {
        source: '/bookmarks/25589709',
        destination: '/bookmarks/wallpapers',
        permanent: true
      },
      {
        source: '/bookmarks/16338467',
        destination: '/bookmarks/websites',
        permanent: true
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@supabase/supabase-js', 'react-tweet'],
    webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP']
  }
}

const millionConfig = {
  auto: {
    rsc: true
  },
  server: true,
  rsc: true
}

export default withMDX(million.next(nextConfig, millionConfig))
