import React from 'react';
import styled from 'styled-components';
import { Issue } from 'src/utils/types';
import User from 'src/atoms/User';
import Label from 'src/atoms/Label';

const Wrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  padding: 10px;
  background-color: #ffffff;
  width: 100%;
  margin: 5px 0;
  border-radius: 5px;

  :hover {
    background-color: #d9ddff;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 50px;
  }
`;

const IssueContent = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 15px;
`;

const IssueTitle = styled.a`
  color: #565c88;
  text-decoration: none;
  font-size: 18px;
  margin: 0;
`;

const Labels = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PRLink = styled.a`
  text-align: center;
  color: #565c88;
`;

export default ({ data }: { data: Issue }) => {
  return (
    <Wrapper>
      <User user={data.user} />
      <IssueContent>
        <IssueTitle href={data.url}>{data.title}</IssueTitle>
        <Labels>
          <Label name={data.state} />
          {data.labels.map((label, index) => (
            <Label
              name={label.name}
              color={label.color}
              key={`${index}-${label}`}
            />
          ))}
        </Labels>
      </IssueContent>
      {data.pull_request?.html_url && (
        <PRLink
          href={data.pull_request?.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          PR
        </PRLink>
      )}
    </Wrapper>
  );
};
