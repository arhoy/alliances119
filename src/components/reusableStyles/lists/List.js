import styled from '@emotion/styled';

import React from 'react';
import { A, Li, Ul } from '../typography/Typography';

const StyledInlineLi = styled(Li)`
  display: inline-block;
  margin: 1rem;
`;

const StyledA = styled(A)`
  border-bottom: 1px solid ${props => props.theme.colors.primaryTransparent};
  color: ${props => props.theme.colors.primary};
  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.primaryDark};
  }
`;

const ListInline = ({ urls }) =>
  urls.map(url => (
    <StyledInlineLi key={url.url}>
      <StyledA rel="noopener noreferrer" href={url.url} target="_blank">
        {url.title}
      </StyledA>
    </StyledInlineLi>
  ));

const ListVertical = ({ urls }) => (
  <Ul>
    {urls.map(url => (
      <Li key={url.url}>
        <StyledA rel="noopener noreferrer" href={url.url} target="_blank">
          {url.title}
        </StyledA>
      </Li>
    ))}
  </Ul>
);

export { ListInline, ListVertical };
