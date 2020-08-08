import React from 'react';
import styled from 'styled-components';
import { User } from 'src/utils/types';

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

const Username = styled.span`
  margin: 0;
  color: #252a34;
`;

export default ({ user }: { user: User }) => (
  <Wrapper href={user.url} rel="noopener noreferrer">
    <Avatar src={user.avatar_url} alt={user.login} />
    <Username>{user.login}</Username>
  </Wrapper>
);
