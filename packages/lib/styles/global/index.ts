import { cssVariables } from './cssVariables';
import { resets } from './resets';
import { typeScale } from './typescale';
import { utilityClasses } from './utilityClasses';

export const globalStyles = `
  ${typeScale};
  ${cssVariables};
  ${resets};
  ${utilityClasses};

  body {
    color: var(--c-text);
    background-color: var(--c-background);
  }
`;

export { noisyBackground } from './noisyBackground';
