import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 3rem;
  background: ${props => props.theme.colors.lightgrey};
  border-radius: 1rem;
  justify-content: space-between;

  &:hover {
    background: ${props => props.theme.colors.primaryTransparent};
  }

  width: 28rem;
  height: 25rem;
`;

const ImageContainer = styled.div`
  text-align: center;
  padding: 0 2rem;
`;

const Image = styled.img`
  width: 50%;
  object-fit: cover;
`;

const StripeCheckoutButton = styled.button`
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    cursor: pointer;
  }

  border-radius: 1rem;
  margin-bottom: 1rem;
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

const AmazonCard = class extends React.Component {
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
        <ImageContainer>
          <Image src={sku.image} />
          <h4>{sku.attributes.name}</h4>
          <p>Price: {formatPrice(sku.price, sku.currency)}</p>
        </ImageContainer>

        <StripeCheckoutButton
          onClick={event => this.redirectToCheckout(event, sku.id)}
        >
          BUY NOW
        </StripeCheckoutButton>
      </Container>
    );
  }
};

export default AmazonCard;
