import * as React from 'react';
import { Navbar } from '@juliosoto/components';
import { useRouter } from 'next/router';

const PortfolioNavbar = () => {
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    selector: string,
  ) => {
    e.preventDefault();

    const element = document.querySelector(selector);

    if (!element) {
      router.push('/');
    }

    return setTimeout(() => {
      const element = document.querySelector(selector);
      if (!element) {
        return;
      }
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }, 500);
  };
  return (
    <Navbar
      links={
        <React.Fragment>
          <li>
            <a href="#" onClick={(e) => handleClick(e, '#work')}>
              /work
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleClick(e, '#about')}>
              /about
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleClick(e, '#contact')}>
              /contact
            </a>
          </li>
          {/*
          TEMPORARILY DISABLED
          <li>
            <a href="https://blog.juliosoto.dev">/blog</a>
          </li>
          */}
        </React.Fragment>
      }
    />
  );
};

export default PortfolioNavbar;
