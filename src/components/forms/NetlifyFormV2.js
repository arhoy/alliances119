import React, { useState } from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby-link';

import { ButtonStyle3 } from '../reusableStyles/buttons/Button';

// Function to Make Netlify Submission and Gatsby Work
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Form = styled.form`
  border-bottom: 1rem solid ${props => props.theme.colors.primaryDark};
`;

const Row = styled.div`
  display: flex;
`;

const Field = styled.div`
  width: 100%;
  & .hidden {
    display: none;
  }
`;

const Label = styled.label`
  padding: 1rem;
  display: block;
  outline: none;
  font-size: 1.5rem;
  & h6 {
    margin-bottom: 3px;
    font-weight: 500;
    font-size: 1.5rem;
  }
  & input,
  textarea {
    padding: 0.5rem;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.primaryDark};
    font-family: Poppins, Roboto;
    font-size: 1.6rem;
  }
`;

const FormTitle = styled.h4`
  font-weight: bold;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin: 0 1rem;
  letter-spacing: 5px;
`;

const TextArea = styled.textarea`
  background: ${props => props.theme.colors.darkGrey};
  height: 10rem;

  &::placeholder {
    color: ${props => props.theme.colors.lightgrey};
    text-indent: 1rem;
  }
`;
const Input = styled.input`
  padding-left: 1rem;
  background: ${props => props.theme.colors.darkGrey};
  color: ${props => props.theme.colors.lightgrey};

  outline: none;
  border: none;
  &::placeholder {
    color: ${props => props.theme.colors.lightgrey};
    text-indent: 1rem;
  }
`;

const NetlifyFormV2 = ({ title, color }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
    };

    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        firstName: userData.firstName,
        email: userData.email,
        message: userData.message,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <>
      <FormTitle>{title || 'How Can We Help?'}</FormTitle>
      <Form
        name="contact-2"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
        onSubmit={handleSubmit}
      >
        <Field className="hidden">
          <Label className="hidden">
            Hidden Honey Bot Spam Field: <input name="bot-field" />
          </Label>
        </Field>

        <Row>
          <Field>
            <Label>
              <h6> First Name *:</h6>

              <Input
                onChange={event => setFirstName(event.target.value)}
                placeholder="First Name"
                style={{ background: `${color}` }}
                type="text"
                name="firstName"
                required
              />
            </Label>
          </Field>
          <Field>
            <Label>
              <h6> Last Name *:</h6>

              <Input
                onChange={event => setLastName(event.target.value)}
                placeholder="Last Name"
                style={{ background: `${color}` }}
                type="text"
                name="lastName"
                required
              />
            </Label>
          </Field>
        </Row>
        <Row>
          <Field>
            <Label>
              <h6> Phone Number *:</h6>

              <Input
                onChange={event => setPhoneNumber(event.target.value)}
                placeholder="Phone Number"
                style={{ background: `${color}` }}
                type="text"
                name="phoneNumber"
                required
              />
            </Label>
          </Field>
          <Field>
            <Label>
              <h6> Email Address *:</h6>

              <Input
                style={{ background: `${color}` }}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email Address"
                type="email"
                name="email"
                required
              />
            </Label>
          </Field>
        </Row>
        <Row>
          <Field>
            <Label>
              <h6>Message:</h6>

              <TextArea
                style={{ background: `${color}` }}
                onChange={event => setMessage(event.target.value)}
                placeholder=""
                name="message"
                required
                minLength="10"
                maxLength="1000"
              />
            </Label>
          </Field>
        </Row>

        <Field>
          <ButtonStyle3 type="submit">Send Info To Us</ButtonStyle3>
        </Field>
      </Form>
    </>
  );
};

export { NetlifyFormV2 };
