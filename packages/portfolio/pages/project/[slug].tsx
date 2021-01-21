import * as React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import {
  getAllSlugs,
  getProject,
  getAdjacentProjects,
} from '@juliosoto/lib/contentful';
import { css } from '@emotion/react';
import {
  ExternalLink,
  Github,
  GoBack,
  GoNext,
  Laptop,
} from '@juliosoto/components/Icons';
import { PageHeader, NotFound } from '@juliosoto/components';
import Link from 'next/link';
import { HoverLinkImage, ProjectInfo } from '../../components';
import { ProjectType, TAdjacentProject } from '@juliosoto/lib/types';
import { motion } from 'framer-motion';
import { getMQ, transition, variants } from '@juliosoto/lib/styles';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params ?? {};

  const project = await getProject({ slug: slug?.toString() });

  const slugs = await getAllSlugs();
  const projects = await getAdjacentProjects();
  if (!project || !slugs || !projects) {
    return { props: { project: null } };
  }

  const currentIdx = projects.findIndex(
    ({ slug }: { slug: string }) => project.slug === slug,
  );

  const adjacentProjects = {
    previous: currentIdx > 0 ? projects[currentIdx - 1] : null,
    next: currentIdx < projects.length - 1 ? projects[currentIdx + 1] : null,
  };

  return {
    props: { project, adjacentProjects },
  };
};

export const getStaticPaths = async () => {
  const projects = await getAllSlugs();

  const preRenderedPaths = projects?.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths: preRenderedPaths, fallback: true };
};

const styles = {
  root: css`
    margin-bottom: var(--gap-bottom);

    .adjacentProjects {
      text-align: center;

      .adjacentProject {
        margin: 12px;
        background: var(--c-background-02);
        color: var(--c-text-02);
        border-radius: 32px;
        padding: 15px 20px;
        text-transform: uppercase;
        display: inline-block;
        width: 14rem;
        font-size: 0.9rem;
      }
    }
  `,
  wrapper: css`
    text-align: center;
    width: min(60rem, 100%);
    height: max(50rem, 80%);
    position: relative;

    margin: 0 auto 10rem;

    ${getMQ('desktop')} {
      margin: 0 auto 16.5rem;
    }

    svg {
      width: 100%;
    }

    video {
      position: absolute;
      top: 5.75%;
      width: 81%;
      z-index: -1;
    }
    .external-links {
      width: min(19rem, 100%);
      position: absolute;
      height: 10rem;
      bottom: -12rem;
      left: 50%;
      transform: translateX(-50%);

      svg {
        margin: 0 1rem;
        height: 2.5rem;
        width: 2.5rem;
        ${getMQ('desktop')} {
          margin: 0 1rem;
          height: 3.5rem;
          width: 3.5rem;
        }
      }
    }
  `,

  imageWrapper: css`
    img {
      height: 100%;
      width: 100%;
    }
  `,
  videoWrapper: css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `,
};

interface ProjectProps {
  project?: ProjectType;
  adjacentProjects: {
    previous: TAdjacentProject | null;
    next: TAdjacentProject | null;
  };
}

export default function Project({ project, adjacentProjects }: ProjectProps) {
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const videoElement = document.getElementById(
        'project-video',
      ) as HTMLVideoElement;

      setTimeout(() => videoElement?.play(), 2000);
    }
    return;
  }, []);
  if (!project) return <NotFound />;

  const projectInfoData = {
    projectInfo: project.projectInfo,
    technologyDescription: project.technologyDescription,
    technologyUsed: project.technologyUsed,
  };

  const splitTitle = project.title.split('');

  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        css={styles.root}
        variants={variants.fadeIn}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <PageHeader
          title={
            <React.Fragment>
              <motion.span variants={variants.children.scale}>/</motion.span>
              {splitTitle.map((letter, idx) => (
                <motion.span
                  variants={variants.children.scale}
                  key={`${letter}-${idx}`}
                >
                  {letter}
                </motion.span>
              ))}
            </React.Fragment>
          }
          description={
            <motion.p variants={variants.children.moveUp}>
              {project.description}
            </motion.p>
          }
          tags={[...project.tags, project.dateCompleted]}
        />
        <motion.div
          css={[
            styles.wrapper,
            project.mainImage && styles.imageWrapper,
            project.mainVideoCollection.items.length && styles.videoWrapper,
          ]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ...transition, delay: 1.25 } }}
        >
          {project.mainVideoCollection?.items.length ? (
            <React.Fragment>
              <Laptop />
              <video id="project-video" loop muted playsInline>
                {project.mainVideoCollection?.items.map((video, idx) => (
                  <source src={video.url} type={video.contentype} key={idx} />
                ))}
              </video>
            </React.Fragment>
          ) : null}
          {project.mainImage && !project.mainVideoCollection?.items.length ? (
            <Image
              src={project.mainImage.url}
              layout="responsive"
              width={project.mainImage.width}
              height={project.mainImage.height}
            />
          ) : null}
          <div className="external-links">
            {project.links?.website ? (
              <a href={project.links.website} target="_blank" rel="noreferrer">
                <ExternalLink />
              </a>
            ) : null}
            {project.links?.github ? (
              <a href={project.links.github} target="_blank" rel="noreferrer">
                <Github />
              </a>
            ) : null}
            <div className="xsmall externalLinks-info">
              If you are interested, feel welcome to click on the icon
              {project.links?.github && project.links?.website ? 's' : ''} to
              check the website
              {project.links?.github ? 'and the code in github' : ''}
            </div>
          </div>
        </motion.div>
        <ProjectInfo projectInfoData={projectInfoData} />
        <div className="adjacentProjects">
          {adjacentProjects.previous ? (
            <Link href={`/project/${adjacentProjects.previous.slug}`}>
              <a className="adjacentProject">
                <HoverLinkImage
                  imageSrc={adjacentProjects.previous.thumbnailImage.url}
                  reference={adjacentProjects.previous.slug}
                >
                  <GoBack fill="var(--c-light-02)" /> Previous Project
                </HoverLinkImage>
              </a>
            </Link>
          ) : null}
          {adjacentProjects.next ? (
            <Link href={`/project/${adjacentProjects.next.slug}`}>
              <a className="adjacentProject">
                <HoverLinkImage
                  imageSrc={adjacentProjects.next.thumbnailImage.url}
                  reference={adjacentProjects.next.slug}
                >
                  Next Project <GoNext fill="var(--c-light-02)" />
                </HoverLinkImage>{' '}
              </a>
            </Link>
          ) : null}
        </div>
      </motion.div>
    </React.Fragment>
  );
}

React.createElement;
