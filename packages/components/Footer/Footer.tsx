/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { Github, ScrollToTop, Download } from '@juliosoto/components/Icons';
import { getMQ } from '@juliosoto/utils/styles';

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--gap-unit) var(--gap);
    background: var(--c-background-02);
    color: var(--c-text-02);

    ${getMQ('desktop')} {
      flex-direction: row;
    }

    .col-1 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      order: 3;

      a {
        color: var(--c-light);
      }

      .resume,
      .github {
        margin-bottom: var(--gap-bottom);

        ${getMQ('desktop')} {
          margin-bottom: var(--gap-unit-s);
        }
      }
      ${getMQ('desktop')} {
        order: 1;
        width: 25%;
        margin-bottom: 0;
      }

      h5 {
        display: flex;
        align-items: flex-end;
        margin-bottom: 0.4rem;

        svg {
          margin-left: 0.8rem;
        }
      }
      .copyright {
        ${getMQ('mobile')} {
          display: none;
        }
      }
    }

    .col-2 {
      margin-bottom: var(--gap-bottom);
      order: 2;

      ${getMQ('desktop')} {
        margin-bottom: 0;
        width: 50%;
        text-align: right;
      }
    }

    .col-3 {
      position: relative;
      order: 1;

      ${getMQ('desktop')} {
        order: 3;
        width: 25%;
        margin-bottom: 0;
      }
    }
  `,
};

const currentYear = new Date().getFullYear();

interface FooterProps {
  resume?: boolean;
  col2?: JSX.Element;
}

const Footer: React.FC<FooterProps> = ({ resume = true, col2 }) => {
  return (
    <footer css={styles.root}>
      <div className="col-1">
        {resume ? (
          <div className="resume">
            <a href="/assets/resume.pdf" target="_blank">
              <h5>
                my resume <Download />
              </h5>
              <span className="small">
                checkout my resume if you wanna take a closer look at my
                experience over the years
              </span>
            </a>
          </div>
        ) : null}
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
            <span className="small">
              checkout my github account where I commit the code for my personal
              projects
            </span>
          </a>
        </div>
        <div className="copyright xsmall">
          © {currentYear},{' '}
          <Link href="/">
            <a style={{ color: 'var(--c-light)' }}>juliosoto.dev</a>
          </Link>{' '}
          All rights reserved
        </div>
      </div>
      <div className="col-2">{col2 ? col2 : null}</div>
      <div className="col-3">
        <ScrollToTop />
      </div>
    </footer>
  );
};

export default Footer;
