import { getMQ } from '../utils';

export const cssVariables = `
  :root {
    // COLORS
    --c-dark-01: #303742;
    --c-dark-02: #515d6f;

    --c-light-01: #e7e9ec;
    --c-light-02: #f2f3f5;
    
    --c-neutral-01: #636c7a;
    --c-neutral-02: #a0a7b2;

    --c-special-01: #75908b;
    --c-special-02: #adbdbb;


    // UNITS
    --gap-unit-xs: 1rem;
    --gap-unit-s: 2rem;
    --gap-unit: 4rem;
    --gap-unit-l: 6rem;
    --gap-unit-xl: 10rem;

    
    ${getMQ('small')} {
      --gap: var(--gap-unit-xs);
      --gap-bottom: var(--gap-unit);
    }
    ${getMQ('small-up')} {
      --gap: var(--gap-unit-s);
      --gap-bottom: var(--gap-unit);
    }
    ${getMQ('tablet')} {
      --gap: var(--gap-unit);
      --gap-bottom: var(--gap-unit);
    }
    ${getMQ('desktop')} {
      --gap: var(--gap-unit-l);
      --gap-bottom: var(--gap-unit-xl);
    }
    ${getMQ('panorama')} {
      --gap: var(--gap-unit-xl);
      --gap-bottom: var(--gap-unit-xl);
    }
    
    --header-height: 6rem;
    --footer-height: 6rem;

    --c-light: var(--c-light-01);
    --c-dark: var(--c-dark-01);
    --c-special: var(--c-special-01);
    --c-neutral: var(--c-neutral-01);
    
    --c-text: var(--c-dark);
    --c-text-02: var(--c-light);

    --c-background: var(--c-light);
    --c-background-02: var(--c-dark);
  }
  
  [data-theme="dark"] {
    --c-text: var(--c-light);
    --c-text-02: var(--c-light-02);

    --c-background: var(--c-dark);
    --c-background-02: var(--c-dark-02);
    
    --c-special: var(--c-special-02);

    --c-neutral: var(--c-neutral-02);
  }
`;
