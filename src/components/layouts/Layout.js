import React from 'react';
import { Global, css } from '@emotion/core';
import Nav from './Nav';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';

// real global scss styles
import '../../scss/main.scss';
import Footer from './Footer';

const theme = {
  colors: {
    primary: 'rgb(92, 52, 145)',
    primaryDark: 'rgb(73, 35, 122)',
    primaryLight: 'rgb(148, 103, 206)',
    primaryTransparent: 'rgba(92, 52, 145,0.2)',
    lightgrey: '	rgb(240,240,240)',
    white: '#fff',
    black: '#1a1a1a',
    darkgrey: 'rgb(109, 109, 109)',
  },
  pageWidth: {
    fixed: '800px',
    fixedHome: '900px',
  },
  screenSize: {
    mobileL: '600px',
  },
};

const Div = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
    [center-end] 1fr [full-end];
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const NavLayout = styled.header`
  grid-column: center-start/center-end;
`;

const Main = styled.main`
  margin-top: 3rem;
  grid-column: center-start/center-end;
`;

const FooterLayout = styled.footer`
  grid-column: center-start/center-end;
`;

const Layout = ({ children }) => {
  const white = '#fff';
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
            background: ${white};
            margin: 0;
            font-family: Poppins, Roboto, Helvetica, Arial, sans-serif;
          }

          h1 {
            color: ${primaryColor};
            font-family: Poppins;
          }
        `}
      />

      <ThemeProvider theme={theme}>
        <Div>
          <NavLayout>
            <Nav />
          </NavLayout>
          <Main>{children}</Main>
          <FooterLayout>
            <Footer />
          </FooterLayout>
        </Div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
