import * as React from 'react';

interface StarProps {
  fill?: string;
}

const Star: React.FC<StarProps> = ({ fill = '#ffd56b' }) => (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 48 48"
    xmlSpace="preserve"
    stroke="none"
    fill={fill}
    width="4rem"
    height="4rem"
  >
    <path d="M32.4,39.2c-0.4,0-0.8-0.1-1.1-0.3l-7.1-3.7c-0.1-0.1-0.2-0.1-0.4,0L16.7,39c-0.8,0.4-1.8,0.4-2.5-0.2  c-0.7-0.5-1.1-1.4-0.9-2.3l1.4-7.9c0-0.1,0-0.3-0.1-0.3l-5.7-5.6c-0.7-0.6-0.9-1.6-0.6-2.4c0.3-0.9,1-1.5,1.9-1.6l7.9-1.1  c0.1,0,0.2-0.1,0.3-0.2l3.5-7.2c0.4-0.8,1.2-1.3,2.1-1.3s1.7,0.5,2.1,1.3c0,0,0,0,0,0l3.5,7.2c0.1,0.1,0.2,0.2,0.3,0.2l7.9,1.1  c0.9,0.1,1.6,0.8,1.9,1.6c0.3,0.9,0.1,1.8-0.6,2.4l-5.7,5.6c-0.1,0.1-0.1,0.2-0.1,0.3l1.4,7.9c0.2,0.9-0.2,1.8-0.9,2.3  C33.3,39.1,32.9,39.2,32.4,39.2z M24,33.2c0.4,0,0.8,0.1,1.1,0.3l7.1,3.7c0.2,0.1,0.3,0,0.4,0c0.1-0.1,0.2-0.2,0.2-0.4l-1.4-7.9  c-0.1-0.8,0.1-1.6,0.7-2.1l5.7-5.6c0.1-0.1,0.1-0.3,0.1-0.4c0-0.1-0.1-0.2-0.3-0.3l-7.9-1.1c-0.8-0.1-1.4-0.6-1.8-1.3L24.3,11h0  c-0.1-0.2-0.3-0.2-0.3-0.2s-0.3,0-0.3,0.2l-3.5,7.2c-0.3,0.7-1,1.2-1.8,1.3l-7.9,1.1c-0.2,0-0.3,0.2-0.3,0.3c0,0.1-0.1,0.2,0.1,0.4  l5.7,5.6c0.6,0.5,0.8,1.3,0.7,2.1l-1.4,7.9c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.1,0.4,0l7.1-3.7C23.2,33.3,23.6,33.2,24,33.2z" />
  </svg>
);

export default Star;
