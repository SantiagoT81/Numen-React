import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../images/nike.png';
import carrito from '../images/cart.png';
import { Link } from 'react-router-dom';


const Arriba = () => {
  return (
    <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand>
              <Image src={logo} width='25%'/>
          </Navbar.Brand>
          <Nav>
            <Nav.Link style={{fontSize: 20}} as={Link} to='/'> <strong>INICIO</strong> </Nav.Link>             
            <Nav.Link style={{fontSize: 20}} as={Link} to='/contacto'> <strong>SOBRE NOSOTROS</strong></Nav.Link>
            <Nav.Link  as={Link} to='/carrito'><Image src={carrito} width='35em'/></Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default Arriba

