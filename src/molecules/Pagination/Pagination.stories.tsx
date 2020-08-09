import React from 'react';

import { useState } from '@storybook/addons';
import { storiesOf } from '@storybook/react';

import Pagination from './';

storiesOf('molecules/Pagination', module).add('Default', () => {
  const [currentPage, setCurrentPage] = useState(1);

  function changePage(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  return (
    <Pagination
      currentPage={currentPage}
      pageCount={25}
      goToPage={changePage}
    />
  );
});
