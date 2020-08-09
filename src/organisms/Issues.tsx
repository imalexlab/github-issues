import React from 'react';
import styled from 'styled-components';
import { Issue as IssueType } from 'src/utils/types';
import Issue from 'src/molecules/Issue';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 75%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default ({ issues }: { issues: IssueType[] }) => (
  <Wrapper>
    {issues.map((issue) => (
      <Issue data={issue} key={issue.number} />
    ))}
  </Wrapper>
);
