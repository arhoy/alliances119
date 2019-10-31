import React from 'react';
import styled from '@emotion/styled';
import { FaGreaterThan } from 'react-icons/fa';

const H4 = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
`;

const StyledIcon = styled(FaGreaterThan)`
  font-size: 1.3rem;
  margin-left: 3px;
`;

const ListHeader = ({ title }) => {
  return (
    <H4>
      {title} <StyledIcon />
    </H4>
  );
};

export default ListHeader;
