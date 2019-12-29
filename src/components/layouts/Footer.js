import React from 'react';
import styled from '@emotion/styled';

import socialIcons from '../../constants/socialIcons';
import NoStyleLink from '../Links/NoStyleLink';
import { NetlifyFormV2 } from '../forms/NetlifyFormV2';

const d = new Date().getFullYear();

const Container = styled.div`
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const Menu = styled.ul`
  display: grid;
  width: 100%;

  grid-template-columns: 4fr 6fr;
  grid-column-gap: 2rem;
  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    grid-template-columns: 1fr;
    width: 80%;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const MenuLHS = styled.div`
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    margin: 0 2rem;
  }
`;

const MenuRHS = styled.div`
  display: grid;
  color: ${props => props.theme.colors.lightgrey};
  grid-template-columns: repeat(3, 1fr);

  justify-content: center;
  width: 100%;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;
const SocialIconContainer = styled.div``;
const SocialIcon = styled.a`
  color: ${props => props.theme.colors.lightgrey};
  font-size: 3rem;
  margin-right: 1rem;
`;

const LinkColumnContainers = styled.div`
  background: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;

  font-size: 1.5rem;
`;

const LinkContainers = styled.div`
  background: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;

  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem 0;
`;

const LinkHeaders = styled.h6`
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
const LinkHeadersPrimary = styled(LinkHeaders)`
  color: ${props => props.theme.colors.primaryLight};
  font-size: 2.5rem;
  font-weight: 500;
`;
const LinkDescription = styled.p`
  color: ${props => props.theme.colors.primaryLight};
`;

const CustomLinks = styled(NoStyleLink)`
  color: ${props => props.theme.colors.lightgrey};
`;

const A = styled.a`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.lightgrey};
  text-decoration: none;
`;
const Attribution = styled.p`
  margin-top: 2rem;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const Footer = () => {
  return (
    <Container>
      <Menu>
        <MenuLHS>
          <NetlifyFormV2 />
        </MenuLHS>
        <MenuRHS>
          <LinkColumnContainers>
            <LinkContainers>
              <LinkHeaders>Text Or Call</LinkHeaders>
              <LinkHeadersPrimary style={{ marginBottom: '-0.5rem' }}>
                587-772-5536
              </LinkHeadersPrimary>
            </LinkContainers>
            <LinkContainers>
              <LinkHeaders>Find Products</LinkHeaders>
              <CustomLinks to="/">Amazon Products</CustomLinks>
              <CustomLinks to="/">Other Products</CustomLinks>
            </LinkContainers>
            <LinkContainers>
              <LinkHeaders>Can't Find Your Product?</LinkHeaders>
              <CustomLinks to="/">Tell Us Which Product</CustomLinks>
              <CustomLinks to="/">Report an issue</CustomLinks>
            </LinkContainers>
          </LinkColumnContainers>
          <LinkColumnContainers>
            <LinkContainers>
              <LinkHeaders>Follow Us</LinkHeaders>
              <SocialIconContainer>
                {socialIcons.map(icon => (
                  <SocialIcon
                    key={icon.url}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon.icon}
                  </SocialIcon>
                ))}
              </SocialIconContainer>
            </LinkContainers>
            <LinkContainers>
              <LinkHeaders>About Us</LinkHeaders>
              <CustomLinks to="/">Why Choose Us</CustomLinks>
              <CustomLinks to="/">Blog</CustomLinks>
              <CustomLinks to="/">Rewards Card</CustomLinks>
              <CustomLinks to="/">Who We Are</CustomLinks>
              <CustomLinks to="/">Contact Us</CustomLinks>
            </LinkContainers>
          </LinkColumnContainers>
          <LinkColumnContainers>
            <LinkContainers>
              <LinkHeaders>Address</LinkHeaders>
              <LinkDescription>
                725 5th Ave, New York, NY 10022, United States
              </LinkDescription>
            </LinkContainers>
            <LinkContainers>
              <LinkHeaders>Our Site</LinkHeaders>
              <CustomLinks to="/">Products</CustomLinks>
              <CustomLinks to="/">Brands</CustomLinks>
              <CustomLinks to="/">Partners</CustomLinks>
              <CustomLinks to="/">Terms</CustomLinks>
              <CustomLinks to="/">Privacy</CustomLinks>
              <CustomLinks to="/">Contact</CustomLinks>
            </LinkContainers>
          </LinkColumnContainers>
        </MenuRHS>
      </Menu>

      <Attribution>
        Created by{' '}
        <A target="_blank" rel="noopener noreferrer" href="https://aquasar.io/">
          Aquasar.io {d} &copy;
        </A>
      </Attribution>
    </Container>
  );
};

export default Footer;
