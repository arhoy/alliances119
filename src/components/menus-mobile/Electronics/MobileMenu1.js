import React from 'react';

import {
  MobileMenuContainer,
  CloseIcon,
  CloseIconContainer,
  StyledLink,
  LinkContainerUl,
  LinkWrapper,
} from '../MobileMenuStyles1';

export const MobileMenu1 = ({ mobileMenuHandler }) => {
  return (
    <MobileMenuContainer>
      <CloseIconContainer>
        <CloseIcon onClick={mobileMenuHandler} /> close
      </CloseIconContainer>

      <LinkContainerUl>
        <LinkWrapper>
          {' '}
          <StyledLink to="/"> Home </StyledLink>{' '}
        </LinkWrapper>
        <LinkWrapper>
          {' '}
          <StyledLink to="/computers"> Computers </StyledLink>{' '}
        </LinkWrapper>
        <LinkWrapper>
          {' '}
          <StyledLink to="/phones"> Phones </StyledLink>{' '}
        </LinkWrapper>
        <LinkWrapper>
          {' '}
          <StyledLink to="/tvs"> Tvs </StyledLink>{' '}
        </LinkWrapper>
      </LinkContainerUl>
    </MobileMenuContainer>
  );
};
