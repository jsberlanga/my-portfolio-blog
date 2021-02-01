import { cssVariables } from './cssVariables';
import { resets } from './resets';
import { typeScale } from './typescale';

export const globalStyles = `
  ${typeScale};
  ${cssVariables};
  ${resets};


  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400 600 800;
    font-display: optional;
    src: url(/fonts/Inter.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  body {
    color: var(--c-text);
    background-color: var(--c-background);
    font-family: Inter, 'sans-serif';
  
    &::after {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      background-image: url(/images/common/noise.webp);
      opacity: 0.04;
      z-index: 999;
      pointer-events: none;
    }
  }

  .imageWrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
