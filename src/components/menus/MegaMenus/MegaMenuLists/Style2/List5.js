// NO STYLES IN THIS FILE! Import from MegaMenuLists/ListStyles
import React from 'react';
import {
  MegaMenuUl,
  MegaMenuLi,
  MegaMenuLink,
  MegaMenuSpan,
} from './ListStyles';

import ListHeader from './ListHeader';

const List5 = () => {
  return (
    <>
      <MegaMenuUl>
        <ListHeader title="Components" />
        <MegaMenuLi>
          <MegaMenuLink to="/examples/navigation-examples">
            Navigation
          </MegaMenuLink>
          <MegaMenuSpan spanColor="primary">New</MegaMenuSpan>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/bags">Buttons</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/bags">Cards</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/bags">Carousel</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/bags">Alerts</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/bags">Forms</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Landing Pages" />

        <MegaMenuLi>
          <MegaMenuLink to="/demos/fashion-one">Fashion One</MegaMenuLink>
          <MegaMenuSpan>Hot</MegaMenuSpan>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/demos/fashion-two">Fashion Two</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/demos/fashion-three">Fashion Three</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/shoes">Lander 4</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/shoes">Lander 5</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Other" />
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Styles</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Porfolio</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">About Me</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/pants">Contact</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
    </>
  );
};

export default List5;
