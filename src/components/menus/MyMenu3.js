// Click Menu Used in SuperStore Layout

import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Container800 } from '../reusableStyles/sections/Sections';
import OutsideAlerter from '../../utils/OutsideAlerter';

const Container = styled.div`
  display: flex;
  height: 100%;

  font-weight: bolder;
  z-index: 2;
`;

const DropDownContent = styled.div`
  display: block;

  text-align: center;
  width: 100%;

  position: absolute;
  top: 75px;
  left: 0;
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

  padding: 2rem 1.5rem;

  font-size: 1.6rem;

  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

const MyMenu3 = ({ title, children, color }) => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(prevMenu => !prevMenu);
  };
  return (
    <Container>
      <Button onClick={menuHandler}>
        <Title style={{ color }}>{title}</Title>

        <Container800>
          {menu && (
            <OutsideAlerter menuhandler={menuHandler}>
              <DropDownContent>{children}</DropDownContent>
            </OutsideAlerter>
          )}
        </Container800>
      </Button>
    </Container>
  );
};

export default MyMenu3;
