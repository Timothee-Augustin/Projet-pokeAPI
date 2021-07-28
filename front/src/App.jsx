import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PokemonListProvider } from './contexts/PokemonListContext';
import NavBar from './components/NavBar';
import Routes from './pages/Routes';
import './App.css';
import Logo from './public/assets/logo.png';

function App() {
  return (
    <PokemonListProvider>
      <BrowserRouter>
        <div className="App">
          <div id="logo">
            <img className="logo" alt="logo" src={Logo} />
          </div>
          <NavBar />
          <Routes />
        </div>
      </BrowserRouter>
    </PokemonListProvider>
  );
}

export default App;
