import React from 'react';
import { PokemonListProvider } from './contexts/PokemonListContext';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  return (
    <PokemonListProvider>
      <div className="App">
        <h1>Hello Project</h1>
        <PokemonList />
      </div>
    </PokemonListProvider>
  );
}

export default App;
