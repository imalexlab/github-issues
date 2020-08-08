import React from 'react';
import { storiesOf } from '@storybook/react';
import mock from 'src/mocks/issues.json';

import Issue from './';

storiesOf('Issue', module).add('Default', () => {
  return <Issue data={mock[0]} />;
});
