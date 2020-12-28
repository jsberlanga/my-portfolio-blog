import { MDXProvider } from '@mdx-js/react';
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/utils/styles';
import Layout from '@juliosoto/components/Layout';
import Footer from '@juliosoto/components/Footer';
import BlogNavbar from '../components/Navbar';
import { Github } from '@juliosoto/components/Icons';

interface BlogAppProps {
  Component: React.ComponentType<AppProps>;
  pageProps: AppProps;
}

const Heading = ({ children }) => (
  <h1 style={{ fontWeight: 800 }}>{children}</h1>
);

const MDXComponents = {
  h1: Heading,
};

const BlogFooter = () => (
  <Footer
    columns={{
      LeftColumn: (
        <div className="github">
          <a
            href="https://github.com/jsberlanga"
            target="_blank"
            rel="noreferrer"
          >
            <h5>
              my github
              <Github fill="var(--c-light)" size="2.5rem" />
            </h5>
            <span className="small">checkout the source code in github</span>
          </a>
        </div>
      ),
    }}
  />
);

const BlogApp: React.FC<BlogAppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  if (router?.query?.theme) {
    router.push('/');
  }

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
