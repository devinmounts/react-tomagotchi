import React from 'react';
import PropTypes from 'prop-types'

function Controls(props){

  function handlePlayWithTomagotchi(){
    props.onPlayWithTomagotchi();
  }

  function handleFeedTomagotchi(){
    props.onFeedTomagotchi();
  }

  function handlePutTomagotchiToSleep(){
    props.onPutTomagotchiToSleep();
  }

  return(
    <div>
      <button onClick={handlePlayWithTomagotchi}>Play</button>
      <button onClick={handleFeedTomagotchi}>Feed</button>
      <button onClick={handlePutTomagotchiToSleep}>Sleep</button>
    </div>
  )
}

Controls.propTypes = {
  onPlayWithTomagotchi: PropTypes.func,
  onFeedTomagotchi: PropTypes.func,
  onPutTomagotchiToSleep: PropTypes.func
}

export default Controls;
