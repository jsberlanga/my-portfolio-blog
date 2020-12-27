import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/utils/styles';
import Layout from '@juliosoto/components/Layout';
import Footer from '@juliosoto/components/Footer';
import BlogNavbar from '../components/Navbar';

interface BlogAppProps {
  Component: React.ComponentType<AppProps>;
  pageProps: AppProps;
}

const BlogFooter = () => <Footer resume={false} />;

const BlogApp: React.FC<BlogAppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  if (router.query?.theme) {
    router.push('/');
  }

  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto - Blog</title>
      </Head>
      <Global styles={`${globalStyles} :root { --content-width: 50rem; }`} />
      <Layout components={{ Footer: BlogFooter, Navbar: BlogNavbar }}>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};

export default BlogApp;
