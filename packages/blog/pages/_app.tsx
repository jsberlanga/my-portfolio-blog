import { MDXProvider } from '@mdx-js/react';
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/utils/styles';
import { ThemeContextProvider } from '@juliosoto/utils/context';
import { Layout } from '@juliosoto/components';
import { BlogNavbar, CodeBlock, BlogFooter } from '@juliosoto/blog/components';

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
      <ThemeContextProvider>
        <MDXProvider components={MDXComponents}>
          <Layout components={{ Footer: BlogFooter, Navbar: BlogNavbar }}>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeContextProvider>
    </React.Fragment>
  );
};

export default BlogApp;
