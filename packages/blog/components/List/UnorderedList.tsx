import { css } from '@emotion/react';
import { getMQ } from '@juliosoto/lib/styles';
import * as React from 'react';

interface UnorderedListProps {
  children: React.ReactNode;
}

const styles = css`
  margin: var(--gap-unit-s) 0;

  li {
    list-style-type: initial;
    margin-left: var(--gap-unit-xs);
    margin-bottom: var(--gap-unit-xs);

    ${getMQ('desktop')} {
      margin-left: var(--gap-unit-s);
    }
  }
`;

const UnorderedList: React.FC<UnorderedListProps> = ({ children }) => {
  return <ul css={styles}>{children}</ul>;
};

export default UnorderedList;
