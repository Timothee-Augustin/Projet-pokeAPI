import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../pages/Pokedex.css';

function PokemonDetails({ pokemonId }) {
  const [pokemon, setPokemon] = useState();
  const [pokemonSpecies, setPokemonSpecies] = useState();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => setPokemon(response.data));
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
      .then((response) => setPokemonSpecies(response.data));
  }, []);
  return (
    <>
      {pokemon && (
      <img
        className="sprite"
        src={pokemon.sprites.front_default}
        alt={pokemon.forms[0].name}
      />
      ) }
      {pokemonSpecies && <p>{pokemonSpecies.flavor_text_entries[1].flavor_text}</p>}
    </>
  );
}

PokemonDetails.propTypes = {
  pokemonId: PropTypes.number.isRequired,
};

export default PokemonDetails;
