/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';

const styles = css`
  color: var(--c-special);
  display: block;
`;

const Timestamp: FC = ({ children }) => (
  <time css={styles} className="small">
    {children}
  </time>
);

export default Timestamp;
