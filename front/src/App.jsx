import React from 'react';
import { PokemonListProvider } from './contexts/PokemonListContext';
import PokemonList from './components/PokemonList';
import './App.css';
import Logo from './public/assets/logo.png';

function App() {
  return (
    <PokemonListProvider>
      <div className="App">
        <img alt="logo" src={Logo} />
        <h1>Hello Project</h1>
        <PokemonList />
      </div>
    </PokemonListProvider>
  );
}

export default App;
