import React from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

const NavigationBar = props => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <div id="name"> Caleb Choi </div>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem onClick={() => {props.selectTab('home');}}>
          HOME
        </NavItem>
        <NavItem onClick={() => {props.selectTab('about');}}>
          ABOUT
        </NavItem>
        <NavItem onClick={() => {props.selectTab('portfolio');}}>
          PORTFOLIO
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem onClick={()=> window.open("https://www.linkedin.com/in/calebhchoi", "_blank")}>
          LinkedIn
        </NavItem>
        <NavItem onClick={()=> window.open("https://github.com/calebchoi", "_blank")}>
          Github
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;