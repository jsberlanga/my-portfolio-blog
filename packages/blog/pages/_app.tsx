import { MDXProvider } from '@mdx-js/react';
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/utils/styles';
import Layout from '@juliosoto/components/Layout';
import BlogNavbar from '../components/Navbar';
import CodeBlock from '../components/CodeBlock';
import BlogFooter from '../components/Footer';

interface BlogAppProps {
  Component: React.ComponentType<AppProps>;
  pageProps: AppProps;
}

const Heading = ({ children }) => (
  <h1 style={{ fontWeight: 800 }}>{children}</h1>
);

const MDXComponents = {
  h1: Heading,
  pre: CodeBlock,
};

const BlogApp: React.FC<BlogAppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto - Blog</title>
      </Head>
      <Global styles={`${globalStyles}`} />
      <MDXProvider components={MDXComponents}>
        <Layout components={{ Footer: BlogFooter, Navbar: BlogNavbar }}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </React.Fragment>
  );
};

export default BlogApp;
