import './App.css';
import Arriba from './components/Arriba';
import Carrusel from './components/Carrusel';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <header className="App-header">
        <Arriba/>
        </header>
        <Carrusel/>
        <Footer/>
      </div>
    
  );
}

export default App;
