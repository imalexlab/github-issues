import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  padding: 10px;
  width: 100%;
  font-weight: 700;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 50px;
  }
`;

const Text = styled.p`
  text-align: center;
`;

const Title = styled(Text)`
  margin: 0 15px;
  text-align: left;
`;

export default () => {
  return (
    <Wrapper>
      <Text>User</Text>
      <Title>Title of the issue</Title>
      <Text>PR</Text>
    </Wrapper>
  );
};
