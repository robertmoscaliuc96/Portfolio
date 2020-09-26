import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';



import '../style/index.css'
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }