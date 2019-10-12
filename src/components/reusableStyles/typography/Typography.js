import styled from '@emotion/styled';

const H1 = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.colors.black};
`;

const H2 = styled.h2`
  font-size: 3rem;
  color: ${props => props.theme.colors.black};
`;

const A = styled.a`
  color: ${props => props.theme.colors.black};
  text-decoration: none;
`;

const Li = styled.li`
  color: ${props => props.theme.colors.black};
`;

const Ul = styled.ul`
  margin: 1rem 0;
`;

const Span = styled.span``;

export { H1, H2, A, Li, Ul, Span };
