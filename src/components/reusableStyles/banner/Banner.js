import React from 'react';

import styled from '@emotion/styled';

const Div = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.colors.primaryLight};
  margin-bottom: 1rem;
  line-height: 3.5rem;
`;

const P = styled.p`
  width: 85%;
  margin: 0 auto;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.lightgrey};
`;

const Banner = ({ title, info, children }) => {
  return (
    <Div>
      <H1>{title}</H1>
      <P>{info}</P>
      {children}
    </Div>
  );
};

export default Banner;
