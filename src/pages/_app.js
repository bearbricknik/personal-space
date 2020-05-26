import { useEffect } from 'react'
import Router from 'next/router'
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'

// --- Components
import { Header, MDXComponents } from 'components'

// --- Others
import { trackPageview } from 'lib/gtag'
import SEO from '../../next-seo.config'
import prismTheme from 'utils/prism'
import theme from 'utils/theme'

const GlobalStyle = ({ children }) => (
  <>
    <Global
      styles={css`
        ${prismTheme}

        @font-face {
          font-family: 'Inter';
          font-weight: 400;
          font-style: normal;
          font-display: fallback;
          src: url('/static/fonts/Inter-Regular.woff2') format('woff2'),
            url('/static/fonts/Inter-Regular.woff') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-weight: 500;
          font-style: normal;
          font-display: fallback;
          src: url('/static/fonts/Inter-Medium.woff2') format('woff2'),
            url('/static/fonts/Inter-Medium.woff') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-weight: 600;
          font-style: normal;
          font-display: fallback;
          src: url('/static/fonts/Inter-SemiBold.woff2') format('woff2'),
            url('/static/fonts/Inter-SemiBold.woff') format('woff');
        }

        @font-face {
          font-family: 'Gilroy';
          font-weight: 500;
          font-style: normal;
          font-display: fallback;
          src: url('/static/fonts/Gilroy-Medium.woff2') format('woff2'),
            url('/static/fonts/Gilroy-Medium.woff') format('woff');
        }

        @font-face {
          font-family: 'Gilroy';
          font-weight: 600;
          font-style: normal;
          font-display: fallback;
          src: url('/static/fonts/Gilroy-Bold.woff2') format('woff2'),
            url('/static/fonts/Gilroy-Bold.woff') format('woff');
        }

        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        body {
          font-family: ${theme.fonts.sans};
          font-feature-settings: 'ss01' 1, 'cv05' 1;
          text-rendering: optimizeLegibility;
          margin: 0;
          padding: 0;
          font-size: 16px;
          line-height: 1.25;
          color: ${theme.colors.black};
          background-color: ${theme.colors.white};
        }

        *,
        :after,
        :before {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          -ms-flex: 0 1 auto;
        }

        p::-moz-selection {
          background: #444444;
          color: #fff;
        }

        p::selection {
          background: #444444;
          color: #fff;
        }

        a {
          color: inherit;
          text-decoration: inherit;
          cursor: pointer;
        }

        button,
        [role='button'] {
          cursor: pointer;
        }

        figure {
          margin: 0;
          padding: 0;

          figcaption {
            font-size: 0.75rem;
            font-weight: 500;
            color: ${theme.colors.gray600};
            margin-top: 0.25rem;
          }
        }

        article {
          img,
          video {
            max-width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 6px;
          }
        }
      `}
    />
    {children}
  </>
)

function App({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <GlobalStyle>
          <DefaultSeo {...SEO} />
          <Header />
          <Component {...pageProps} />
        </GlobalStyle>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
