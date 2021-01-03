async function fetchGraphQL(query, preview = false) {
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

function extractProject(project) {
  return project?.data?.projectCollection?.items?.[0];
}

function extractProjectEntries(projects) {
  return projects?.data?.projectCollection?.items;
}

export async function getProjectBySlug({ slug }) {
  const entries = await fetchGraphQL(
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

  return extractProject(entries);
}

export async function getAllSlugs() {
  const entries = await fetchGraphQL(
    `query {
      projectCollection {
        items {
          slug
        }
      }
    }`,
  );

  return extractProjectEntries(entries);
}

export async function getAllProjects() {
  const entries = await fetchGraphQL(
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
  return extractProjectEntries(entries);
}
