import React, { useEffect, useState , setData} from 'react'
import axios from 'axios'
import ItemCarrito from './ItemCarrito';

//Mappear productos en el div

const Carrito = () => {
  const [cargando,setCargando] = useState(false);
  const [data,setData] = useState([]);

  useEffect(() => {
    setCargando(true);
    axios({
      method:"GET",
      url:"http://localhost:3001/zapatillas"
    }).then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(e => console.log(e))
    .finally(() => setCargando(false));
  },[])

  return (
    <div className='container-fluid'>
        {cargando && <div> <h1> Cargando... </h1> </div>}
        <h1 className='subtitulo'>NUESTROS PRODUCTOS</h1>
        <h2 style={{textAlign:'center'}}>CARRITO</h2>
        <div className='d-flex flex-row mb-3 justify-content-center'>
          <ItemCarrito/>
        </div>
        <button className='btn btn-dark'>LIMPIAR CARRO</button>
    </div>
  )
}

export default Carrito