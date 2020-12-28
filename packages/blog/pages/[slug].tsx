import { renderToStaticMarkup } from 'react-dom/server';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { getBlogPostsData } from '@juliosoto/utils/mdx';

export default function Post({ post, mdxString }) {
  const MDXPost = dynamic(
    () => import(`@juliosoto/blog/content/${post.slug}.mdx`),
    {
      // eslint-disable-next-line react/display-name
      loading: () => <div dangerouslySetInnerHTML={{ __html: mdxString }} />,
    },
  );
  return (
    <div>
      <MDXPost />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} };
  const postsData = getBlogPostsData();

  const post = postsData.find((postData) => postData.slug === params.slug);

  const { default: MDXContent } = await import(
    `@juliosoto/blog/content/${post?.slug}.mdx`
  );
  const mdxString = renderToStaticMarkup(<MDXContent />);
  return { props: { post, mdxString } };
};

export async function getStaticPaths() {
  const postsData: Array<any> = getBlogPostsData();

  const paths = postsData.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}
