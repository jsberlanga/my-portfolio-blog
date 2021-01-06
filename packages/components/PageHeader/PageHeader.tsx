/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Tags } from '@juliosoto/components';
import { variants, transition, getMQ } from '@juliosoto/lib/styles';
import { motion } from 'framer-motion';

const styles = {
  root: css`
    text-align: center;
    max-width: var(--content-width);
    margin: var(--gap-unit) auto var(--gap-bottom);

    .title {
      overflow: hidden;
      margin-bottom: var(--gap-unit-s);

      span {
        min-width: 4px;

        ${getMQ('tablet-up')} {
          min-width: 12px;
        }
      }
    }

    .description {
      font-weight: 200;
      color: var(--c-neutral);
      margin-bottom: var(--gap-unit-s);
      overflow: hidden;
    }
  `,
};

interface PageHeaderProps {
  title: JSX.Element;
  description?: JSX.Element | string;
  tags?: string[];
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  tags = [],
}) => {
  return (
    <div css={styles.root}>
      <motion.h2
        className="title"
        variants={variants.container}
        initial="initial"
        animate="animate"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.div className="description">{description}</motion.div>
      ) : null}
      {tags.length ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ...transition, delay: 1.15 },
          }}
        >
          <Tags tags={tags} isCentered />
        </motion.div>
      ) : null}
    </div>
  );
};

export default PageHeader;
