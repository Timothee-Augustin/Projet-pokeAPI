import React from 'react';
import Pokemon from '../components/Pokemon';
import { usePokemonList } from '../contexts/PokemonListContext';
import './Pokedex.css';

function Pokedex() {
  const { pokemonList } = usePokemonList();
  return (
    <div className="pokedex">
      {pokemonList && pokemonList.slice(0, 493).map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Pokedex;
