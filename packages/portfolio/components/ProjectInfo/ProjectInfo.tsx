import * as React from 'react';
import { css } from '@emotion/react';
import { ExternalLink, Github } from '@juliosoto/components/Icons';
import { Tags } from '@juliosoto/components';
import { getMQ } from '@juliosoto/utils/styles';

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
        width: 60%;
        margin-right: 1rem;
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
        width: 40%;
        margin-left: 1rem;
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
    links: {
      github?: string;
      website?: string;
    };
  };
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  projectInfoData: {
    projectInfo,
    technologyDescription,
    technologyUsed,
    links,
  } = {},
}) => {
  return (
    <div css={styles.root}>
      <div className="projectInfo">
        <h3>the project</h3>
        <p dangerouslySetInnerHTML={{ __html: projectInfo }}></p>
        {links ? (
          <div className="externalLinks">
            {links?.website ? (
              <a href={links.website}>
                <ExternalLink />
              </a>
            ) : null}
            {links?.github ? (
              <a href={links.github}>
                <Github />
              </a>
            ) : null}
            <div className="xsmall externalLinks-info">
              If you are interested, please do click on the icon
              {links?.github && links?.website ? 's' : ''} to check the website
              {links?.github ? 'and the code in github' : ''}
            </div>
          </div>
        ) : null}
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
