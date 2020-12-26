import Tags from '@juliosoto/components/Tags';
import { css } from '@emotion/react';
import * as React from 'react';

const styles = {
  root: css`
    text-align: center;
    max-width: 50rem;
    margin: var(--gap-unit) auto var(--gap-bottom);

    .title {
      margin-bottom: var(--gap-unit-s);
    }

    .description {
      font-weight: 200;
      color: var(--c-neutral);
      margin-bottom: var(--gap-unit-s);
    }
  `,
};

interface ProjectHeaderProps {
  title: string;
  description: string;
  tags?: string[];
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  description,
  tags = [],
}) => (
  <div css={styles.root}>
    <h2 className="title">{title}</h2>
    <p className="description">{description}</p>
    <Tags tags={tags} isCentered />
  </div>
);

export default ProjectHeader;
