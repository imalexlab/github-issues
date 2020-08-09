import React from 'react';
import styled, { css } from 'styled-components';
import { State } from 'src/utils/types';

interface Props {
  name: string;
  color?: string;
}

const Wrapper = styled.p<Props>`
  border: 1px solid ${({ color }) => `#${color}`};
  border-radius: 31px;
  font-size: 12px;
  padding: 2px 7px;
  margin: 2px 5px;
  cursor: default;

  ${({ name }) =>
    name === State.Open &&
    css`
      background-color: #f3fff4;
      border: 1px solid #2ba238;
      color: #2ba238;
    `}
  ${({ name }) =>
    name === State.Closed &&
    css`
      background-color: #fbefee;
      border: 1px solid #f9706a;
      color: #f9706a;
    `}
`;

export default ({ name, color }: Props) => (
  <Wrapper name={name} color={color}>
    {name}
  </Wrapper>
);
