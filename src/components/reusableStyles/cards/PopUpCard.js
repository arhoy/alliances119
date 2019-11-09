import React from 'react';
import styled from '@emotion/styled';

const Container1 = styled.div`
  padding: 2rem;
  width: 60rem;
  height: 30rem;
  margin: auto;
  top: 50%;
  left: 50%;
  z-index: 12;
  display: block;
  background: ${props => props.theme.colors.lightgrey};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 90%;
    margin: 0 auto;
    height: auto;
  }

  & h2 {
    margin: 1rem 0;
    font-weight: bold;
    line-height: 2.9rem;
    font-size: 3.2rem;
    text-align: center;
  }
  & p {
    text-align: center;
  }
  & input,
  & button {
    padding: 1rem;
    outline: none;
    border: none;
  }
  & button {
    cursor: pointer;
  }
  .form {
    display: flex;
    margin: 2rem;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      display: grid;
    }
  }
  .blurbDesktop {
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      display: none;
    }
  }
  .blurbMobile {
    @media (min-width: ${props => props.theme.screenSize.mobileL}) {
      display: none;
    }
  }
`;

const Container1Orange = styled(Container1)`
  background: linear-gradient(to right bottom, #fdc830, #f37335);
`;

const Container1Purple = styled(Container1)`
  background: linear-gradient(to right bottom, #a8c0ff, #3f2b96);
  & h2 {
    color: ${props => props.theme.colors.white};
  }
`;

const PopUpCard1 = () => {
  return (
    <Container1>
      <h2>Subscribe Now</h2>
      <p className="blurbDesktop">
        By Subscribing below you are opting in to recieve emails from us
        relating to discounts and new products that you love
      </p>
      <p className="blurbMobile">
        Opt me in to get discounts on great products
      </p>
      <div className="form">
        <input placeholder="Your Email" />
        <button> Subscribe</button>
      </div>
    </Container1>
  );
};

const PopUpCard1Orange = () => {
  return (
    <Container1Orange>
      <h2>Subscribe Now</h2>
      <p className="blurbDesktop">
        By Subscribing below you are opting in to recieve emails from us
        relating to discounts and new products that you love
      </p>
      <p className="blurbMobile">
        Opt me in to get discounts on great products
      </p>
      <div className="form">
        <input placeholder="Your Email" />
        <button> Subscribe</button>
      </div>
    </Container1Orange>
  );
};

const PopUpCard1Purple = () => {
  return (
    <Container1Purple>
      <h2>Subscribe Now</h2>
      <p className="blurbDesktop">
        By Subscribing below you are opting in to recieve emails from us
        relating to discounts and new products that you love
      </p>
      <p className="blurbMobile">
        Opt me in to get discounts on great products
      </p>
      <div className="form">
        <input placeholder="Your Email" />
        <button> Subscribe</button>
      </div>
    </Container1Purple>
  );
};

export { PopUpCard1, PopUpCard1Orange, PopUpCard1Purple };
