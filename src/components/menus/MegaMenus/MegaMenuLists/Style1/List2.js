// NO STYLES IN THIS FILE! Import from MegaMenuLists/ListStyles
import React from 'react';
import { MegaMenuUl, MegaMenuLi, MegaMenuLink } from './ListStyles';

import ListHeader from './ListHeader';

const List2 = () => {
  return (
    <>
      <MegaMenuUl>
        <ListHeader title="Clothing" />
        <MegaMenuLi>
          <MegaMenuLink to="/">Shirts</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Pants</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Dress Socks</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Workout</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Muscle Shirts</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Jackets</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Footwear" />
        <MegaMenuLi>
          <MegaMenuLink to="/">Runners</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Dress</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Casual</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Hiking</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Beach</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Accessories" />
        <MegaMenuLi>
          <MegaMenuLink to="/">Watches</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Smart Wear</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Sun Glasses</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Necklaces</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/">Rings</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
    </>
  );
};

export default List2;
