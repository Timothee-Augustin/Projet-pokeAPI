import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PokemonDetails from './PokemonDetails';
import '../pages/Pokedex.css';

function Pokemon({ pokemon }) {
  const [onePokemon, setOnePokemon] = useState();
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.entry_number}`)
      .then((response) => setOnePokemon(response.data));
  }, []);
  return (
    <div className="pokemon-content">
      <div className="pokemon-header">
        {onePokemon && (
        <img
          className="sprite"
          src={onePokemon.sprites.front_default}
          alt={onePokemon.forms[0].name}
        />
        ) }
        <button type="button" onClick={() => setDisplay(!display)}>
          {pokemon.entry_number}
          {' '}
          -
          {' '}
          {pokemon.pokemon_species.name}
        </button>
      </div>
      {display === true && <PokemonDetails onePokemon={onePokemon} />}
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.element.isRequired,
};

export default Pokemon;
