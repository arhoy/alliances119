import React from 'react';
import socialIcons from '../../constants/socialIcons';
import styled from '@emotion/styled';
import footerImage from '../../../images/canada.png';

const d = new Date().getFullYear();

const FooterStyle = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  max-width: ${props => props.theme.pageWidth.fixed};
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  a {
    color: black;
    font-size: 3rem;
    margin: 1rem;
    padding: 1rem;
  }
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 4px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <ul>
        {socialIcons.map(icon => (
          <a
            key={icon.url}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </a>
        ))}
      </ul>
      <Div>
        YEG | Alberta | <Img alt="" src={footerImage} />
      </Div>
      <p>Aquasar Blog {d} &copy; </p>
    </FooterStyle>
  );
};

export default Footer;
