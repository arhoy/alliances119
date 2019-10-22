import styled from '@emotion/styled';

import React from 'react';
import { A, Li, Ul, Span } from '../typography/Typography';

const StyledA = styled(A)`
  border-bottom: 1px solid ${props => props.theme.colors.primaryTransparent};
  color: ${props => props.theme.colors.primary};
  margin: 0 0.5rem;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.primaryDark};
  }
`;

const StyledSpan = styled.span`
  border-bottom: 1px solid ${props => props.theme.colors.primaryTransparent};
  color: ${props => props.theme.colors.primary};
  margin: 0 0.5rem;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.primaryDark};
  }
`;

const ListVertical = ({ items, margin }) => (
  <Ul>
    {items.map((item, i) => (
      <Li key={i} style={{ margin: `${margin}` }}>
        <Span> {item.title} </Span>
        {item.urls.map((url, i) => {
          if (url.noLink) {
            return <StyledSpan key={i}>{url.urlTitle}</StyledSpan>;
          } else {
            return (
              <StyledA
                key={i}
                rel="noopener noreferrer"
                href={url.url}
                target="_blank"
              >
                {url.urlTitle}
              </StyledA>
            );
          }
        })}
      </Li>
    ))}
  </Ul>
);

export { ListVertical };
