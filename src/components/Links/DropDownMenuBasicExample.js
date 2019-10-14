// Reference Dropdown Menu
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Dropdown = styled.div`
  postition: relative;
  display: inline-block;
`;

const Button = styled.div`
  background-color: green;
  color: white;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  &:hover ${Button} {
    display: block;
  }
`;

const DropDownMenuBasicExample = () => {
  return (
    <Dropdown>
      <Button>Dropdown</Button>
      <DropDownContent>
        <Link to="/">Link 1</Link>
        <Link to="/">Link 2</Link>
        <Link to="/">Link 3</Link>
        <Link to="/">Link 4</Link>
        <Link to="/">Link 5</Link>
      </DropDownContent>
    </Dropdown>
  );
};

export default DropDownMenuBasicExample;
