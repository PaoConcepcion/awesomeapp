import { Nav } from 'react-bootstrap';
import React from 'react';
import './NavItem.css';

const NavItem = (props) => {
  const classNames = ['Nav-item'];
  if (props.selected) {
    classNames.push('Nav-item-selected');
  }

  if (props.vertical) { 
    classNames.push('Nav-item-vertical');
  }

  return (
    <Nav.Link 
        type="button"
        onClick={props.onNav}>
            {props.title}
    </Nav.Link>
  );
};

export default NavItem;