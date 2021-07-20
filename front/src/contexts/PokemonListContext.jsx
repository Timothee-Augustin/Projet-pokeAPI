import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const PokemonListContext = createContext();

function PokemonListProvider({ children }) {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokedex/1/')
      .then(
        (response) => (setPokemonList(response.data.pokemon_entries)),
      );
  }, []);
  return (
    <PokemonListContext.Provider value={{ pokemonList }}>
      {children}
    </PokemonListContext.Provider>
  );
}

PokemonListProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const usePokemonList = () => useContext(PokemonListContext);

export { PokemonListProvider, usePokemonList };
