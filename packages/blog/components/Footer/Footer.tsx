import * as React from 'react';
import { Footer } from '@juliosoto/components';
import { Github, RobotHi } from '@juliosoto/components/Icons';
import Link from 'next/link';

const BlogFooter = () => (
  <Footer
    columns={{
      LeftColumn: (
        <React.Fragment>
          <div className="github">
            <a
              href="https://github.com/jsberlanga/portfolio-v3/tree/main/packages/blog"
              target="_blank"
              rel="noreferrer"
            >
              <h4>
                github
                <Github fill="var(--c-light)" size="2.5rem" />
              </h4>
              <span className="small">
                feel free to checkout the source code in github and if you want
                to improve something just go ahead and make a pull request.
              </span>
            </a>
          </div>
          <div
            className="copyright xsmall"
            style={{ position: 'absolute', bottom: 0 }}
          >
            © 2021,{' '}
            <Link href="/">
              <a style={{ color: 'var(--c-light)' }}>juliosoto.dev</a>
            </Link>{' '}
            All rights reserved
          </div>
        </React.Fragment>
      ),
      MiddleColumn: (
        <div>
          <RobotHi fill="var(--c-text-02)" size="8rem" /> Hi there friend!
          <br />
          thank you for checking out my blog.
          <br />
          <br />
          <span className="xsmall">
            If you would like to get in contact with me shoot me an{' '}
            <a
              href="mailto:hi@juliosoto.dev"
              style={{
                color: 'var(--c-text-02)',
                borderBottom: '1px solid',
              }}
            >
              email
            </a>{' '}
            and I will do my best to come back to you asap.
          </span>
        </div>
      ),
    }}
  />
);

export default BlogFooter;
