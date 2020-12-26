/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Github } from '../Icons';
import { getMQ } from '@juliosoto/utils/styles';
import ThemeSwitch from '../ThemeSwitch';

const styles = {
  root: css`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

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
        display: grid;
        grid-auto-flow: column;
        column-gap: 1.5rem;
      }
    }
  `,
};

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleClick = (selector) => {
    const element = document.querySelector(selector);

    if (!element) {
      return router.push(`/${selector}`);
    }

    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav css={styles.root}>
      <Link href="/">
        <a className="name small">julio soto</a>
      </Link>
      <div className="links">
        <Link href="https://blog.juliosoto.dev">
          <a>blog</a>
        </Link>
        <button onClick={() => handleClick('#work')}>work</button>
        <button onClick={() => handleClick('#about')}>about</button>
        <button onClick={() => handleClick('#contact')}>contact</button>
        <a
          href="https://github.com/jsberlanga"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
