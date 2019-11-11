import React from 'react';

import styled from '@emotion/styled';

import Logo from '../logos/main/Logo';
import { Link } from 'gatsby';

const Header = styled.header`
  height: 80px;
  position: relative;
  background: ${props => props.theme.colors.black};

  display: flex;

  margin: 0 auto;

  justify-content: space-around;
  align-items: center;

  z-index: 1;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  margin: 0 3px;
`;

const NavMain = () => {
  return (
    <>
      <Header>
        <Logo />

        <NavContainer>
          <StyledLink to="/"> Examples</StyledLink>
          <StyledLink to="/">587 772 5536</StyledLink>
        </NavContainer>
      </Header>
    </>
  );
};

export default NavMain;
