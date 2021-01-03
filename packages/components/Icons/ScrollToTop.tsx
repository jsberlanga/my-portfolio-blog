/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { getMQ } from '@juliosoto/lib/styles';

const styles = css`
  cursor: pointer;
  width: 3rem;
  float: right;

  ${getMQ('desktop')} {
    position: absolute;
    width: 3rem;
    bottom: 0;
    right: 0;
  }
`;

const handleScrollToTop = () =>
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });

const ScrollToTop: React.FC = () => {
  return (
    <svg
      onClick={handleScrollToTop}
      fill="var(--c-light)"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 100 100"
      viewBox="20 0 60 80"
      x="0px"
      y="0px"
      css={styles}
    >
      <title>scroll to top</title>
      <path d="m51.2 33.7c-.1-.1-.2-.2-.3-.3 0 0-.1 0-.1-.1-.1 0-.1-.1-.2-.1h-.1c-.1 0-.1-.1-.2-.1s-.1 0-.2 0-.1 0-.2 0-.1 0-.2 0-.1 0-.2 0-.2 0-.3.1h-.1c-.1 0-.2.1-.3.2 0 0 0 0-.1 0-.1.1-.2.2-.3.3l-18.2 18.1c-.8.8-.8 2 0 2.8s2 .8 2.8 0l14.7-14.7v41.2c0 1.1.9 2 2 2s2-.9 2-2v-41.2l14.7 14.7c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8z" />
      <path d="m69.2 16.9h-38.4c-1.1 0-2 .9-2 2s.9 2 2 2h38.4c1.1 0 2-.9 2-2s-.9-2-2-2z" />
    </svg>
  );
};

export default ScrollToTop;
