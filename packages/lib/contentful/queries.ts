import { gql } from 'graphql-request';

export const getPreviewProjectsQuery = gql`
  {
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
  }
`;

export const getAllSlugsQuery = gql`
  {
    projectCollection {
      items {
        slug
      }
    }
  }
`;

export const getProjectQuery = gql`
  query getProjectQuery($slug: String!) {
    projectCollection(where: { slug: $slug }) {
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
  }
`;
