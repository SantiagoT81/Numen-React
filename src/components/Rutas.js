import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Arriba from './Arriba'
import Carrito from './Carrito'
import Footer from './Footer'
import Inicio from './Inicio'
import Error from './Error'
import Contacto from './Contacto'

const Rutas = () => {
  return (
    <Router>
        <Arriba/>
        <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/carrito' element={<Carrito/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>  
            <Route path='/*' element={<Error/>}></Route>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default Rutas
