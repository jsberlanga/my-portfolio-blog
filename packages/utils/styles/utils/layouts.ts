import { getMQ } from './breakpoints';

export const fullPageWidthLayout = `
  width: calc(100% + var(--gap-unit-s) * 2);
  margin-left: calc(var(--gap-unit-s) * -1);

  ${getMQ('mobile-up')} {
    width: calc(100% + var(--gap-unit) * 2);
    margin-left: calc(var(--gap-unit) * -1);
  }

  ${getMQ('desktop')} {
    width: calc(100% + var(--gap-unit-l) * 2);
    margin-left: calc(var(--gap-unit-l) * -1);
  }

  ${getMQ('panorama')} {
    width: calc(100% + var(--gap-unit-xl) * 2);
    margin-left: calc(var(--gap-unit-xl) * -1);
  }
`;
