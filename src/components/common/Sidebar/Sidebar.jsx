import { ProSidebar, Menu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from 'react';
import SideItem from '../SideItem/SideItem';
import './Sidebar.css';

const Sidebar = (props) => {
  const handleNavigation = (selectedItem) => () => props.onNav(selectedItem);

    return (
        <ProSidebar>
            <Menu iconShape="square" style={{backgroundColor:"#78C2AD", height:"100vh"}}>
            {props.items.map(item => (
              <SideItem
                key={item.title}
                title={item.title}
                vertical
                selected={item.id === props.selected}
                onNav={handleNavigation(item.id)}
              />
            ))}
            </Menu>
        </ProSidebar>
    );
}

export default Sidebar;
