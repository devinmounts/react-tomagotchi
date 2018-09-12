import React from 'react';
import EndOfGame from './EndOfGame';
import Controls from './Controls'

class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tomagotchi: {
        happiness: 100,
        hunger: 0,
        energy: 100
      },
      endOfGameVisible: false
    }
    this.handleFeedTomagotchi = this.handleFeedTomagotchi.bind(this);
    this.handlePlayWithTomagotchi = this.handlePlayWithTomagotchi.bind(this);
    this.handlePutTomagotchiToSleep = this.handlePutTomagotchiToSleep.bind(this);
  }

  componentDidMount(){
    this.tomagotchiLives = setInterval(() =>
      this.updateTomagotchiHealth(),
    1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.tomagotchiLives);
  }

  tomagotchiDead(){
    clearInterval(this.tomagotchiLives);
    this.setState({endOfGameVisible: true})
  }

  updateTomagotchiHealth(){
    let newTomagotchi = this.state.tomagotchi;
    newTomagotchi.happiness -= 10;
    newTomagotchi.hunger += 10;
    newTomagotchi.energy -= 10;
    this.isTomagothciDead();
    this.setState({tomagotchi: newTomagotchi})
  }

  isTomagothciDead(){
    if (this.state.tomagotchi.happiness <= 0 || this.state.tomagotchi.energy <= 0 || this.state.tomagotchi.hunger >= 100){
      this.tomagotchiDead();
    }
  }

  handleFeedTomagotchi(){
    let newTomagotchi = this.state.tomagotchi;
    newTomagotchi.hunger -= 5;
    newTomagotchi.happiness += 5;
    newTomagotchi.energy -= 5;
    this.setState({tomagotchi: newTomagotchi})
  }

  handlePlayWithTomagotchi(){
    let newTomagotchi = this.state.tomagotchi;
    newTomagotchi.hunger += 5;
    newTomagotchi.happiness += 5;
    newTomagotchi.energy -= 5;
    this.setState({tomagotchi: newTomagotchi})
  }

  handlePutTomagotchiToSleep(){
    let newTomagotchi = this.state.tomagotchi;
    newTomagotchi.hunger += 5;
    newTomagotchi.happiness += 5;
    newTomagotchi.energy += 5;
    this.setState({tomagotchi: newTomagotchi})
  }

  render(){
    let showEndOfGame = null;
    if(this.state.endOfGameVisible){
      showEndOfGame = <EndOfGame />
    }

    return(
      <div>
        <Controls onFeedTomagotchi={this.handleFeedTomagotchi} onPlayWithTomagotchi={this.handlePlayWithTomagotchi} onPutTomagotchiToSleep={this.handlePutTomagotchiToSleep}/>
        {showEndOfGame}
      </div>
    );
  }
}

export default Welcome;
