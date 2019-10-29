import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { FaOpencart } from 'react-icons/fa';

import styled from '@emotion/styled';
import netlifyIdentity from 'netlify-identity-widget';
import { FaPhone } from 'react-icons/fa';

import MyMenu2 from '../menus/MyMenu2';
import MegaMenu1 from '../menus/MegaMenus/MegaMenu1';
import List1 from '../menus/MegaMenus/MegaMenuLists/List1';
import List2 from '../menus/MegaMenus/MegaMenuLists/List2';

const Header = styled.header`
  height: 80px;
  position: relative;

  background: ${props => props.theme.colors.lightgrey};
  display: flex;
  border-bottom: 3px solid ${props => props.theme.colors.primarDark};
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
const AlertBar = styled.div`
  text-align: center;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;

const Cart = styled(FaOpencart)`
  margin-left: 2rem;
  font-size: 3rem;
  cursor: pointer;
`;

const NavFashion2 = () => {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  return (
    <>
      <AlertBar>100% Free Storewide Shipping</AlertBar>

      <Header>
        <Logo>
          <LogoLink to="/">
            <i>FashionTwo</i>
          </LogoLink>
          <LogoBottom>
            <LogoPhone>1 888 FASHION</LogoPhone>
            <FaPhone />
          </LogoBottom>
        </Logo>
        <NavContainer>
          <MyMenu2 title={`Women`}>
            <MegaMenu1 background="pink">
              <List1 />
            </MegaMenu1>
          </MyMenu2>
          <MyMenu2 title={`Men`}>
            <MegaMenu1 background="lightblue">
              <List2 />
            </MegaMenu1>
          </MyMenu2>
          <Cart className="snipcart-checkout">
            <span className="snipcart-items-count"></span>
            <span className="snipcart-total-price"></span>
          </Cart>
        </NavContainer>
      </Header>
    </>
  );
};

export default NavFashion2;
