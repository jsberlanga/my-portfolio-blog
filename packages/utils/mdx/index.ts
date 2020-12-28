import fs from 'fs';
import path from 'path';

export const getBlogPostsData = () => {
  const META = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;
  const DIR = path.join(process.cwd(), 'content');

  const files = fs.readdirSync(DIR).filter((file) => file.endsWith('.mdx'));

  const postsData = files
    .map((file) => {
      const name = path.join(DIR, file);
      const contents = fs.readFileSync(name, 'utf8');
      const match = META.exec(contents);

      if (!match || typeof match[1] !== 'string')
        throw new Error(`${name} needs to export const meta = {}`);

      const meta = eval('(' + match[1] + ')');
      const slug = file.replace(/\.mdx?$/, '');

      return {
        ...meta,
        slug,
      };
    })
    .filter((meta) => process.env.NODE_ENV === 'development' || meta.published)
    .sort((a, b) => {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    });

  console.log({ postsData });

  return postsData;
};
