import React from 'react';
import PropTypes from 'prop-types';

function Health(props) {
  return(
    <div>
      <h5>Happiness: {props.tomagotchi.happiness}</h5>
      <h5>Hunger: {props.tomagotchi.hunger}</h5>
      <h5>Energy: {props.tomagotchi.energy}</h5>
    </div>
  );
}

Health.propTypes ={
  tomagotchi: PropTypes.object
}
export default Health;
