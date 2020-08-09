import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import Search from '.';

test('renders Search', () => {
  const props = {
    handleSearch: jest.fn(),
    handleReset: jest.fn(),
    owner: '',
    repo: '',
  };
  const { container } = render(<Search {...props} />);
  const inputOwner = getByTestId(container, 'input-owner');
  const inputRepo = getByTestId(container, 'input-repo');
  const searchButton = getByTestId(container, 'search');

  expect(searchButton).toBeDisabled();

  
  fireEvent.change(inputOwner, { target: { value: 'facebook' } });
  fireEvent.change(inputRepo, { target: { value: 'react' } });

  expect(inputOwner).toHaveValue('facebook');
  expect(inputRepo).toHaveValue('react');
  expect(searchButton).not.toBeDisabled();
  expect(container).toMatchSnapshot();
});
