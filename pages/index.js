import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";
import {Footer} from "../src/components/Footer";
import Link from "next/link";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export async function getServerSideProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'footer'])),
            // Will be passed to the page component as props
        },
    }
}

export default function Home() {
    const router = useRouter()
    const { ready } = useTranslation(['client-page', 'footer'])
    if(!ready) {
        return <div>Waiting...</div>
    }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Link
              href='/'
              locale={router.locale === 'en' ? 'ru' : 'en'}
          >
              <button>
                  {router.locale === 'en' ? 'ru' : 'en'}
              </button>
          </Link>

      </main>

      <Footer />
    </div>
  )
}
