import Navbar from '@juliosoto/components/Navbar';
import { useRouter } from 'next/router';
import * as React from 'react';

const PortfolioNavbar = () => {
  const router = useRouter();

  const handleClick = (e, selector) => {
    e.preventDefault();

    const element = document.querySelector(selector);

    if (!element) {
      return router.push(`/${selector}`);
    }

    element.scrollIntoView({
      behavior: 'smooth',
    });
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
          <li>
            <a href="https://blog.juliosoto.dev/?theme=dark">/blog</a>
          </li>
        </React.Fragment>
      }
    />
  );
};

export default PortfolioNavbar;
