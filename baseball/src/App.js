import React, { Component } from 'react';

import './App.css';

class App extends Component() {
  state = {
    balls: 0,
    strikes: 0,
    foul: 0,
    hit: 0
  }
  
  balls = () => {
    let balls = this.state.balls;

    if (hit) { 
      this.setState({ balls: 0 });
    } else {
    if (balls < 4) {
      this.setState({ balls: this.state.balls += 1 })
    } else {
      this.setState({ balls: 0 })
    }
  }

  strikes = () => {
    let strikes = this.state.strikes;

    if (hit) {
      this.setState({ strikes: 0 });
    } else {
      if (strikes < 3) {
        this.setState({ strikes: this.state.strikes += 1 })
      } else {
        this.setState({ strikes: 0 });
      }
    }
  }

  foul = () => {
    let foul = this.state.foul;

    if (foul < 2) {
      this.setState({ strikes: this.state.strikes += 1 })
    } else if (foul = 2) {
      this.setState({ strikes: this.state.strikes })
    }
  }



}

export default App;
