import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import adobeLoader from '../utils/adobeloader'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    adobeLoader(document);
  },[])
  return (
    <Layout route={router.pathname}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
