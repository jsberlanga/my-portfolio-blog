import * as React from 'react';
import { render } from '@testing-library/react';
import CloseMenu from './CloseMenu';

describe('CloseMenu', () => {
  it('renders correctly', () => {
    const { container } = render(
      <CloseMenu
        handleClick={() => {
          console.log('click');
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
