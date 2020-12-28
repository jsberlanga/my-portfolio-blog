import { css } from '@emotion/react';
import { getMQ } from '@juliosoto/utils/styles';
import * as React from 'react';

const styles = {
  root: css`
    margin-bottom: var(--gap-unit);

    .section-label {
      font-weight: 800;
      position: relative;
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
