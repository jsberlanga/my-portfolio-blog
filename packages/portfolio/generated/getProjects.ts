/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjects
// ====================================================

export interface GetProjects_projectCollection_items_imagePreview {
  __typename: "Asset";
  url: string | null;
  title: string | null;
  width: number | null;
  height: number | null;
}

export interface GetProjects_projectCollection_items {
  __typename: "Project";
  title: string | null;
  slug: string | null;
  imagePreview: GetProjects_projectCollection_items_imagePreview | null;
  tags: (string | null)[] | null;
}

export interface GetProjects_projectCollection {
  __typename: "ProjectCollection";
  items: (GetProjects_projectCollection_items | null)[];
}

export interface GetProjects {
  projectCollection: GetProjects_projectCollection | null;
}
