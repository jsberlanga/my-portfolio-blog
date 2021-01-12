// PROJECTS
export interface FullProjectType {
  title: string;
  slug: string;
  description: string;
  imagePreview: {
    width: number;
    height: number;
    url: string;
  };
  mainImage: {
    width: number;
    height: number;
    url: string;
  };
  mainVideoCollection: {
    items: {
      title: string;
      contentype: string;
      url: string;
    }[];
  };
  projectInfo: string;
  tags: string[];
  links: {
    github?: string;
    website?: string;
  };
  technologyDescription: string;
  technologyUsed: string[];
  dateCompleted: string;
}

export type ProjectType = Pick<
  FullProjectType,
  | 'title'
  | 'description'
  | 'slug'
  | 'mainImage'
  | 'mainVideoCollection'
  | 'tags'
  | 'dateCompleted'
  | 'projectInfo'
  | 'technologyUsed'
  | 'technologyDescription'
  | 'links'
>;

export type ProjectSlugType = Pick<FullProjectType, 'slug'>;

export type ProjectPreviewType = Pick<
  FullProjectType,
  'title' | 'slug' | 'imagePreview' | 'tags'
>;

// POSTS

export interface TFullPost {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
}

export type TPostPreview = Pick<
  TFullPost,
  'title' | 'slug' | 'summary' | 'publishedAt'
>;

// CONTENTFUL
export interface ContentfulProjects<T> {
  projectCollection?: {
    items?: T[];
  };
}

// THEME

export interface ThemeContext {
  theme?: 'light' | 'dark';
}

// API

export interface Request extends NextApiRequest {
  db: Db;
  user?: {
    ipAddress: string;
  };
}

// GTAG
export interface TGTagEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}
