import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import addToMailchimp from 'gatsby-plugin-mailchimp';

import { InputStyle1 } from '../reusableStyles/inputs/Input';

import { FaTimes } from 'react-icons/fa';
import {
  SimpleAlertRed,
  SimpleAlertGreen,
} from '../reusableStyles/alerts/SimpleAlerts';
import {
  StyledForm2,
  Button1,
  Blurb,
  StyledH2,
  SubContainer,
} from './form-styles/StyledForms';

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

  const Container = styled.div`
    position: fixed;
    background: ${props => props.theme.colors.blackTransparent};
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 11;
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

  if (showForm) {
    return (
      <>
        <Container onClick={closePopUp}></Container>
        <StyledForm2 onSubmit={handleSubmit}>
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

            <Button1 type="submit">Submit</Button1>
          </SubContainer>
          {error && (
            <SimpleAlertRed>Form Submission was not successful</SimpleAlertRed>
          )}
          {success && (
            <SimpleAlertGreen>
              Thank you for subscribing! Sweet deals are coming to your inbox
            </SimpleAlertGreen>
          )}
        </StyledForm2>
      </>
    );
  } else {
    return null;
  }
};

export default MailChimpEmailForm1;
