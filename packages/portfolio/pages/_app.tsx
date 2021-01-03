import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/lib/styles';
import { Layout } from '@juliosoto/components';
import { PortfolioFooter, PortfolioNavbar } from '../components';
import { ThemeContextProvider } from '@juliosoto/lib/context';

interface PortfolioAppProps {
  Component: React.ComponentType<AppProps>;
  pageProps: AppProps;
}

const PortfolioApp: React.FC<PortfolioAppProps> = ({
  Component,
  pageProps,
}) => {
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
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </React.Fragment>
  );
};

export default PortfolioApp;
