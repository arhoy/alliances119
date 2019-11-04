import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import addToMailchimp from 'gatsby-plugin-mailchimp';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import { InputStyle1 } from '../reusableStyles/inputs/Input';
import { H2, P } from '../reusableStyles/typography/Typography';
import { FaTimes } from 'react-icons/fa';
import {
  SimpleAlertRed,
  SimpleAlertGreen,
} from '../reusableStyles/alerts/SimpleAlerts';

const MailChimpEmailForm1 = ({ timeToPopUp }) => {
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, timeToPopUp);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await addToMailchimp(email);
    if (result.result === 'error') {
      setError(true);
      // reset so message is not up for long
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      setSuccess(true);
      setTimeout(() => {
        setShowForm(false);
      }, 5000);
    }
    console.log('form submitted', result);
  };

  const closePopUp = () => {
    setShowForm(false);
  };

  const StyledForm = styled.form`
    position: fixed;
    transform: translate(-50%, -50%);
    padding: 3rem;
    width: 60rem;
    margin: auto;
    top: 50%;
    left: 50%;
    z-index: 12;
    display: block;
    background: ${props => props.theme.colors.lightgrey};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      width: 90%;
      margin: 0 auto;
    }
  `;

  const Container = styled.div`
    position: fixed;
    background: ${props => props.theme.colors.blackTransparent};
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 11;
  `;

  const Blurb = styled(P)`
    width: 75%;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      width: 90%;
      margin: 0 auto;
      text-align: center;
    }
  `;

  const Closed = styled(FaTimes)`
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    padding: 2px;
    font-size: 3rem;
    cursor: pointer;
  `;
  const SubContainer = styled.div``;

  const StyledH2 = styled(H2)`
    text-align: center;
    line-height: 3rem;
  `;

  if (showForm) {
    return (
      <>
        <Container onClick={closePopUp}></Container>
        <StyledForm onSubmit={handleSubmit}>
          <Closed onClick={closePopUp} />
          <StyledH2>
            {success ? `Submission Success!` : `Subscribe Now and Save!`}
          </StyledH2>
          <Blurb>
            Get the latest deals straight to your inbox, never miss a sale again
          </Blurb>

          <SubContainer>
            <InputStyle1
              autoFocus={true}
              type="email"
              placeholder="Your Email"
              onChange={event => setEmail(event.target.value)}
              value={email}
            />

            <ButtonStyle2 type="submit">Submit</ButtonStyle2>
          </SubContainer>
          {error && (
            <SimpleAlertRed>Form Submission was not successful</SimpleAlertRed>
          )}
          {success && (
            <SimpleAlertGreen>
              Thank you for subscribing! Sweet deals are coming to your inbox
            </SimpleAlertGreen>
          )}
        </StyledForm>
      </>
    );
  } else {
    return null;
  }
};

export default MailChimpEmailForm1;
