import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/lib/styles';
import { Layout } from '@juliosoto/components';
import { PortfolioFooter, PortfolioNavbar } from '../components';
import { ThemeContextProvider } from '@juliosoto/lib/context';
import * as gtag from '@juliosoto/lib/gtag';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

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
        <Layout
          components={{ Footer: PortfolioFooter, Navbar: PortfolioNavbar }}
        >
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Layout>
      </ThemeContextProvider>
    </React.Fragment>
  );
};

export default PortfolioApp;
