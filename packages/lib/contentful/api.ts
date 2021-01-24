import { GraphQLClient } from 'graphql-request';
import {
  GetPreviewProjectsQuery,
  GetProjectQuery,
  GetProjectQueryVariables,
} from './generated/types';
import {
  getAllSlugsQuery,
  getPreviewProjectsQuery,
  getProjectQuery,
} from './queries';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export async function getPreviewProjects() {
  const {
    projectCollection,
  } = await graphQLClient.request<GetPreviewProjectsQuery>(
    getPreviewProjectsQuery,
  );

  return projectCollection?.items;
}

export async function getAllSlugs() {
  const {
    projectCollection,
  } = await graphQLClient.request<GetPreviewProjectsQuery>(getAllSlugsQuery);

  return projectCollection?.items;
}

export async function getProject(variables: { slug: string }) {
  const { projectCollection } = await graphQLClient.request<
    GetProjectQuery,
    GetProjectQueryVariables
  >(getProjectQuery, variables);

  return projectCollection?.items?.[0];
}
