import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/utils/styles';
import Layout from '@juliosoto/components/Layout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ThemeContextProvider } from '@juliosoto/utils/context';

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
        <Layout components={{ Footer, Navbar }}>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </React.Fragment>
  );
};

export default PortfolioApp;
