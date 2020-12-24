import { css } from '@emotion/react';
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Github } from '@components/Icons/Github';
import { getMQ } from '@lib/styles';
import ThemeSwitch from '@components/ThemeSwitch';

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
        <button onClick={() => handleClick('#work')}>work</button>
        <button onClick={() => handleClick('#about')}>about</button>
        <button onClick={() => handleClick('#contact')}>contact</button>
        {/* <a
          href="https://github.com/jsberlanga"
          target="_blank"
          rel="noreferrer"
        > */}
        <Github />
        {/* </a> */}
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
