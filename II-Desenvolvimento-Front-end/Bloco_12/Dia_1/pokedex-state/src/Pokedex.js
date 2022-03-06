import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        <Pokemon pokemon={ this.props.pokemons[0] } />
        <div>
          <button>Próximo</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
