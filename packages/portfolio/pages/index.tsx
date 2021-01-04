import * as React from 'react';
import Head from 'next/head';
import { getPreviewProjects } from '@juliosoto/lib/contentful';
import { ProjectPreviewType } from '@juliosoto/lib/types';
import { Hero, ProjectsPreview, About } from '../components';

export async function getStaticProps() {
  const projects = await getPreviewProjects();

  if (!projects)
    return {
      props: { projects: null },
    };

  return {
    props: { projects },
  };
}

interface HomeProps {
  projects: ProjectPreviewType[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ProjectsPreview projects={projects} />
      <About />
    </React.Fragment>
  );
}
