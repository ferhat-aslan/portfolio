import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import mixpanel from 'mixpanel-browser'
import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

function mixPanel_init() {
  var le = new Date()
  var previousVisit
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    previousVisit = localStorage.getItem('previousVisit')
    if (!previousVisit) {
      localStorage.setItem('previousVisit', le)
      return
    }
    localStorage.setItem('previousVisit', le + previousVisit)
    if (previousVisit.length > 100) {
      localStorage.setItem('previousVisit', previousVisit)
    }
    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    mixpanel.init('875e9ff0a62dc433a8e4a96e88d26069', { debug: true })
    var lang = navigator.language
    mixpanel.track('anasayfa', {
      browserLanguage: lang,
      timezone: timezone,
      route: window.location,
      previousVisit: previousVisit,
    })
  }
}
mixPanel_init()
