import React, { useEffect } from 'react';
import { Link } from 'gatsby';

import styled from '@emotion/styled';
import netlifyIdentity from 'netlify-identity-widget';
import { FaPhone } from 'react-icons/fa';

import MyMenu from '../menus/MyMenu';

import {
  exampleLinks1,
  exampleLinks3,
  exampleLinks2,
} from '../../constants/exampleLinks';

const Header = styled.header`
  background: ${props => props.theme.colors.lightgrey};
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  z-index: 1;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 12rem;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
  }
`;
const LogoLink = styled(Link)`
  padding: 0;
  margin: 0;
`;
const Logo = styled.span`
  color: ${props => props.theme.colors.primary};

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin-top: 1.5rem;
  }

  & i {
    font-weight: bold;
    color: ${props => props.theme.colors.primaryDark};
  }
  & ${LogoLink} {
    text-decoration: none !important;
    font-size: 3rem;
    line-height: 2.4rem;
  }
`;

const LogoBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoPhone = styled.span`
  margin-right: 3px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  &.hideNav {
    display: none;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: row;
    margin-top: 6rem;
    position: absolute;
  }
  &.hideMe {
    display: none;
  }
`;

const NavFashion = () => {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  return (
    <Header>
      <Logo>
        <LogoLink to="/">
          <i>FASHION ONE</i>
        </LogoLink>
        <LogoBottom>
          <LogoPhone>1 888 FASHION</LogoPhone>
          <FaPhone />
        </LogoBottom>
      </Logo>
      <NavContainer>
        <MyMenu title={`Women`} menuLinks={exampleLinks2} />
        <MyMenu title={`Men`} menuLinks={exampleLinks1} />
        <MyMenu title={`Kids`} menuLinks={exampleLinks3} />
      </NavContainer>
    </Header>
  );
};

export default NavFashion;
