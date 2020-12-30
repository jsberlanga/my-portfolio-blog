import * as React from 'react';
import { render } from '@testing-library/react';
import PostsPreview from './PostsPreview';

jest.mock('@juliosoto/components/Icons', () => ({
  GoNext: () => 'GoNext',
}));

const mockPostsData = [
  {
    title: 'test',
    slug: 'test',
    publishedAt: '2020-01-01',
  },
];

describe('PostsPreview', () => {
  test('renders correctly', () => {
    const { container } = render(<PostsPreview postsData={mockPostsData} />);

    expect(container).toMatchSnapshot();
  });
});