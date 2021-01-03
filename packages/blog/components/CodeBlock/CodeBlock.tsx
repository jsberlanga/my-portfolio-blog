import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import { css } from '@emotion/react';
import Head from 'next/head';
import { useThemeState } from '@juliosoto/lib/context';
import { getMQ } from '@juliosoto/lib/styles';

const styles = css`
  padding: 15px;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Roboto Mono', monospace;
  margin: var(--gap-unit) 0;
  overflow-x: scroll;

  ${getMQ('desktop')} {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .highlight-line {
    background-color: rgb(255, 255, 255, 0.07);
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.3em solid #9d86e9;
  }
`;

interface CodeBlockProps {
  children: {
    props: {
      children: React.ReactNode;
      className: string;
    };
  };
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  children: {
    props: { children, className },
  },
}) => {
  const language = className.replace(/language-/, '');
  const theme = useThemeState();

  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Highlight
        {...defaultProps}
        theme={theme === 'dark' ? darkTheme : lightTheme}
        code={children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre css={styles} className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span
                  css={css`
                    display: inline-block;
                    width: 2em;
                    user-select: none;
                    opacity: 0.3;
                  `}
                >
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </React.Fragment>
  );
};

export default CodeBlock;
