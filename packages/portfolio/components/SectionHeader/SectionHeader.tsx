import { css } from '@emotion/react';
import { getMQ } from '@juliosoto/utils/styles';
import * as React from 'react';
import { Interface } from 'readline';

const styles = {
  root: css`
    margin-bottom: var(--gap-unit);

    .section-label {
      font-weight: 800;
      position: relative;

      svg {
        height: 4rem;

        ${getMQ('desktop')} {
          height: 6rem;
        }
      }
    }

    .section-subtitle {
      font-size: 0.8rem;
      margin-bottom: var(--gap-unit-s);

      ${getMQ('desktop')} {
        font-size: 1rem;
      }
    }
  `,
};

interface SectionHeaderProps {
  label: JSX.Element;
  subtitle: JSX.Element | string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, subtitle }) => {
  return (
    <div css={styles.root}>
      <h2 className="section-label">{label}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
