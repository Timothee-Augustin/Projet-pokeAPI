import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PokemonDetails from './PokemonDetails';
import '../pages/Pokedex.css';

function Pokemon({ pokemon }) {
  const [display, setDisplay] = useState(false);
  return (
    <div className="pokemon-content">
      <button type="button" onClick={() => setDisplay(!display)}>
        {pokemon.entry_number}
        {' '}
        -
        {' '}
        {pokemon.pokemon_species.name}
      </button>
      {display === true && <PokemonDetails pokemonId={pokemon.entry_number} />}
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.element.isRequired,
};

export default Pokemon;
