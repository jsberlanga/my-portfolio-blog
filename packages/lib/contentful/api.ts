import { GraphQLClient } from 'graphql-request';
import {
  ContentfulProjects,
  ProjectPreviewType,
  ProjectType,
  TAdjacentProject,
} from '../types';
import {
  getAdjacentsProjectsQuery,
  getAllSlugsQuery,
  getPreviewProjectsQuery,
  getProjectQuery,
} from './queries';

function extractProject<T>(data: ContentfulProjects<T>): T | undefined {
  return data?.projectCollection?.items?.[0];
}

function extractProjectEntries<T>(
  data: ContentfulProjects<T>,
): T[] | undefined {
  return data?.projectCollection?.items;
}

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export async function getPreviewProjects() {
  const entries = await graphQLClient.request(getPreviewProjectsQuery);

  return extractProjectEntries<ProjectPreviewType>(entries);
}

export async function getAllSlugs() {
  const entries = await graphQLClient.request(getAllSlugsQuery);

  return extractProjectEntries<ProjectPreviewType>(entries);
}

export async function getAdjacentProjects() {
  const entries = await graphQLClient.request(getAdjacentsProjectsQuery);

  return extractProjectEntries<TAdjacentProject>(entries);
}

export async function getProject(variables: { slug: string }) {
  const entries = await graphQLClient.request(getProjectQuery, variables);

  return extractProject<ProjectType>(entries);
}
