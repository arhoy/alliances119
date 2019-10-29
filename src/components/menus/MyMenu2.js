import React from 'react';
import styled from '@emotion/styled';

import { FaCaretDown } from 'react-icons/fa';
import { Container800 } from '../reusableStyles/sections/Sections';

const Container = styled.div`
  display: block;

  padding: 2rem;
  font-weight: bolder;
  z-index: 2;
`;

const DropDownContent = styled.div`
  display: none;

  position: absolute;
  top: 80px;
  left: 0;
`;

const IconContainer = styled.span`
  position: absolute;
  transform: translate(1px, 2px);
`;

const Title = styled.span`
  font-weight: bolder;
  color: ${props => props.theme.colors.primary};
`;

const Button = styled.button`
  border: none;
  outline: none;
  margin: none;
  padding: none;
  background: ${props => props.theme.colors.lightgrey};
  font-size: 1.8rem;

  &:hover {
    height: 80px;
    background: transparent;
    ${DropDownContent} {
      display: block;
      text-align: center;
      width: 100%;

      min-height: 15vh;
    }
  }
`;

const MyMenu2 = ({ title, children }) => {
  return (
    <Container>
      <Button>
        <Title>{title}</Title>

        <IconContainer>
          <FaCaretDown />
        </IconContainer>
        <Container800>
          <DropDownContent>{children}</DropDownContent>
        </Container800>
      </Button>
    </Container>
  );
};

export default MyMenu2;
