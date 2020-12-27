/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { getMQ } from '@juliosoto/utils/styles';
import { Github } from '../Icons';
import ThemeSwitch from '../ThemeSwitch';

const styles = {
  root: css`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--gap);

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
        align-items: flex-start;

        > * {
          margin-left: 1rem;
        }
      }
    }
  `,
};

interface NavbarProps {
  links: JSX.Element;
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
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
    </nav>
  );
};

export default Navbar;
