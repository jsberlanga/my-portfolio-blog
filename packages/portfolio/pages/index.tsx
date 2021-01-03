import * as React from 'react';
import Head from 'next/head';
import { getAllProjects } from '@juliosoto/lib/contentful';
import { Hero, ProjectsPreview, About } from '../components';
import { ProjectPreviewType } from '@juliosoto/lib/types';

export async function getStaticProps() {
  const projects = await getAllProjects();

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
