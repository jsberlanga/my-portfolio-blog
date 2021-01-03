/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import { Github } from '../Icons';
import ThemeSwitch from '../ThemeSwitch';
import { useOutsideRef } from '@juliosoto/lib/hooks';

const styles = css`
  background: var(--c-background-02);
  height: 100vh;
  width: 160px;
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  padding: var(--gap);
  text-align: right;
  animation: slideIn 400ms forwards ease-in-out;
  transform: translateX(300px);

  > li {
    height: 2.4rem;
    margin-bottom: 1rem;
    a {
      font-size: 18px;
      height: 100%;
      color: var(--c-text-02);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(500px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

interface MenuProps {
  handleClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ children, handleClick }) => {
  const menuRef = React.useRef<HTMLDivElement>(null);
  useOutsideRef(menuRef, handleClick);

  return (
    <div ref={menuRef} css={styles}>
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
