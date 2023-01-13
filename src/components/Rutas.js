import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Arriba from './Arriba'
import Productos from './Productos'

const Rutas = () => {
  return (
    <Router>
        <Arriba/>
        <Routes>
            <Route path='/productos' element={<Productos/>}></Route> 
        </Routes>
    </Router>
  )
}

export default Rutas
