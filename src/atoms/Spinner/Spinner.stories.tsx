import React from 'react';
import { storiesOf } from '@storybook/react';

import Spinner from './';

storiesOf('atoms/Spinner', module).add('Default', () => {
  return <Spinner />;
});
