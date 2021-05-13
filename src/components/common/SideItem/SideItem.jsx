import './SideItem.css';
import { MenuItem } from 'react-pro-sidebar';
import React from 'react';

const SideItem = (props) => {
  const classNames = ['Nav-item'];
  if (props.selected) {
    classNames.push('Nav-item-selected');
  }

  if (props.vertical) { 
    classNames.push('Nav-item-vertical');
  }

  return (
    <MenuItem 
      style={{color:"#fff"}} 
      type="button"
      onClick={props.onNav}>
        {props.title}
    </MenuItem>
            
  );
};

export default SideItem;