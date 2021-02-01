import * as React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { getMQ, transition } from '@juliosoto/lib/styles';
import { ProjectPreviewType } from '@juliosoto/lib/types';
import { useThemeState } from '@juliosoto/lib/context';
import { PROJECTS } from '@juliosoto/lib/constants';
import { motion } from 'framer-motion';

const getProjectPreviewStyles = () =>
  PROJECTS.map(
    (project) => `.${project} {
        background: var(--${project}-bg);
        .project--type {
          color: var(--${project}-color);
          &__label {
            background-color: var(--label-bg);
            color: var(--${project}-color);
          }
        }
      }
  `,
  );

const styles = {
  root: css`
    position: relative;
    margin-bottom: var(--gap-bottom);
  `,
  projectsWrapper: css`
    .heading {
      margin-bottom: var(--gap-unit-s);

      ${getMQ('desktop')} {
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }

      .title,
      .subtitle {
        margin: 0 0.5rem;
        line-height: 1.4em;

        ${getMQ('desktop')} {
          width: 60%;
        }
      }

      .title {
        font-weight: 600;

        ${getMQ('desktop')} {
          text-align: right;
        }
      }

      .subtitle {
        margin-top: 2px;
        color: var(--c-neutral);
        text-align: left;
      }
    }

    .projects {
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 1.5rem;
      grid-row-gap: 1.5rem;

      ${getMQ('desktop')} {
        grid-template-columns: repeat(2, 1fr);
      }

      &.light-theme,
      &.dark-theme {
        --landing: #2e3b38;

        --zaprojektujemy-studio-bg: #caa2a5;
        --zaprojektujemy-studio-color: #573f41;
        --byas-no-bg: #a7bdb7;
        --byas-no-color: #43534f;
        --my-portfolio-bg: #ccb7a3;
        --my-portfolio-color: #463b31;
        --duda-transport-bg: #a9b8c7;
        --duda-transport-color: #373e46;
        --label-bg: rgba(0, 0, 0, 0.1);
      }

      /*  &.dark-theme {
        --zaprojektujemy-studio-color: #e7d4d6;
        --zaprojektujemy-studio-bg: #755457;
        --byas-no-color: #cddbd8;
        --byas-no-bg: #5a6e69;
        --my-portfolio-color: #d6cdc4;
        --my-portfolio-bg: #556052;
        --duda-transport-color: #cdd8e4;
        --duda-transport-bg: #404b57;
        --label-bg: rgba(255, 255, 255, 0.1);
      } */

      ${getProjectPreviewStyles()}

      .project {
        cursor: pointer;
        position: relative;
        min-height: 20rem;
        padding: var(--gap);

        ${getMQ('desktop')} {
          height: 39rem;
          padding: 0;
        }

        ${getMQ('panorama')} {
          min-height: 75vh;
          height: 45rem;
        }

        &--type {
          ${getMQ('desktop')} {
            position: absolute;
            bottom: var(--gap-unit);
            left: var(--gap-unit);
            width: 60%;
          }

          &__label {
            display: inline-block;
            padding: 0 15px;
            font-size: 12px;
            font-weight: 400;
            line-height: 32px;
            border-radius: 30px;
            text-align: center;
            width: fit-content;
            margin: 0 0.4rem;

            &:first-of-type {
              margin-left: 0;
            }
            &:last-of-type {
              margin-right: 0;
            }
          }

          &__title {
            font-weight: 600;
            margin: 0.5rem 0;
          }
        }

        &--image {
          position: relative;
          margin: var(--gap) 0 var(--gap-bottom);

          ${getMQ('desktop')} {
            width: 80%;
            margin: var(--gap-unit-l) auto;
          }

          &::after {
            position: absolute;
            width: calc(100% - 19.5%);
            height: calc(100% - 24.5%);
            top: 6%;
            left: 9.45%;
            border-radius: 8px;
            content: '';
            background-image: url(images/common/noise.webp);
            opacity: 0.2;
            z-index: 8;
            pointer-events: none;
          }
        }

        &:hover {
          .project--image {
            &::after {
              background-image: url(images/common/noise-hover.webp);
              filter: grayscale(0.5);
              opacity: 0.5;
            }
          }
        }
      }
    }
  `,
};

interface ProjectsPreviewProps {
  projects: ProjectPreviewType[];
}

const ProjectsPreview: React.FC<ProjectsPreviewProps> = ({ projects }) => {
  const theme = useThemeState();
  return (
    <div css={styles.root} id="work">
      <div css={styles.projectsWrapper}>
        <div className="heading">
          <div className="title">Selected Work</div>
          <div className="subtitle small">
            Find below somes projects
            <br />I have had the chance to work on!
          </div>
        </div>
        <div className={`projects ${theme}-theme`}>
          {projects.map(({ title, slug, imagePreview, tags }, idx) => (
            <Link href={`/project/${slug}`} key={title}>
              <motion.div
                className={`project ${slug}`}
                initial={
                  idx % 2 === 0 ? { x: -50, opacity: 0 } : { x: 50, opacity: 0 }
                }
                animate={{ x: 0, opacity: 1 }}
                transition={{ ...transition, delay: 0.15 }}
              >
                <div className="project--image">
                  <Image
                    src={imagePreview.url}
                    alt="project"
                    layout="responsive"
                    width={600}
                    height={400}
                    quality={100}
                  />
                </div>
                <div className="project--type">
                  {tags.map((tag) => (
                    <span className="project--type__label" key={tag}>
                      {tag}
                    </span>
                  ))}
                  <h3 className="project--type__title">{title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPreview;
