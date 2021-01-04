import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { GOOGLE_ANALYTICS_TRACKING_ID } from '@juliosoto/lib/constants';

function setInitialColorMode() {
  function getInitialColorMode() {
    function readQueryParams() {
      const url: URL = new URL(window.location.href);
      const params: URLSearchParams = url.searchParams;
      const themeValue = params && params.get('theme');

      return themeValue;
    }

    function readLocalStorage() {
      const storedValue = window.localStorage.getItem('theme');

      return storedValue;
    }

    const userPreferredTheme = readLocalStorage() ?? readQueryParams();

    if (userPreferredTheme) {
      return userPreferredTheme;
    }

    const mediaQuery = '(prefers-color-scheme: dark)';
    const mql = window.matchMedia(mediaQuery);
    const hasSystemPreference = typeof mql.matches === 'boolean';

    if (hasSystemPreference) {
      return mql.matches ? 'dark' : 'light';
    } else {
      return 'light';
    }
  }

  const colorMode = getInitialColorMode();
  const root = document.documentElement;

  root.style.setProperty('--initial-color-mode', colorMode);

  if (colorMode === 'dark')
    document.documentElement.setAttribute('data-theme', 'dark');
}

const blockingSetInitialColorMode = `(function() {
  ${setInitialColorMode.toString()}
  setInitialColorMode();
})()
`;

class PortfolioDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/fonts/fonts.css" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
            as="font"
            crossOrigin="anonymous"
          />
          <meta
            name="Description"
            content="Julio Soto - Portfolio and Personal Blog"
          ></meta>
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: blockingSetInitialColorMode,
            }}
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ANALYTICS_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PortfolioDocument;
