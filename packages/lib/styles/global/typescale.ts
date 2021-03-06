export const typeScale = `
  @font-face {
    font-family: Inter, 'sans serif';
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url(/fonts/Inter.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

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
    font-weight: 800;
    font-size: clamp(5rem, 10vw, 7rem);
  }
  
  h2 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  
  h3 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 2rem;
  }
  
  h4, h5 {
    font-size: clamp(1.25rem, 5vw, 2.5rem);
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
`;
