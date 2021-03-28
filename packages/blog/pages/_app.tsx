import { MDXProvider } from '@mdx-js/react';
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/lib/styles';
import { ThemeContextProvider } from '@juliosoto/lib/context';
import { Layout } from '@juliosoto/components';
import { BlogNavbar, CodeBlock, BlogFooter } from '../components';
import { UserContextProvider } from '../context';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import * as gtag from '@juliosoto/lib/gtag';

interface BlogAppProps {
  Component: React.ComponentType<AppProps>;
  pageProps: AppProps;
}

const Heading: React.FC = ({ children }) => (
  <h1 style={{ fontWeight: 800 }}>{children}</h1>
);

const MDXComponents = {
  h1: Heading,
  pre: CodeBlock,
};

const BlogApp: React.FC<BlogAppProps> = ({ Component, pageProps }) => {
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
        <title>Julio Soto - Blog</title>
      </Head>
      <Global styles={`${globalStyles} :root{ --post-width: 650px;  }`} />
      <ThemeContextProvider>
        <UserContextProvider>
          <MDXProvider components={MDXComponents}>
            <AnimatePresence exitBeforeEnter>
              <Layout
                key="layout"
                components={{ Footer: BlogFooter, Navbar: BlogNavbar }}
              >
                <Component {...pageProps} />
              </Layout>
            </AnimatePresence>
          </MDXProvider>
        </UserContextProvider>
      </ThemeContextProvider>
    </React.Fragment>
  );
};

export default BlogApp;
