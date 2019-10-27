import styled from '@emotion/styled';
import Image from 'gatsby-image';

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr;
  grid-column-gap: 1rem;
  @media (max-width: ${props => props.theme.screenSize.nineHundred}) {
    grid-template-columns: 1fr;
    grid-row-gap: 6rem;
  }
`;

const ProductContainerLHS = styled.div`
  @media (min-width: ${props => props.theme.screenSize.nineHundred}) {
    display: flex;
    justify-content: flex-end;
  }
`;

const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
  @media (min-width: ${props => props.theme.screenSize.nineHundred}) {
    max-width: 35rem;
  }
`;

const ProductTitle = styled.h1`
  text-align: center;
  font-size: 3.2rem;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.blue} 0%,
    ${props => props.theme.colors.primary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProductRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductRatingStars = styled.span`
  color: ${props => props.theme.colors.primary};
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductRatingDescription = styled.span``;

const StyledImage = styled(Image)`
  border-radius: 1rem;
`;

const ProductContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
  padding: 0 1rem;
  @media (max-width: ${props => props.theme.screenSize.nineHundred}) {
    max-width: 100%;
  }
`;

const StyledOldPrice = styled.span`
  color: ${props => props.theme.colors.darkgrey};
  text-decoration: line-through;
`;

const StyledPrice = styled.span`
  color: ${props => props.theme.colors.black};
  font-size: 2.4rem;
  font-weight: bold;
`;

const StyledDiscountPrice = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
  margin-left: 6px;
`;

const StyledDiscountBadge = styled.span`
  padding: 2px 4px;
  margin-left: 2rem;

  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  font-size: 1.2rem;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;

const SecondaryProductImageContainer = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
`;

const SecondaryProductImage = styled.img`
  max-width: 15rem;
  padding: 0 2rem;
`;

export {
  ProductContainer,
  ProductContainerLHS,
  ProductImageContainer,
  ProductContentContainer,
  StyledImage,
  ProductTitle,
  ProductRating,
  ProductRatingStars,
  ProductRatingDescription,
  PriceContainer,
  StyledOldPrice,
  StyledDiscountPrice,
  StyledPrice,
  StyledDiscountBadge,
  SecondaryProductImageContainer,
  SecondaryProductImage,
};
