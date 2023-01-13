import './App.css';
import Arriba from './components/Arriba';
import Carrusel from './components/Carrusel';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Rutas from './components/Rutas';

// const [estado, setContador]= useState(0 (para inicializar con int en 0)) 
// const sumarUno =() => setContador(contador+1)

function App() {
  return (
    
      <div className="App">
        <Arriba/>
        <Carrusel/>
        <Footer/>
      </div>
    
  );
}

export default App;
