import React from 'react';
import styled from 'styled-components';
import { User } from 'src/utils/types';

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

const Username = styled.span`
  color: #565c88;
  font-size: 14px;
  margin: 0;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default ({ user }: { user: User }) => (
  <Wrapper href={user.url} rel="noopener noreferrer">
    <Avatar src={user.avatar_url} alt={user.login} />
    <Username>{user.login}</Username>
  </Wrapper>
);
