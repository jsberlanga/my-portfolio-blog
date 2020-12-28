/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { getMQ } from '@juliosoto/utils/styles';
import { Github, Hamburger, CloseMenu } from '../Icons';
import ThemeSwitch from '../ThemeSwitch';
import Menu from '../Menu';
import { useCallback, useState } from 'react';
import * as React from 'react';

const styles = {
  root: css`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--content-width);
    margin: 0 auto;
    z-index: 10;

    .name {
      display: flex;
      align-items: flex-end;
      font-weight: 600;
      letter-spacing: 0.5px;

      svg {
        height: 2.25rem;
        margin-right: 4px;
      }
    }

    .links {
      display: none;

      ${getMQ('desktop')} {
        display: flex;
        align-items: center;
        font-size: 18px;
        line-height: 1.05em;

        > * {
          margin-left: 1rem;
        }
      }
    }
  `,
  menu: css`
    font-size: 18px;
    line-height: 1.05em;

    ${getMQ('desktop')} {
      display: none;
    }
  `,
};

export interface NavbarProps {
  links?: JSX.Element;
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(
    () => setMenuOpen((menuOpen) => !menuOpen),
    [],
  );

  return (
    <React.Fragment>
      <nav css={styles.root}>
        <Link href="/">
          <a className="name small">julio soto</a>
        </Link>
        <ul className="links">
          {links}
          <li>
            <a
              href="https://github.com/jsberlanga"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
        <a href="#" css={styles.menu}>
          {menuOpen ? (
            <CloseMenu handleClick={toggleMenu} />
          ) : (
            <Hamburger handleClick={toggleMenu} />
          )}
        </a>
      </nav>
      {menuOpen && <Menu>{links}</Menu>}
    </React.Fragment>
  );
};

export default Navbar;
