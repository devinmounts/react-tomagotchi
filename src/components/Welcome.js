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
      }
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
  }

  updateTomagotchiHealth(){
    let newTomagotchi = this.state.tomagotchi;
    newTomagotchi.happiness -= 1;
    newTomagotchi.hunger += 1;
    newTomagotchi.energy -= 1;
    this.isTomagothciDead();
    this.setState({tomagotchi: newTomagotchi})
  }

  isTomagothciDead(){
    let showEndOfGame = null;
    if (this.state.tomagotchi.happiness <= 0 || this.state.tomagotchi.energy <= 0 || this.state.tomagotchi.hunger >= 100){
      this.tomagotchiDead();
      showEndOfGame = <EndOfGame />
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
    return(
      <div>
        <Controls onFeedTomagotchi={this.handleFeedTomagotchi} onPlayWithTomagotchi={this.handlePlayWithTomagotchi} onPutTomagotchiToSleep={this.handlePutTomagotchiToSleep}/>
      </div>
    );
  }
}

export default Welcome;
