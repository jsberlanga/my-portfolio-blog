import * as React from 'react';
import Head from 'next/head';
import { getPreviewProjects } from '@juliosoto/lib/contentful';
import { ProjectPreviewType } from '@juliosoto/lib/types';
import { Hero, ProjectsPreview, About } from '../components';
import { motion } from 'framer-motion';
import { variants } from '@juliosoto/lib/styles';
import { useQuery, gql } from '@apollo/client';
import { GetProjects } from '../generated/getProjects';

const PREVIEW_PROJECTS_QUERY = gql`
  query GetProjects {
    projectCollection {
      items {
        title
        slug
        imagePreview {
          url
          title
          width
          height
        }
        tags
      }
    }
  }
`;

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
  const { data, loading } = useQuery<GetProjects>(PREVIEW_PROJECTS_QUERY);

  console.log({ data });

  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        variants={variants.children.moveUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Hero />
        <ProjectsPreview projects={projects} />
        <About />
      </motion.div>
    </React.Fragment>
  );
}
