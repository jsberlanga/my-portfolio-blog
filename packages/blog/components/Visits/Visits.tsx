import * as React from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const styles = {
  root: css``,
};

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } },
};

interface VisitsProps {
  visits: number;
  slug: string;
}

const Visits: React.FC<VisitsProps> = ({ visits, slug }) => {
  React.useEffect(() => {
    const handleVisit = async () => {
      try {
        const response = await fetch('api/visits', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug }),
        });
        if (response.status === 200) {
          const data = await response.json();

          return data;
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleVisit();
  }, [slug]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="small"
      css={styles.root}
    >
      {visits} views
    </motion.div>
  );
};

export default React.memo(Visits);
