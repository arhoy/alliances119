import styled from '@emotion/styled';
import Image from 'gatsby-image';

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  grid-column-gap: 1rem;
  padding: 4rem 0;
  @media (max-width: ${props => props.theme.screenSize.nineHundred}) {
    grid-template-columns: 1fr;
    grid-row-gap: 6rem;
  }
`;

const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.h1`
  text-align: center;
  font-size: 4rem;
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

const ProductRatingDescription = styled.span``;

const StyledImage = styled(Image)`
  border-radius: 1rem;
  max-width: 100%;
  max-height: 100%;
`;

const ProductContentContainer = styled.div`
  max-width: 70%;
  margin: 0 auto;
`;

export {
  ProductContainer,
  ProductImageContainer,
  ProductContentContainer,
  StyledImage,
  ProductTitle,
  ProductRating,
  ProductRatingStars,
  ProductRatingDescription,
};
