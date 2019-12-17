import React from 'react';

import {
  MobileMenuContainerPrimaryLight,
  CloseIcon,
  CloseIconContainer,
  StyledLink,
  LinkContainerUl,
  LinkWrapper,
} from '../MobileMenuStyles1';

export const MobileMenu1 = ({ mobileMenuHandler }) => {
  return (
    <MobileMenuContainerPrimaryLight>
      <CloseIconContainer>
        <CloseIcon onClick={mobileMenuHandler} /> close
      </CloseIconContainer>

      <LinkContainerUl>
        <LinkWrapper>
          {' '}
          <StyledLink to="/bags"> Bags </StyledLink>{' '}
        </LinkWrapper>
        <LinkWrapper>
          {' '}
          <StyledLink to="/shoes"> Shoes </StyledLink>{' '}
        </LinkWrapper>
        <LinkWrapper>
          {' '}
          <StyledLink to="/shirts"> Shirts </StyledLink>{' '}
        </LinkWrapper>
        <LinkWrapper>
          {' '}
          <StyledLink to="/pants"> Pants </StyledLink>{' '}
        </LinkWrapper>
      </LinkContainerUl>
    </MobileMenuContainerPrimaryLight>
  );
};
