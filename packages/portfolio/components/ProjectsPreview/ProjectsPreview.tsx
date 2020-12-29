import * as React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { getMQ } from '@juliosoto/utils/styles';

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

      .project-duda-transport {
        background: #3b4a5a;
      }

      .project-zaprojektujemy-studio {
        background: var(--c-special-02);
      }

      .project-byas-no {
        background: #9ca0bd;
      }

      .project-my-portfolio {
        background: #3b5153;
      }

      .project-dark {
        .project {
          &--type {
            color: var(--c-light);
            &__label {
              background-color: rgba(255, 255, 255, 0.1);
              color: var(--c-light);
            }
          }
        }
      }

      .project-light {
        .project {
          &--type {
            color: var(--c-dark);
            &__label {
              background-color: rgba(0, 0, 0, 0.1);
              color: var(--c-dark);
            }
          }
        }
      }

      .project {
        cursor: pointer;
        position: relative;
        min-height: 20rem;
        padding: var(--gap);

        ${getMQ('desktop')} {
          min-height: 80vh;
          height: 42rem;
          padding: 0;
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
            margin: var(--gap-unit-l) var(--gap-unit);
          }

          &::after {
            position: absolute;
            width: calc(100% - 19.25%);
            height: calc(100% - 25%);
            top: 6.25%;
            left: 9.55%;
            border-radius: 8px;
            content: '';
            background-image: url(images/common/noise.gif);
            opacity: 0.2;
            z-index: 8;
            pointer-events: none;
          }
        }

        &:hover {
          .project--image {
            &::after {
              background-image: url(images/common/noise-2.gif);
              filter: grayscale(0.5);
              opacity: 0.5;
            }
          }
        }
      }
    }
  `,
};

const ProjectsPreview: React.FC<any> = ({ projects }) => {
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
        <div className="projects">
          {projects.map(
            ({ title, slug, isPreviewDark, imagePreview, tags }) => (
              <Link href={`/project/${slug}`} key={title}>
                <div
                  className={`project project-${slug} ${
                    isPreviewDark ? 'project-dark' : 'project-light'
                  } `}
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
                </div>
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPreview;
