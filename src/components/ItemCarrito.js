import React from 'react';
import Card from 'react-bootstrap/Card';
import logo from '../images/shoes.png';

const ItemCarrito = (props) => {
  return (
    <div>
        <Card>
            <Card.Img variant='top' src={logo}/>
            <Card.Body className='tarjeta'>
                <Card.Title className='texto'>Modelo</Card.Title>
                <Card.Text className='texto'>Precio</Card.Text>
                <button className='btn btn-light btn-sm'>Agregar al carro</button>
            </Card.Body>
        </Card>

    </div>
  )
}

export default ItemCarrito