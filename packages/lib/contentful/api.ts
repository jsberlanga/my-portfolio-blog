import {
  ContentfulProjects,
  ProjectPreviewType,
  ProjectSlugType,
  ProjectType,
} from '../types';

async function fetchGraphQL<T>(query: string, preview = false): Promise<T> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  ).then((response) => response.json());
}

function extractProject<T>(project: ContentfulProjects<T>): T | undefined {
  return project?.data?.projectCollection?.items?.[0];
}

function extractProjectEntries<T>(
  projects: ContentfulProjects<T>,
): T[] | undefined {
  return projects?.data?.projectCollection?.items;
}

export async function getProjectBySlug({ slug }: { slug: string }) {
  const entries = await fetchGraphQL<ContentfulProjects<ProjectType>>(
    `query {
      projectCollection(where: { slug: "${slug}" }) {
        items {
          title
          description
          slug
          mainImage {
            url
            title
            width
            height
          }
          tags
          dateCompleted
          projectInfo
          technologyUsed
          technologyDescription
          links
        }
      }
    }`,
  );

  return extractProject<ProjectType>(entries);
}

export async function getAllSlugs() {
  const entries = await fetchGraphQL<ContentfulProjects<ProjectSlugType>>(
    `query {
      projectCollection {
        items {
          slug
        }
      }
    }`,
  );

  return extractProjectEntries<ProjectSlugType>(entries);
}

export async function getAllProjects() {
  const entries = await fetchGraphQL<ContentfulProjects<ProjectPreviewType>>(
    `query {
      projectCollection {
        items {
          title
          slug
          isPreviewDark
           imagePreview {
            url
            title
            width
            height
          }
          tags
        }
      }
    }`,
  );
  return extractProjectEntries<ProjectPreviewType>(entries);
}
