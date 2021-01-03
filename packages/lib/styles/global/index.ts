import { cssVariables } from './cssVariables';
import { resets } from './resets';
import { typeScale } from './typescale';

export const globalStyles = `
  ${typeScale};
  ${cssVariables};
  ${resets};
  
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
      background-image: url(/images/common/noise.gif);
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
