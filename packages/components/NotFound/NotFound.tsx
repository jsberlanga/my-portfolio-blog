/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RobotLost, GoBack } from '@juliosoto/components/Icons/';
import { useRouter } from 'next/router';

const styles = css`
  position: relative;
  margin: var(--gap-unit) auto;
  width: 100%;
  text-align: center;

  h5 {
    margin-bottom: var(--gap-unit);

    svg {
      height: 6rem;
    }
  }

  button {
    border: 1px solid var(--c-light);
    background: var(--c-dark);
    padding: 15px 25px;
    color: var(--c-light);
    font-size: 1rem;
    border-radius: 2px;
  }

  .imageWrapper {
    height: 20rem;
  }
`;

const NotFound = () => {
  const router = useRouter();
  return (
    <div css={styles}>
      <h5>
        <RobotLost /> not sure how you ended up here...
      </h5>
      <button onClick={() => router.back()}>
        <GoBack />
        go back
      </button>
    </div>
  );
};

export default NotFound;
