import { gql } from 'graphql-request';

export const getPreviewProjectsQuery = gql`
  query getPreviewProjects {
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

export const getAllSlugsQuery = gql`
  query getAllSlugs {
    projectCollection {
      items {
        slug
      }
    }
  }
`;

export const getProjectQuery = gql`
  query getProject($slug: String!) {
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
        mainVideoCollection {
          items {
            contentType
            url
          }
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
