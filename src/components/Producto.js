import React from "react";
import { Card } from "react-bootstrap";
import logo from '../images/shoes.png'

const Producto = (props) => {
  const { data, addToCart } = props;

  return (
    <Card>
        <Card.Img variant='top' src={logo}/>
        <Card.Body className='tarjeta'>
            <Card.Title className='texto'>{data.modelo}</Card.Title>
            <Card.Text className='texto'>$ {data.precio}</Card.Text>
            <button className='btn btn-light btn-sm' onClick={() => addToCart(data.id)}>Agregar al carro</button>
        </Card.Body>
    </Card>
  )
}

export default Producto;