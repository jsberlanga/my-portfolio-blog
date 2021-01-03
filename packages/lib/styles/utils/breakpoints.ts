type Breakpoints =
  | 'small'
  | 'mobile'
  | 'tablet'
  | 'desktop'
  | 'small-up'
  | 'mobile-up'
  | 'tablet-up'
  | 'panorama';

const breakpoints = {
  small: 350,
  mobile: 500,
  tablet: 768,
  desktop: 1024,
  panorama: 1600,
};

export const getMQ = (breakpoint: Breakpoints) => {
  switch (breakpoint) {
    case 'small':
      return `@media (max-width: ${breakpoints['small']}px)`;
    case 'mobile':
      return `@media (max-width: ${breakpoints['mobile']}px)`;
    case 'small-up':
      return `@media (min-width: ${breakpoints['small']}px)`;
    case 'mobile-up':
      return `@media (min-width: ${breakpoints['mobile']}px)`;
    case 'tablet-up':
      return `@media (min-width: ${breakpoints['tablet']}px)`;
    case 'tablet':
      return `@media (min-width: ${breakpoints['tablet']}px) and (max-width: ${breakpoints['desktop']}px)`;
    case 'desktop':
      return `@media (min-width: ${breakpoints['desktop']}px)`;
    case 'panorama':
      return `@media (min-width: ${breakpoints['panorama']}px)`;
    default:
      throw new Error('Unsupported breakpoint');
  }
};
