import * as React from 'react';
import Head from 'next/head';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles, noisyBackground } from '@juliosoto/lib/styles';
import { ThemeContextProvider } from '@juliosoto/lib/context';
import * as gtag from '@juliosoto/lib/gtag';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import PortfolioLayout from '../components/Layout';

let queue = [] as any;
setInterval(sendProfileQueue, 5000);
function onRenderCallback(
  id: string,
  phase: any,
  actualDuration: any,
  baseDuration: any,
  startTime: any,
  commitTime: any,
  interactions: any,
) {
  queue.push({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
}
function sendProfileQueue() {
  if (!queue.length) {
    return Promise.resolve();
  }
  const queueToSend = [...queue];
  queue = [];
  // here's where we'd actually make the server call to send the queueToSend
  // data to our backend...
  console.info('sending profile queue', queueToSend);
  return Promise.resolve();
}

const ProfiledPortfolioApp = (props: PortfolioAppProps) => (
  <React.Profiler id="app" onRender={onRenderCallback}>
    <PortfolioApp {...props} />
  </React.Profiler>
);

interface PortfolioAppProps {
  Component: React.ComponentType<AppProps>;
  pageProps: AppProps;
}

const PortfolioApp: React.FC<PortfolioAppProps> = ({
  Component,
  pageProps,
}) => {
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
        <title>Julio Soto - Portfolio</title>
      </Head>
      <Global styles={[globalStyles, noisyBackground]} />
      <ThemeContextProvider>
        <AnimatePresence exitBeforeEnter>
          <PortfolioLayout>
            <Component {...pageProps} key={router.asPath} />
          </PortfolioLayout>
        </AnimatePresence>
      </ThemeContextProvider>
    </React.Fragment>
  );
};

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  // Use `window.gtag` if you initialized Google Analytics as this example:
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
  window.gtag('event', name, {
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}

let MyApp;

if (process.env.NODE_ENV === 'development') {
  MyApp = ProfiledPortfolioApp;
} else {
  MyApp = PortfolioApp;
}

export default MyApp;
