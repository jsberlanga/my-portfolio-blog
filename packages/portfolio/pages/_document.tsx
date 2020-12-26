import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

function setInitialColorMode() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem('theme');
    const hasSavedPreference = typeof preference === 'string';

    if (hasSavedPreference) {
      return preference;
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
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
          <meta name="Description" content="Julio Soto - Portfolio"></meta>
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: blockingSetInitialColorMode,
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PortfolioDocument;
