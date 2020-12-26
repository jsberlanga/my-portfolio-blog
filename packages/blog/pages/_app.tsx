import * as React from 'react';
import Layout from '@juliosoto/components/Layout';
import { Global } from '@emotion/react';
import { globalStyles } from '@juliosoto/utils/styles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
