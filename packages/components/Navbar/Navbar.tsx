/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Github } from '../Icons';
import ThemeSwitch from '../ThemeSwitch';
import { getMQ } from '@juliosoto/utils/styles';

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
        place-items: start;
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
        <Link href="https://blog.juliosoto.dev/?theme=dark">
          <a>blog</a>
        </Link>
        <a href="#" onClick={() => handleClick('#work')}>
          work
        </a>
        <a href="#" onClick={() => handleClick('#about')}>
          about
        </a>
        <a href="#" onClick={() => handleClick('#contact')}>
          contact
        </a>
        <a
          href="https://github.com/jsberlanga"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a href="#">
          <ThemeSwitch />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
