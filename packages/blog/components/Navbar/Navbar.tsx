import * as React from 'react';
import Navbar from '@juliosoto/components/Navbar';

const BlogNavbar = () => {
  return (
    <Navbar
      links={
        <React.Fragment>
          <li>
            <a href="https://portfolio.juliosoto.dev/">posts</a>
          </li>
          <li>
            <a href="https://portfolio.juliosoto.dev/">portfolio</a>
          </li>
        </React.Fragment>
      }
    />
  );
};

export default BlogNavbar;
