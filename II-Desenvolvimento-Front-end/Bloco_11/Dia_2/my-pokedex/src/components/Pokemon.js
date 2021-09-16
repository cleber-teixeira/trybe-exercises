import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, value, measurementUnit, image } = this.props.pokes
    return
      <section>
        <div>
          <h2>{ name }</h2>
          <p>{ type }</p>
          <p>Average weight: { value } { measurementUnit }</p>
        </div>
        <div>
          <img src={ image }></img>
        </div>
      </section>
  }
}

Pokemon.PropTypes = {
  pokes: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.bool,
    measurementUnit: PropTypes.string,
    image: PropTypes.string
  })
}

Pokemon.defaultProps = {
  pokes: {}
};

export default Pokemon;