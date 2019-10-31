import React from 'react';
import styled from '@emotion/styled';

const H4 = styled.h4`
  justify-self: flex-start;
  text-align: left;
  border-bottom: 3px solid ${props => props.theme.colors.primary};
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;

const ListHeader = ({ title }) => {
  return <H4>{title}</H4>;
};

export default ListHeader;
