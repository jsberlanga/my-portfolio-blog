/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { Github, ScrollToTop, Download } from '@juliosoto/components/Icons';
import { getMQ } from '@juliosoto/utils/styles';

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--gap-unit) calc(var(--gap) + var(--grid-gap));
    background: var(--c-background-02);
    color: var(--c-text-02);

    ${getMQ('desktop')} {
      flex-direction: row;
    }

    .col {
      position: relative;
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
        width: 40%;
        margin: 0 1rem 0 0;
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
        width: 40%;
        text-align: right;
        margin: 0 1rem 0;
      }
    }

    .col-3 {
      position: relative;
      order: 1;

      ${getMQ('desktop')} {
        order: 3;
        width: 20%;
        margin: 0 0 0 1rem;
      }
    }
  `,
};

const currentYear = new Date().getFullYear();

export interface FooterProps {
  columns?: {
    LeftColumn?: JSX.Element;
    MiddleColumn?: JSX.Element;
  };
}

const DefaultLeftColumn = () => (
  <React.Fragment>
    <div className="resume">
      <a href="/assets/resume.pdf" target="_blank">
        <h5>
          my resume <Download />
        </h5>
        <span className="small">
          checkout my resume if you wanna take a closer look at my experience
          over the years
        </span>
      </a>
    </div>
    <div className="github">
      <a href="https://github.com/jsberlanga" target="_blank" rel="noreferrer">
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
  </React.Fragment>
);

const Footer = ({
  columns: { LeftColumn = <DefaultLeftColumn />, MiddleColumn = null } = {},
}: FooterProps): JSX.Element => (
  <footer css={styles.root}>
    <div className="col col-1">{LeftColumn}</div>
    <div className="col col-2">{MiddleColumn}</div>
    <div className="col col-3">
      <ScrollToTop />
    </div>
  </footer>
);

Footer.LeftColumn = DefaultLeftColumn;

export default Footer;
