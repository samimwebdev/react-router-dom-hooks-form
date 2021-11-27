import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

export const MainNavbar = () => {
  return (
    <Navbar bg='light' expand='sm'>
      <Container>
        <Navbar.Brand>React Router DOM</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <NavLink
              to='home'
              className={({ isActive }) =>
                isActive ? 'active nav-link' : 'nav-link'
              }
            >
              Home
            </NavLink>
            <NavLink
              to='about'
              className={({ isActive }) =>
                isActive ? 'active nav-link' : 'nav-link'
              }
            >
              About
            </NavLink>
            <NavLink
              to='contact'
              className={({ isActive }) =>
                isActive ? 'active nav-link' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
