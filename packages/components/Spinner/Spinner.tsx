/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { getMQ } from '@juliosoto/lib/styles';

const styles = {
  root: css`
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 2rem;
    right: 1rem;

    ${getMQ('desktop')} {
      width: 40px;
      height: 40px;
      bottom: 2rem;
      right: 2rem;
    }

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 30px;
      height: 30px;
      border: 2px solid var(--c-special);
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: var(--c-special) transparent transparent transparent;

      ${getMQ('desktop')} {
        width: 40px;
        height: 40px;
        border: 3px solid var(--c-special);
        border-color: var(--c-special) transparent transparent transparent;
      }

      &::nth-of-type(1) {
        animation-delay: -0.45s;
      }
      &::nth-of-type(2) {
        animation-delay: -0.3s;
      }
      &::nth-of-type(3) {
        animation-delay: -0.15s;
      }
    }

    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
};

const Spinner = () => (
  <div css={styles.root} className="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Spinner;
