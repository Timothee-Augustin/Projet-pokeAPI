import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../pages/Pokedex.css';

function PokemonDetails({ onePokemon }) {
  const [pokemonSpecies, setPokemonSpecies] = useState();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${onePokemon.id}`)
      .then((response) => setPokemonSpecies(response.data));
  }, []);
  return (
    <div className="pokemon-details">
      {onePokemon && (
      <img
        className="artwork"
        src={onePokemon.sprites.other.dream_world.front_default}
        alt={onePokemon.forms[0].name}
      />
      ) }
      <div className="type">
        {onePokemon.types[0] && <h3 className={`${onePokemon.types[0].type.name}`}>{`${onePokemon.types[0].type.name}`}</h3>}
        {onePokemon.types[1] && (
        <>
          <h3>&nbsp;/&nbsp;</h3>
          <h3 className={`${onePokemon.types[1].type.name}`}>{`${onePokemon.types[1].type.name}`}</h3>
        </>
        )}
      </div>
      {pokemonSpecies && <p>{pokemonSpecies.flavor_text_entries[1].flavor_text}</p>}
    </div>
  );
}

PokemonDetails.propTypes = {
  onePokemon: PropTypes.element.isRequired,
};

export default PokemonDetails;
