import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import nextI18nConfig from '../next-i18next.config'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp, nextI18nConfig)
