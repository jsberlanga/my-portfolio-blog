import * as React from 'react';
import { css } from '@emotion/react';
import { Tags } from '@juliosoto/components';
import { getMQ } from '@juliosoto/lib/styles';

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    margin-bottom: var(--gap-bottom);
    min-height: 25rem;

    p {
      margin-bottom: 3rem;
    }

    ${getMQ('desktop')} {
      flex-direction: row;
    }

    > div {
      padding: 1rem 0;
      border-radius: 4px;

      ${getMQ('desktop')} {
        padding: 2rem 0;
      }
    }

    .projectInfo {
      position: relative;
      margin-bottom: var(--gap-bottom);
      ${getMQ('desktop')} {
        width: 55%;
        margin-right: 8rem;
        margin-bottom: 0;
      }

      .externalLinks {
        display: flex;

        a {
          margin-right: 1.5rem;

          svg {
            width: 3rem;
            height: 3rem;
          }
        }
      }
      .externalLinks-info {
        display: block;
        ${getMQ('desktop')} {
          max-width: 20rem;
        }
      }
    }

    .technologyUsed {
      background: var(--c-dark-02);
      color: var(--c-light-02);

      padding-left: 1rem;
      padding-right: 1rem;

      ${getMQ('desktop')} {
        width: 45%;
        margin-left: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }
  `,
};

interface ProjectInfoProps {
  projectInfoData: {
    projectInfo: string;
    technologyDescription: string;
    technologyUsed: string[];
  };
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  projectInfoData: { projectInfo, technologyDescription, technologyUsed },
}) => {
  return (
    <div css={styles.root}>
      <div className="projectInfo">
        <h3>the project</h3>
        <p dangerouslySetInnerHTML={{ __html: projectInfo }}></p>
      </div>
      <div className="technologyUsed">
        <h3>technology used</h3>
        <p dangerouslySetInnerHTML={{ __html: technologyDescription }}></p>
        <Tags tags={technologyUsed} isDark={false} />
      </div>
    </div>
  );
};

export default ProjectInfo;
