import { config} from '@fortawesome/fontawesome-svg-core';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

import '../style/index.css'
import '../style/navbar.css'
import '../style/landing.css'
import '../style/about.css'
import '../style/skills.css'
import '../style/work.css'
config.autoAddCss = false;


const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (<Component {...pageProps} />)
}

export default App
