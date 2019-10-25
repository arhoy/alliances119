import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FaCaretDown } from 'react-icons/fa';

const Container = styled.div`
  display: block;
  padding: 2rem;
  position: relative;
  font-weight: bolder;
  z-index: 2;
`;

const CustomNavlink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};

  padding: 1rem;

  width: 100%;
  &:hover {
    color: ${props => props.theme.colors.primaryDark};
    text-decoration: none;
    background: ${props => props.theme.colors.lightgrey2};
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
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
    ${DropDownContent} {
      display: flex;
      flex-direction: column;

      background: ${props => props.theme.colors.lightgrey};
      width: 15rem;
      align-items: center;
    }
  }
`;

const MyMenu = ({ title, menuLinks }) => {
  return (
    <Container>
      <Button>
        <Title>{title}</Title>

        <IconContainer>
          <FaCaretDown />
        </IconContainer>
        <DropDownContent>
          {menuLinks.map((link, i) => (
            <CustomNavlink key={i} to={link.path}>
              {link.text}
            </CustomNavlink>
          ))}
        </DropDownContent>
      </Button>
    </Container>
  );
};

export default MyMenu;
