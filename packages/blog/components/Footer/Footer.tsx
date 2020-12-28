import * as React from 'react';
import { Footer } from '@juliosoto/components';
import { Github } from '@juliosoto/components/Icons';

const BlogFooter = () => (
  <Footer
    columns={{
      LeftColumn: (
        <div className="github">
          <a
            href="https://github.com/jsberlanga"
            target="_blank"
            rel="noreferrer"
          >
            <h5>
              my github
              <Github fill="var(--c-light)" size="2.5rem" />
            </h5>
            <span className="small">checkout the source code in github</span>
          </a>
        </div>
      ),
    }}
  />
);

export default BlogFooter;
