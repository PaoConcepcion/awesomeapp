import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavItem from '../NavItem/NavItem';
import { viewsEnum } from '../../../utils/constants';
import './NavigationBar.css';

const items = [
    { title: 'Home', id: viewsEnum.HOME },
    { title: 'Exercises', id: viewsEnum.EXERCISES },
];

const NavigationBar = (props) => {

    const handleNavigation = (newView) => () => {
        if (newView !== props.view) {
            props.onNav(newView);
        }
    };

    return (
        <Navbar collapseOnSelect expand='sm' bg='primary' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                    {items.map(item => (
                        <NavItem
                        key={item.title}
                        selected={props.view === item.id}
                        onNav={handleNavigation(item.id)}
                        title={item.title}
                        />
                    ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;