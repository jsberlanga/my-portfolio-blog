import * as React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { getAllSlugs, getProject } from '@juliosoto/lib/contentful';
import { css } from '@emotion/react';
import { GoBack, GoNext } from '@juliosoto/components/Icons';
import { PageHeader, NotFound } from '@juliosoto/components';
import Link from 'next/link';
import { ProjectInfo } from '../../components';
import { ProjectType } from '@juliosoto/lib/types';
import { motion } from 'framer-motion';
import { transition, variants } from '@juliosoto/lib/styles';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params ?? {};

  const project = await getProject({ slug: slug?.toString() });

  const slugs = await getAllSlugs();
  if (!project || !slugs) {
    return { props: { project: null } };
  }

  const currentIdx = slugs.findIndex(
    ({ slug }: { slug: string }) => project.slug === slug,
  );

  const adjacentProjects = {
    previous: currentIdx > 0 ? slugs[currentIdx - 1] : null,
    next: currentIdx < slugs.length - 1 ? slugs[currentIdx + 1] : null,
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

    .imageWrapper {
      margin-bottom: var(--gap-bottom);
    }

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
};

interface ProjectProps {
  project?: ProjectType;
  adjacentProjects: {
    previous: ProjectType | null;
    next: ProjectType | null;
  };
}

export default function Project({ project, adjacentProjects }: ProjectProps) {
  if (!project) return <NotFound />;

  const projectInfoData = {
    projectInfo: project.projectInfo,
    links: project.links,
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
                <motion.span variants={variants.children.scale} key={idx}>
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
          className="imageWrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ...transition, delay: 1.25 } }}
        >
          <Image
            src={project.mainImage.url}
            layout="responsive"
            width={project.mainImage.width}
            height={project.mainImage.height}
          />
        </motion.div>
        <ProjectInfo projectInfoData={projectInfoData} />
        <div className="adjacentProjects">
          {adjacentProjects.previous ? (
            <Link href={`/project/${adjacentProjects.previous.slug}`}>
              <a className="adjacentProject">
                <GoBack fill="var(--c-light-02)" /> Previous Project
              </a>
            </Link>
          ) : null}
          {adjacentProjects.next ? (
            <Link href={`/project/${adjacentProjects.next.slug}`}>
              <a className="adjacentProject">
                Next Project <GoNext fill="var(--c-light-02)" />
              </a>
            </Link>
          ) : null}
        </div>
      </motion.div>
    </React.Fragment>
  );
}
