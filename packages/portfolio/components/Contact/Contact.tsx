import * as React from 'react';
import { css } from '@emotion/react';
import { RobotHi } from '@juliosoto/components/Icons';
import { SectionHeader } from '@juliosoto/components';
import { getMQ } from '@juliosoto/lib/styles';

const styles = {
  root: css`
    .section-links {
      .link {
        text-decoration: none;
        font-weight: 600;
        color: var(--c-dark);
        border-radius: 30px;
        padding: 7px 20px;
        margin-left: 10px;
        font-size: 15px;
        background-color: var(--c-light);
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        text-align: center;

        ${getMQ('desktop')} {
          display: inline-flex;
        }
      }

      &__phone {
        position: relative;

        &::after {
          position: absolute;
          font-size: 1rem;
          transition: opacity 400ms;
          bottom: -40px;
          left: 0;
          content: '+48 885 812 083';
          color: var(--c-light);
          width: max-content;
          opacity: 0;
        }
        &:hover::after,
        &:active::after,
        &:focus::after {
          opacity: 1;
        }
      }
    }
  `,
};

const Contact: React.FC = () => {
  return (
    <div css={styles.root} id="contact">
      <SectionHeader
        label={
          <React.Fragment>
            <RobotHi fill="var(--c-light)" />
            contact
          </React.Fragment>
        }
        subtitle="go ahead and say hi!"
      />
      <div className="section-links">
        <a
          className="link"
          rel="noreferrer"
          target="_blank"
          href="http://linkedin.com/in/jsberlanga"
        >
          Linkedin
        </a>
        <a
          className="link"
          rel="noreferrer"
          target="_blank"
          href="mailto:hi@juliosoto.dev"
        >
          Email
        </a>
        <div className="link section-links__phone">Phone</div>
      </div>
    </div>
  );
};

export default Contact;
