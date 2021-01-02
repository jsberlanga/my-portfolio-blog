import * as React from 'react';

interface StarProps {
  fill?: string;
  votes?: number;
}

const Star: React.FC<StarProps> = ({
  fill = 'var(--c-special)',
  votes = 0,
}) => (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
    fill="none"
    stroke={fill}
    strokeWidth="5px"
    width="45px"
    height="45px"
  >
    <clipPath id="myClip">
      <rect
        width="100px"
        height="100px"
        x="0px"
        y="0px"
        style={{ transform: `translateY(${100 - votes * 10}%)` }}
      />
    </clipPath>
    <path
      id="star"
      d="M69.564,32.079l19.241,2.773c5.456,0.786,7.642,7.488,3.7,11.34L78.6,59.777c-1.566,1.53-2.278,3.732-1.906,5.889  l3.309,19.156c0.938,5.432-4.759,9.582-9.642,7.023L53.144,82.82c-1.939-1.016-4.254-1.014-6.19,0.007l-17.196,9.067  c-4.876,2.571-10.584-1.566-9.659-7l3.263-19.164c0.367-2.158-0.35-4.359-1.92-5.885L7.507,46.293  c-3.952-3.843-1.782-10.55,3.673-11.349l19.234-2.818c2.166-0.317,4.037-1.68,5.003-3.644L44,11.039  c2.434-4.946,9.483-4.955,11.928-0.014l8.624,17.422C65.523,30.408,67.397,31.767,69.564,32.079z"
    />
    <use clipPath="url(#myClip)" xlinkHref="#star" fill={fill} />
  </svg>
);

export default Star;
