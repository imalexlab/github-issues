import React from 'react';
import { render } from '@testing-library/react';
import Issues from '.';
import mock from 'src/mocks/issues.json';

test('renders Issues', () => {
  const { container } = render(<Issues issues={mock} />);
  expect(container).toMatchSnapshot();
});
