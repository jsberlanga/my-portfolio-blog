import * as React from 'react';
import { Navbar } from '@juliosoto/components';
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
            <a href="https://juliosoto.dev/">/portfolio</a>
          </li>
        </React.Fragment>
      }
    />
  );
};

export default BlogNavbar;
