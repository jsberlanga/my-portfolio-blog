import * as React from 'react';
import { css } from '@emotion/react';
import { Line } from '@juliosoto/components/Icons/Line';
import { getMQ } from '@juliosoto/utils/styles';

const styles = {
  root: css`
    position: relative;
    margin: var(--gap-unit) 0 var(--gap-bottom);

    ${getMQ('desktop')} {
      margin: var(--gap-unit-l) 0 var(--gap-bottom);
    }
  `,

  intro: css`
    position: relative;
    width: calc(100vw - var(--gap) * 2);
    max-width: var(--content-width);
    margin: auto;
    line-height: 1.35;
    letter-spacing: -2px;

    .greeting {
      position: relative;
      width: fit-content;
      color: var(--c-text);

      &::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 5px;
        background: var(--c-text);
        top: calc(50% + 4px);
        left: calc(100% + 1rem);
      }

      &--full {
        font-size: 2rem;

        ${getMQ('desktop')} {
          font-size: 3rem;
        }
      }
    }
  `,
};

const Hero = () => {
  return (
    <div css={styles.root}>
      <div css={styles.intro}>
        <h1 className="greeting">/hello</h1>
        <p className="greeting--full">
          I&apos;m Julio, a{' '}
          <span className="highlighted-text">
            Full Stack Developer <Line />
          </span>{' '}
          based in Kraków and this is a selection of my work.
        </p>
      </div>
    </div>
  );
};

export default Hero;
