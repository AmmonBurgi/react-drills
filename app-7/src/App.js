import React, { Component } from 'react';
import './App.css';
import NewTask from './Components/NewTask';
import List from './Components/List';
// import ToDo from './Components/ToDo'
class App extends Component{
  constructor(){
    super()
    this.state = {
      newList: [],
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
    newList: [...this.state.newList, this.state.theInput],
  theInput: ''
  })
}
render(){
  // console.log(<List />)
  return (
    <div className="App">
     <NewTask 
      change={this.handleChange}
      click={this.handleClick}
      theValue={this.handleChange}
      />
    <List proList={this.state.newList} />
     {/* <div>
       {this.state.newList.map((element) => {return <p>{element}</p>})}
     </div> */}
    </div>
  );
}
  }
export default App;
