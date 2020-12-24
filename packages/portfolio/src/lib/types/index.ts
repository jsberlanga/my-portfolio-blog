export interface ProjectType {
  fields: {
    title: string;
    slug: string;
    description: string;
  };
}

// CONTENTFUL
export interface ContentfulProjects {
  total: number;
  items: ProjectType[];
}
