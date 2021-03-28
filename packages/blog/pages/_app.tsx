import { MDXProvider } from '@mdx-js/react';
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { css, Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/lib/styles';
import { ThemeContextProvider } from '@juliosoto/lib/context';
import { Layout } from '@juliosoto/components';
import {
  BlogNavbar,
  CodeBlock,
  BlogFooter,
  UnorderedList,
} from '../components';
import { UserContextProvider } from '../context';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';
import * as gtag from '@juliosoto/lib/gtag';

interface BlogAppProps {
  Component: React.ComponentType<AppProps>;
  pageProps: AppProps;
}

const styles = {
  heading: css`
    margin: var(--gap-unit-s) 0;
  `,
};

// eslint-disable-next-line react/display-name
const Heading: (as: any) => React.FC = (as) => ({ children }) => {
  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  const Heading = validHeadingLevels.includes(as) ? as : 'p';

  return <Heading css={styles.heading}>{children}</Heading>;
};

const MDXComponents = {
  h1: Heading('h1'),
  h2: Heading('h2'),
  h3: Heading('h3'),
  h4: Heading('h4'),
  h5: Heading('h5'),
  h6: Heading('h6'),
  img: Image,
  ul: UnorderedList,
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
