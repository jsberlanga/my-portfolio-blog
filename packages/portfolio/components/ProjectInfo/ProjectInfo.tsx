import { ExternalLink, Github } from '@juliosoto/components/Icons';
import Tags from '@juliosoto/components/Tags';
import { css } from '@emotion/react';
import { getMQ } from '@juliosoto/utils/styles';
import * as React from 'react';

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
      ${getMQ('desktop')} {
        width: 60%;
        margin-right: 1rem;
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
    }

    .technologyUsed {
      background: var(--c-dark-02);
      color: var(--c-light-02);

      padding-left: 1rem;
      padding-right: 1rem;

      ${getMQ('desktop')} {
        width: 40%;
        margin-left: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }
  `,
};

interface ProjectInfoProps {
  projectInfo: string;
  technologyUsed: string[];
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  projectInfo,
  technologyUsed = [],
}) => (
  <div css={styles.root}>
    <div className="projectInfo">
      <h3>the project</h3>
      <p>
        {projectInfo} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Laudantium a fugit veritatis officia explicabo esse iure, tempore ipsa
        nam quo!
      </p>
      <div className="externalLinks">
        <a href="https://google.com">
          <ExternalLink />
        </a>
        <a href="https://github.com">
          <Github />
        </a>
      </div>
      <div className="xsmall">
        you are welcome to check the website and the code
      </div>
    </div>
    <div className="technologyUsed">
      <h3>technology used</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nobis
        cum delectus pariatur quisquam libero nam magnam sit reprehenderit
        neque.
      </p>
      <Tags tags={technologyUsed} isDark={false} />
    </div>
  </div>
);

export default ProjectInfo;
