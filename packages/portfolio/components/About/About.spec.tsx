import * as React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

jest.mock('@juliosoto/components/Icons/RobotMe', () => () => null);
jest.mock('@juliosoto/utils/styles', () => ({
  getMQ: () => '500',
}));

describe('About', () => {
  test('renders correctly', () => {
    const { container } = render(<About />);

    expect(container).toMatchSnapshot();
    expect(screen.getByText('a bit about me')).toBeInTheDocument();
  });
});
