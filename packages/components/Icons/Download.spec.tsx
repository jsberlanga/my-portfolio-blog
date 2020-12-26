import * as React from 'react';
import { render } from '@testing-library/react';
import { Download } from './Download';

describe('Download', () => {
  it('renders correctly', () => {
    const { container } = render(<Download />);

    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('download');
  });
});
