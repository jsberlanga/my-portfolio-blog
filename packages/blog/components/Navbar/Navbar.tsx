import * as React from 'react';
import Navbar from '@juliosoto/components/Navbar';
import Link from 'next/link';

const BlogNavbar = () => {
  return (
    <Navbar
      links={
        <React.Fragment>
          <li>
            <Link href="/posts">
              <a>/posts</a>
            </Link>
          </li>
          <li>
            <a href="https://portfolio.juliosoto.dev/">/portfolio</a>
          </li>
        </React.Fragment>
      }
    />
  );
};

export default BlogNavbar;
