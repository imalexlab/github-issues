import React from 'react';
import { storiesOf } from '@storybook/react';

import Label from './';

storiesOf('atoms/Label', module).add('Default', () => {
  return <Label name="CLA Signed" />;
});
