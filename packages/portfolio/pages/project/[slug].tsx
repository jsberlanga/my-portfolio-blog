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

  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        css={styles.root}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          visibility: 'visible',
          transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.9] },
        }}
        exit={{
          visibility: 'hidden',
          transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.9] },
        }}
      >
        <PageHeader
          title={<h2>/{project.title}</h2>}
          description={project.description}
          tags={[...project.tags, project.dateCompleted]}
        />
        <div className="imageWrapper">
          <Image
            src={project.mainImage.url}
            layout="responsive"
            width={project.mainImage.width}
            height={project.mainImage.height}
          />
        </div>
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
