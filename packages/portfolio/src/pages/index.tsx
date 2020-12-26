import * as React from 'react';
import Head from 'next/head';
import { getAllProjects } from '@juliosoto/utils/contentful';
import Hero from '../components/Hero';
import ProjectsPreview from '../components/ProjectsPreview';
import About from '../components/About';

export async function getStaticProps() {
  const projects = (await getAllProjects()) ?? [];
  return {
    props: { projects },
  };
}

export default function Home({ projects }) {
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
