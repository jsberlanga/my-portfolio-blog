import * as React from 'react';

const Hamburger = ({ handleClick }) => (
  <svg
    onClick={handleClick}
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 100 90"
    fill="var(--c-text)"
    width="2.4rem"
    height="2.4rem"
  >
    <g>
      <rect x="20" y="46" width="40" height="4" />
      <rect x="20" y="25" width="60" height="4" />
      <rect x="20" y="66" width="20" height="4" />
    </g>
  </svg>
);

export default Hamburger;
