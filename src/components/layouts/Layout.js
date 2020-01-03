import React from 'react';
import { Global, css } from '@emotion/core';

import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Nav from '../navigation/Nav';
import Footer from './Footer';

// real global scss styles
import '../../scss/main.scss';

const theme = {
  colors: {
    primary: 'rgb(240, 92, 34)',
    primaryDark: 'rgb(232, 70, 11)',
    primaryLight: 'rgb(249, 106, 54)',
    primaryVeryLight: 'rgb(244, 156, 124)',
    primaryTransparent: 'rgb(240, 92, 34,0.15)',
    secondary: 'rgb(24, 163, 201)',
    lightgrey: '#E0E0E0',
    lightgrey2: 'rgb(224, 217, 217)',
    white: 'white',
    black: '#1a1a1a',
    blackTransparent: 'rgba(41, 43, 46, 0.8)',
    darkGrey: 'rgb(109, 109, 109)',
    red: 'rgb(218, 18, 31)',
    redTransparent: 'rgb(218, 18, 31,0.8)',
    lightRed: 'rgb(232, 180, 182)',
    blue: 'rgb(19, 73, 178)',
    lightGreen: '#D4EDDA',
    green: 'rgb(31, 90, 46)',
  },
  pageWidth: {
    fixed: '1200px',
    fixedHome: '1200px',
  },
  screenSize: {
    mobileL: '600px',
    mobileS: '400px',
    mobileVS: '300px',
    eightHundred: '800px',
    nineHundred: '900px',
    oneThousand: '1000px',
    fixedStandard: '1200px',
  },
};

const Div = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
    [center-end] 1fr [full-end];
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns:
      [full-start] 0.5fr
      [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
      [center-end] 0.5fr [full-end];
  }
`;

const DivFixed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 1500px;
  margin: 0 auto;
`;

const NavLayout = styled.header`
  grid-column: center-start/center-end;
`;

const FullNavLayout = styled.header`
  grid-column: full-start/full-end;
`;

const Main = styled.main`
  grid-column: center-start/center-end;
`;

const MainFull = styled.main`
  grid-column: full-start/full-end;
`;

const FooterLayout = styled.footer`
  grid-column: center-start/center-end;
`;

const FullFooterLayout = styled.footer`
  grid-column: full-start/full-end;
`;

const Layout = ({ children, full }) => {
  const bodyColor = 'white';
  const primaryColor = 'rgb(92, 52, 145)';

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          body {
            background: ${bodyColor};
            margin: 0;
            font-family: Poppins, Roboto, Helvetica, Arial, sans-serif;
          }

          h1 {
            color: ${primaryColor};
            font-family: Poppins;
          }
        `}
      />

      {full ? (
        <ThemeProvider theme={theme}>
          <Div>
            <FullNavLayout>
              <Nav />
            </FullNavLayout>
            <MainFull>{children}</MainFull>
            <FullFooterLayout>
              <Footer />
            </FullFooterLayout>
          </Div>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <NavLayout>
            <Nav />
          </NavLayout>
          <DivFixed>
            <Main>{children}</Main>
          </DivFixed>
          <FooterLayout>
            <Footer />
          </FooterLayout>
        </ThemeProvider>
      )}
    </>
  );
};
Layout.propTypes = {
  full: PropTypes.bool,
};
Layout.defaultProps = {
  full: true,
};

export default Layout;
