/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Tags } from '@juliosoto/components';

const styles = {
  root: css`
    text-align: center;
    max-width: var(--content-width);
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

interface PageHeaderProps {
  title: JSX.Element;
  description?: string;
  tags?: string[];
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  tags = [],
}) => (
  <div css={styles.root}>
    <div className="title">{title}</div>
    {description ? <p className="description">{description}</p> : null}
    {tags.length ? <Tags tags={tags} isCentered /> : null}
  </div>
);

export default PageHeader;
