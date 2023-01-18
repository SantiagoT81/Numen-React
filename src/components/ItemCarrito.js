import React from 'react';

const ItemCarrito = ({data, deleteFromCart}) => {
  const {id,modelo,precio,cantidad } = data
  return (
    <div>
        <h4>{modelo}</h4>
        <h5>
          $ {precio} x {cantidad} = $ {precio * cantidad}
        </h5>
        <div className='empujado'>
          <button onClick={() => deleteFromCart(id, false)} className='btn btn-dark'>
            Eliminar uno
          </button>
          <button className='btn btn-dark' onClick={() => deleteFromCart(id,true)}> Eliminar todos</button>
        </div>
    </div> 
  )
}

export default ItemCarrito