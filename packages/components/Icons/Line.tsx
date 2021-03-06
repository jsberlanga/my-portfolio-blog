/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { getMQ } from '@juliosoto/lib/styles';
import { IconProps } from './types';

const styles = css`
  position: absolute;
  left: 0;
  width: 99%;
  bottom: -1.5rem;

  ${getMQ('desktop')} {
    bottom: -2.25rem;
  }
`;

type LineProps = Pick<IconProps, 'fill'>;

const Line: React.FC<LineProps> = ({ fill = 'var(--c-special)' }) => (
  <svg
    css={styles}
    viewBox="0 0 461 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.01924 9.5006C231 -12 233 25 463 9.50058"
      stroke={fill}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export default Line;
