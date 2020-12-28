/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Github } from '../Icons';
import ThemeSwitch from '../ThemeSwitch';

const styles = css`
  background: var(--c-background-02);
  height: 100vh;
  width: 50%;
  position: fixed;
  z-index: 9;
  right: 0;
  top: 0;
  padding: var(--header-height) var(--gap);
  text-align: right;

  > li {
    height: 2.4rem;
    margin-bottom: 1rem;
    a {
      font-size: 18px;
      height: 100%;
      color: var(--c-text-02);
    }
  }
`;

const Menu = ({ children }) => {
  return (
    <div css={styles}>
      {children}
      <li>
        <a
          href="https://github.com/jsberlanga"
          target="_blank"
          rel="noreferrer"
        >
          <Github fill="var(--c-text-02)" size="1.8rem" />
        </a>
      </li>
      <li>
        <ThemeSwitch fill="var(--c-text-02)" />
      </li>
    </div>
  );
};

export default Menu;
