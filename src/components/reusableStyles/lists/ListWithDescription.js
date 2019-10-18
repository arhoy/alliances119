import styled from '@emotion/styled';

import React from 'react';
import { A, Li, Span } from '../typography/Typography';

const StyledA = styled(A)`
  border-bottom: 1px solid ${props => props.theme.colors.primaryTransparent};
  color: ${props => props.theme.colors.primary};
  margin-right: 1rem;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.primaryDark};
  }
`;

const StyledLiType1 = styled(Li)`
  list-style: none;
`;

const ListVertical = ({ items }) =>
  items.map((item, i) => (
    <StyledLiType1 key={i}>
      <Span> {item.title} </Span>
      {item.urls.map(url => (
        <StyledA
          key={url.url}
          rel="noopener noreferrer"
          href={url.url}
          target="_blank"
        >
          {url.urlTitle}
        </StyledA>
      ))}
    </StyledLiType1>
  ));

export { ListVertical };
