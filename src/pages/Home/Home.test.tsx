import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';

test('renders Home', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
