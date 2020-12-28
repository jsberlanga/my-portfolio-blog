import * as React from 'react';
import { Newsletter, PageHeader } from '@juliosoto/components/';
import Head from 'next/head';

import { getBlogPostsData } from '@juliosoto/utils/mdx';

export default function Index({ postsData }) {
  console.log({ postsData });

  return (
    <React.Fragment>
      <Head>
        <title>Julio Soto- Blog</title>
      </Head>
      <PageHeader
        title={<h1>/blog</h1>}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias corrupti cum velit obcaecati dolor impedit consectetur quas itaque saepe illo tempore totam id rem maiores nostrum assumenda"
        tags={['React', 'TypeScript', 'GraphQL']}
      />
      <br />
      {postsData?.map((post, idx) => (
        <div key={idx}>{JSON.stringify(post, null, 2)}</div>
      ))}
      <br />
      <Newsletter />
    </React.Fragment>
  );
}

export const getStaticProps = async () => {
  const postsData = getBlogPostsData();

  return {
    props: { postsData },
  };
};
