import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const MailChimpEmailForm1 = () => {
  const [email, setEmail] = useState('');

  const handleInput = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await addToMailchimp(email);
    console.log('result was submitted!', result, email);
  };
  return (
    <form onSubmit={e => handleSubmit(e, email)}>
      <h2> Subscribe!</h2>
      <div>
        <input
          onChange={handleInput}
          placeholder="Email Address"
          name="email"
          type="email"
        />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default MailChimpEmailForm1;
