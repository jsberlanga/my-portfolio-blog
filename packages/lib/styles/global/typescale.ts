import { getMQ } from '../utils';

export const typeScale = `
  html {
    font-size: 100%;
  }

  body {
    font-size: 18px;
    font-family: var(--ff-body);
    font-weight: normal;
    line-height: 1.75;
  }

  p {
    margin-bottom: 1rem;
  }

  a, button {
    text-decoration: none;
    color: var(--c-text);
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
    font-size: inherit;
    font-family: var(--ff-body);
  }

  strong {
    font-weight: 600;
  }


  ul, li {
    list-style-type: none;
  }

  h1, h2, h3, h4, h5 {
    font-family: var(--ff-title);
    line-height: 1.3em;
  }

  h1, h2 {
    font-weight: 800;
  }

  h3, h4, h5 {
    font-weight: 600;
  }

  h1 {
    margin-top: 0;
    font-size: 5rem;
    font-weight: 800;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  h4 {
    font-size: 1.65rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  .highlighted-text {
    position: relative;
    color: var(--c-special);
    font-weight: 600;
  }

  .small,
  .text_small {
    font-size: 0.9rem !important;
  }

  .xsmall,
  .text_xsmall {
    font-size: 0.8rem !important;
  }

  .special,
  .link {
    color: var(--c-special);
    font-weight: 600;
    border-bottom: 2px solid;
  }

  ${getMQ('tablet-up')} {        
    h1 {
      font-size: 6rem;
    }

    h2 {
      font-size: 3.5rem;
    }

    h3 {
      font-size: 3rem;
    }

    h4 {
      font-size: 2.5rem;
    }

    h5 {
      font-size: 2rem;
    }
  }

  ${getMQ('desktop')} {        
    h1 {
      font-size: 7rem;
    }

    h2 {
      font-size: 4rem;
    }

    h3 {
      font-size: 3rem;
    }

    h4 {
      font-size: 2.5rem;
    }

    h5 {
      font-size: 2rem;
    }
  }
`;
