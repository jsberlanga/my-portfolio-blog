import * as React from 'react';

interface CloseMenuProps {
  handleClick: () => void;
}

const CloseMenu: React.FC<CloseMenuProps> = ({ handleClick }) => (
  <svg
    onClick={handleClick}
    version="1.1"
    x="0px"
    y="0px"
    viewBox="2 2 20 20"
    xmlSpace="preserve"
    fill="var(--c-text-02)"
    width="2.4rem"
    height="2.4rem"
    style={{ cursor: 'pointer' }}
  >
    <g>
      <polygon points="18.010437,6.6966553 17.3032837,5.989563 12,11.2928467 6.6967163,5.989563 5.989563,6.6966553    11.2929077,11.999939 5.989563,17.3032837 6.6967163,18.010376 12,12.7070923 17.3032837,18.010376 18.010437,17.3032837    12.7071533,11.999939  " />
    </g>
  </svg>
);

export default CloseMenu;
