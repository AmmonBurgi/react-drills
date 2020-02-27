import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo'
class App extends Component{
  constructor(){
    super()
    this.state = {
      toDo: [],
      theInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  
  
  }

  

  handleChange(val){
    this.setState({theInput: val})
  }
  handleClick(){
    this.setState({
      toDo: [...this.state.toDo, this.state.theInput],
      theInput: ""
    })
  }


  render(){
    
    console.log(Todo)
  return (
    <div className="App">
      <Todo 
        input={this.handleChange}
        click={this.handleClick} 
        theValue={this.state.theInput}/>
       <div>
  {this.state.toDo.map((e, i) => <p>{i+1}{'. '}{e} </p>)}
       </div>
    </div>
  );
  }
}

export default App;
