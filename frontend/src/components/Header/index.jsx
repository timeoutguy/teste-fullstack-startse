import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <Navbar bg="primary" className="navbar-dark" expand="lg">
        <Navbar.Brand>
          <Link className="white-link" style={{fontSize: 22}} to='/'> Startse </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="white-link" to="/">Todos cursos</Link>
            <Link className="white-link" to="/new">Adicionar curso</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
