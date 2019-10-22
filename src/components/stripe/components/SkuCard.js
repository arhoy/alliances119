import React from 'react';
import styled from '@emotion/styled';

import { FaSketch } from 'react-icons/fa';

const Container = styled.div`
  display: grid;
  background: ${props => props.theme.colors.lightgrey};
  border-radius: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 28rem;
  height: 20rem;
  margin: 2rem;
  padding: 1rem;
  & h4 {
    grid-column: 1/-1;
    text-align: center;
  }
  & p {
    color: ${props => props.theme.colors.primaryDark};
    grid-column: 1/-1;
  }
`;

const Image = styled.img`
  width: 10rem;

  background-size: cover;
  grid-column: 2/-1;
  display: flex;
  justify-self: flex-end;
`;

const StripeCheckoutButton = styled.button`
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  color: ${props => props.theme.colors.white};
  display: flex;
  text-align: center;
  justify-content: center;
  justify-self: flex-start;
  align-self: flex-end;
  border-radius: 1rem;
`;

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2);
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  return numberFormat.format(price);
};

const SkuCard = class extends React.Component {
  async redirectToCheckout(event, sku, quantity = 1) {
    event.preventDefault();
    const { error } = await this.props.stripe.redirectToCheckout({
      items: [{ sku, quantity }],
      successUrl: `${window.location.origin}/success/`,
      cancelUrl: `${window.location.origin}/advanced`,
    });

    if (error) {
      console.warn('Error:', error);
    }
  }

  render() {
    const sku = this.props.sku;
    return (
      <Container>
        <h4>{sku.attributes.name}</h4>
        <p>
          <FaSketch /> Price: {formatPrice(sku.price, sku.currency)}
        </p>

        <StripeCheckoutButton
          onClick={event => this.redirectToCheckout(event, sku.id)}
        >
          BUY NOW
        </StripeCheckoutButton>
        <Image src={sku.image} />
      </Container>
    );
  }
};

export default SkuCard;
