/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IconProps } from './types';

const styles = css`
  margin-right: 10px;
`;

type GoNextProps = Pick<IconProps, 'fill'>;

const GoNext: React.FC<GoNextProps> = ({ fill = 'var(--c-text)' }) => (
  <svg
    css={styles}
    width="20px"
    height="12px"
    viewBox="0 0 20 14"
    version="1.1"
  >
    <title>go next</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Artboard-Copy-4"
        transform="translate(-1132.000000, -2428.000000)"
        fill={fill}
        fillRule="nonzero"
      >
        <g id="Group-23" transform="translate(956.000000, 2421.000000)">
          <path
            d="M196,13.8178643 C195.986111,13.6651356 195.920152,13.4612342 195.814822,13.3468671 L190.259268,7.24632122 C190.016927,6.92754314 189.517272,6.92859817 189.209749,7.18931351 C188.902227,7.45002885 188.878783,7.91327119 189.148153,8.18831561 L193.627323,13.1001543 L176.740741,13.1001543 C176.331667,13.1001543 176,13.4214731 176,13.8178643 C176,14.2142555 176.331667,14.5355743 176.740741,14.5355743 L193.627323,14.5355743 L189.148157,19.4474022 C188.854231,19.7224287 188.93689,20.1941077 189.244416,20.4548159 C189.551938,20.715524 190.016931,20.6969353 190.259271,20.3893966 L195.814826,14.2888615 C195.963311,14.1330108 195.991641,13.9638824 196,13.8178643 L196,13.8178643 Z"
            id="Path"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

export default GoNext;
