import React from 'react';
import * as Scroll from 'react-scroll';

import styled from '@emotion/styled';

import Logo from '../logos/main/Logo';

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

const StyledLink = styled.span`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  margin: 0 3px;
  cursor: pointer;

  &:before {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0px;
    height: 2px;
    content: '';
    transition: all 0.2s ease-in;
  }
  &:hover {
    &:before {
      box-shadow: 0 0px 15px ${props => props.theme.colors.coolTeal};
      width: 100%;
    }
  }
`;
const StyledLinkRed = styled(StyledLink)`
  &:before {
    background: ${props => props.theme.colors.red};
  }
`;
const StyledLinkGreen = styled(StyledLink)`
  &:before {
    background: ${props => props.theme.colors.laserGreen};
  }
`;
const StyledLinkBlue = styled(StyledLink)`
  &:before {
    background: ${props => props.theme.colors.laserBlue};
  }
`;

const NavMain = () => {
  return (
    <>
      <Header>
        <Logo />

        <NavContainer>
          <Scroll.Link
            to="rippleDemos"
            smooth={true}
            duration={500}
            offset={-30}
          >
            <StyledLinkRed> Examples</StyledLinkRed>
          </Scroll.Link>
          <Scroll.Link to="whyRipple" smooth={true} duration={500}>
            <StyledLinkGreen> About</StyledLinkGreen>
          </Scroll.Link>
          <Scroll.Link to="contact" smooth={true} duration={500}>
            <StyledLinkBlue> Contact</StyledLinkBlue>
          </Scroll.Link>
        </NavContainer>
      </Header>
    </>
  );
};

export default NavMain;
