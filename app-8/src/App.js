import React, { Component } from 'react';

import './App.css';
import axios from 'axios'

class App extends Component{
  constructor(){
    super()
    this.state = {
      skyWalker: ''
    }
  }
  componentDidMount(){
    axios.get('https://swapi.co/api/people/1')
    .then(response => {
      this.setState({
        skyWalker: response.data
      })
    })
  }
  render(){
  return (
    <div className="App">
    <h2>Name: {this.state.skyWalker.name}</h2>
    <h2>Height: {this.state.skyWalker.height}</h2>
    <h2>Gender: {this.state.skyWalker.gender}</h2>
    </div>
  );
  }
}

export default App;
