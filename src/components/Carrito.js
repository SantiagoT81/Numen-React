import React, { useEffect, useState, useReducer} from 'react'
import axios from 'axios'
import ItemCarrito from './ItemCarrito';
import reducer from './reducer';
import { TYPES } from './actions';
import { carritoReducer, carritoInitialState } from './reducer';
import Producto from './Producto';

//Mappear productos en el div

const Carrito = () => {
  const [state,dispatch] = useReducer(carritoReducer,carritoInitialState)
  const actualizarEstado= async () => {
    const zapatillasURL = "http://localhost:3001/zapatillas";
    const carritoURL = "http://localhost:3001/carrito";

    const listaProductos = await axios.get(zapatillasURL);
    const carrito = await axios.get(carritoURL);

    const nuevosProductos = listaProductos.data;
    const nuevoCarrito = carrito.data;
    dispatch({type: TYPES.READ_STATE, payload: [nuevosProductos,nuevoCarrito]});
  };
  useEffect(() => {
    actualizarEstado();
  }, []);

  const {products, carrito} = state;

  const addToCart = (id) => {
    console.log(id)
    dispatch({type: TYPES.ADD_SHOES, payload: id});
  };
  const deleteShoes = (id, eliminarTodos) => {
    if (eliminarTodos) {
      dispatch({type: TYPES.REMOVE_ALL, payload: id});
    } else {
      dispatch({type: TYPES.REMOVE_SHOES, payload: id});
    }
  };
  const clearCart = () => {
    dispatch({type: TYPES.FLUSH_CART});
  };

  return (
    <div className="container-fluid">
      <h1 className='centrado'>Carrito de Compras</h1>
      <h2 className='centrado'>Productos</h2>
      <div className='d-flex justify-content-center'>
        {products.map((producto) => {
          return (
            <Producto key={producto.id} data={producto} addToCart={addToCart} />
          );
        })}
      </div>
      <h2 className='centrado'>Carrito</h2>
      <div className='d-flex'>
        {carrito.map((item, index) => {
          return <ItemCarrito key={index} data={item} deleteFromCart = {deleteShoes} />;
        })}
      </div>
      <button className="btn btn-dark " onClick={() => clearCart()}>Limpiar</button>
    </div>
  );
};

export default Carrito