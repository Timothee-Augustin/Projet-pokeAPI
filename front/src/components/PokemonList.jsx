import React from 'react';
import { usePokemonList } from '../contexts/PokemonListContext';

function PokemonList() {
  const { pokemonList } = usePokemonList();
  return (
    <>
      {pokemonList && pokemonList.slice(0, 493).map((pokemon) => (
        <p>
          {pokemon.entry_number}
          {' '}
          -
          {' '}
          {pokemon.pokemon_species.name}
        </p>
      ))}
    </>
  );
}

export default PokemonList;
