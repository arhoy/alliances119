// NO STYLES IN THIS FILE! Import from MegaMenuLists/ListStyles
import React from 'react';
import { MegaMenuUl, MegaMenuLi, MegaMenuLink } from './ListStyles';

import ListHeader from './ListHeader';

const List1 = () => {
  return (
    <>
      <MegaMenuUl>
        <ListHeader title="Clothing" />
        <MegaMenuLi>
          <MegaMenuLink>Shirts</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Pants</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Lingerie</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Yoga Wear</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Skirts</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Blouse</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Footwear" />
        <MegaMenuLi>
          <MegaMenuLink>Runners</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Dress</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Casual</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Hiking</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Beach</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Accessories" />
        <MegaMenuLi>
          <MegaMenuLink>Watches</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Smartwear</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Necklaces</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Bracelets</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink>Earrings</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
    </>
  );
};

export default List1;
