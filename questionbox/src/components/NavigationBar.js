import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #D6DBD2;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Transverse</Navbar.Brand>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/askquestion">Ask A Question</Nav.Link>
      <Nav.Link href="/userprofile">Transversers</Nav.Link>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Styles>
)