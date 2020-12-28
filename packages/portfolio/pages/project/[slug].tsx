import * as React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { getAllSlugs, getProjectBySlug } from '@juliosoto/utils/contentful';
import NotFound from '../404';
import { css } from '@emotion/react';
import ProjectInfo from '../../components/ProjectInfo';
import { getMQ } from '@juliosoto/utils/styles';
import { GoBack, GoNext } from '@juliosoto/components/Icons';
import { PageHeader } from '@juliosoto/components';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const project = (await getProjectBySlug({ slug })) ?? [];

  if (!project || project.length === 0) {
    return { props: { project: [] } };
  }

  const slugs = (await getAllSlugs()) ?? [];

  const currentIdx = slugs.findIndex(({ slug }) => project.slug === slug);

  const adjacentProjects = {
    previous: currentIdx > 0 ? slugs[currentIdx - 1] : null,
    next: currentIdx < slugs.length - 1 ? slugs[currentIdx + 1] : null,
  };

  return {
    props: { project, adjacentProjects },
  };
};

export const getStaticPaths = async () => {
  const projects = (await getAllSlugs()) ?? [];

  const preRenderedPaths = projects.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths: preRenderedPaths, fallback: true };
};

const styles = {
  root: css`
    margin-bottom: var(--gap-bottom);

    .imageWrapper {
      ${getMQ('desktop')} {
        margin-bottom: var(--gap-bottom);
      }
    }

    .adjacentProjects {
      text-align: center;

      .adjacentProject {
        margin: 0 12px;
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

export default function Project({ project, adjacentProjects }) {
  if (!project || project.length === 0) {
    return <NotFound />;
  }

  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={styles.root}>
        <PageHeader
          title={<h2>/{project.title}</h2>}
          description={project.description}
          tags={project.tags}
        />
        <div className="imageWrapper">
          <Image
            src={project.mainImage.url}
            layout="responsive"
            width={project.mainImage.width}
            height={project.mainImage.height}
          />
        </div>
        <ProjectInfo
          projectInfo={project.projectInfo}
          technologyUsed={project.technologyUsed}
        />
        <div className="adjacentProjects">
          {adjacentProjects.previous ? (
            <Link href={`/project/${adjacentProjects.previous.slug}`}>
              <a className="adjacentProject">
                <GoBack /> Previous Project
              </a>
            </Link>
          ) : null}
          {adjacentProjects.next ? (
            <Link href={`/project/${adjacentProjects.next.slug}`}>
              <a className="adjacentProject">
                Next Project <GoNext />
              </a>
            </Link>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}
