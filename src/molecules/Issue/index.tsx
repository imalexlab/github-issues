import React from 'react';
import styled from 'styled-components';
import { Issue } from 'src/utils/types';
import User from 'src/atoms/User';

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
`;

const IssueTitle = styled.p``;

export default ({ data }: { data: Issue }) => {
  return (
    <Wrapper>
      <User user={data.user} />
      <div>
        <IssueTitle>{data.title}</IssueTitle>
      </div>
      {data.number}
    </Wrapper>
  );
};
