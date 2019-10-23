import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const StyledLinkContainer = styled(Link)`
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

const LinkToProduct = styled(Link)``;

const Bag = ({ bag: item }) => {
  return (
    <StyledLinkContainer to={`/bags/${item.productSlug}`}>
      <ImageContainer>
        <Image src={item.mainImage} />
        <h4>{item.productName}</h4>
        <p>Price: {item.price}</p>
      </ImageContainer>

      <LinkToProduct>BUY NOW</LinkToProduct>
    </StyledLinkContainer>
  );
};

export default Bag;
