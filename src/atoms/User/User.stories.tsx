import React from 'react';
import { storiesOf } from '@storybook/react';
import mock from 'src/mocks/issues.json';

import User from './';

storiesOf('User', module).add('Default', () => {
  return <User user={mock[0].user} />;
});
