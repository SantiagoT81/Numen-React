import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../images/nike.png';
import carrito from '../images/cart.png';
import {BrowserRouter as Router, Link} from 'react-router-dom';


const Arriba = () => {
  return (
    <Navbar bg='light' expand='lg'>
        <Container>
          <Router>
            <Navbar.Brand>
                <Image src={logo} width='25%'/>
            </Navbar.Brand>
            <Nav>
              <Nav.Link style={{fontSize: 20}} to='#home'>
                  <strong>INICIO</strong>
              </Nav.Link>
              <Nav.Link style={{fontSize: 20}} to='#contacto'>
                <strong>SOBRE NOSOTROS</strong>
              </Nav.Link>
              <Nav.Link>
                  <Image src={carrito} width='35em'/>
              </Nav.Link>
            </Nav>
          </Router>
        </Container>
    </Navbar>
  )
}

export default Arriba

