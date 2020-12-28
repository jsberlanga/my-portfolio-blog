import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/utils/styles';
import Layout from '@juliosoto/components/Layout';
import Footer from '@juliosoto/components/Footer';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

interface PortfolioAppProps {
  Component: React.ComponentType<AppProps>;
  pageProps: AppProps;
}

const PortfolioFooter = () => (
  <Footer
    columns={{ LeftColumn: <Footer.LeftColumn />, MiddleColumn: <Contact /> }}
  />
);

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
      <Layout components={{ Footer: PortfolioFooter, Navbar: Navbar }}>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};

export default PortfolioApp;
