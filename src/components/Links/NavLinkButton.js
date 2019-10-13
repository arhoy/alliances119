// styled navlink with emotion

import styled from '@emotion/styled';
import { Link } from 'gatsby';
const NavlinkButton = styled(Link)`
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  background: ${props => props.theme.colors.lightgrey};
  color: ${props => props.theme.colors.primary};
  display: inline-block;
  text-decoration: none;
  transition: all 0.8s cubic-bezier(0.78, -0.75, 0.255, 1.69);
  &:hover {
    background: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.white};
    border-radius: 6px;
  }
`;

const NavlinkButton2 = styled(Link)`
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  margin-left: 1rem;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.lightgrey};
  display: inline-block;
  transform: translateY(-0.5rem);
  text-decoration: none;
  transition: all 0.8s cubic-bezier(0.78, -0.75, 0.255, 1.69);
  &:hover {
    background: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.white};
    border-radius: 6px;
  }
`;

export { NavlinkButton, NavlinkButton2 };
