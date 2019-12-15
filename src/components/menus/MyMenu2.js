import React from 'react';
import styled from '@emotion/styled';

import { FaCaretDown } from 'react-icons/fa';
import { Container800 } from '../reusableStyles/sections/Sections';

const Container = styled.div`
  display: flex;
  height: 100%;

  font-weight: bolder;
  z-index: 2;
`;

const DropDownContent = styled.div`
  display: none;

  text-align: center;
  width: 100%;

  position: absolute;
  top: 75px;
  left: 0;
`;

const IconContainer = styled.span`
  position: absolute;
  transform: translate(1px, 2px);
`;

const Title = styled.span`
  font-weight: bolder;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  &:hover {
    display: inline-block;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;

  padding: 2rem 2rem;

  font-size: 1.8rem;

  &:hover {
    height: 77px;
    text-decoration: underline;
    ${DropDownContent} {
      display: block;
    }
  }
`;

const MyMenu2 = ({ title, children, color }) => {
  return (
    <Container>
      <Button>
        <Title style={{ color }}>{title}</Title>

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
