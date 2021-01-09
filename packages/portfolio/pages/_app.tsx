import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/lib/styles';
import { ThemeContextProvider } from '@juliosoto/lib/context';
import * as gtag from '@juliosoto/lib/gtag';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import PortfolioLayout from '../components/Layout';

interface PortfolioAppProps {
  Component: React.ComponentType<AppProps>;
  pageProps: AppProps;
}

const PortfolioApp: React.FC<PortfolioAppProps> = ({
  Component,
  pageProps,
}) => {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto - Portfolio</title>
      </Head>
      <Global styles={globalStyles} />
      <ThemeContextProvider>
        <AnimatePresence exitBeforeEnter>
          <PortfolioLayout>
            <Component {...pageProps} key={router.asPath} />
          </PortfolioLayout>
        </AnimatePresence>
      </ThemeContextProvider>
    </React.Fragment>
  );
};

export default PortfolioApp;
