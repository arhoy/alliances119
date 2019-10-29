import React from 'react';

import styled from '@emotion/styled';
const MegaMenuStyle = styled.div`
  background: ${props => props.theme.colors.white};

  padding: 3rem 10rem;
  display: flex;
  justify-content: space-between;

  & ul {
    list-style: none;
  }
`;

const MegaMenu1 = ({ children, background }) => {
  return (
    <MegaMenuStyle style={{ background: `${background}` }}>
      {children}
    </MegaMenuStyle>
  );
};

export default MegaMenu1;
