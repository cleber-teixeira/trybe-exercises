import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    <div>
      {this.props.data.map((pokemon, index) => {
        return <Pokemon pokes={pokemon} key={index}/>
      })}
    </div>
  }
}

export default Pokedex;