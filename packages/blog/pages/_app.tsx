import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/utils/styles';
import Layout from '@juliosoto/components/Layout';
import Footer from '@juliosoto/components/Footer';

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
      <Global styles={globalStyles} />
      <Layout components={{ Footer: BlogFooter }}>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};

export default BlogApp;
