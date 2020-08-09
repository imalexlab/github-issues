import React from 'react';
import { storiesOf } from '@storybook/react';
import mock from 'src/mocks/issues.json';

import Issue from './';
import { Issue as IssueType } from 'src/utils/types';

storiesOf('molecules/Issue', module).add('Default', () => {
  const issueMock = mock[0] as IssueType;
  return <Issue data={issueMock} />;
});
