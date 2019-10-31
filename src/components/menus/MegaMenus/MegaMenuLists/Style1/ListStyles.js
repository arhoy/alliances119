import styled from '@emotion/styled';

import NoStyleLink from '../../../../Links/NoStyleLink';

const MegaMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MegaMenuLi = styled.li`
  margin: 1px 0;
  padding: 2px 4px;
  &:hover {
    font-weight: bolder;
  }
`;

const MegaMenuLink = styled(NoStyleLink)``;

export { MegaMenuUl, MegaMenuLi, MegaMenuLink };
