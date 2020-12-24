import { css } from '@emotion/react';
import * as React from 'react';

const styles = {
  root: css`
    display: flex;
    flex-wrap: wrap;
  `,
  centered: css`
    justify-content: center;
  `,
  tag: css`
    padding: 2px 16px;
    font-weight: 600;
    line-height: 32px;
    border-radius: 30px;
    text-align: center;
    margin: 5px 3px;
  `,
  dark: css`
    background: var(--c-dark-02);
    color: var(--c-light-02);
  `,
  light: css`
    background: var(--c-light);
    color: var(--c-dark);
  `,
};

interface TagsProps {
  tags: string[];
  isDark?: boolean;
  isCentered?: boolean;
}

const Tags: React.FC<TagsProps> = ({
  tags,
  isDark = true,
  isCentered = false,
}) => (
  <ul css={[styles.root, isCentered && styles.centered]}>
    {tags.map((tag) => (
      <li
        css={[styles.tag, isDark ? styles.dark : styles.light]}
        className="small"
        key={tag}
      >
        {tag}
      </li>
    ))}
  </ul>
);

export default Tags;
