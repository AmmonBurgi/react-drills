import React, {Component} from 'react'
import Input from './Components/Input'
import Display from './Components/Display'
class App extends Component{
  constructor(){
    super()
    this.state={
      data: [],
      newTask: ''
    }
  }
  handleInput=(val)=>{
    this.setState({newTask: val})
  }
  handleClick=()=>{
    let newData = this.state.data
    newData.push(this.state.newTask)
    this.setState({
      data: newData,
      newTask: ''
    })}

  render(){
    return(
      <div>
        <h4>My to-do list:</h4>
        <Input 
        theChange={this.handleInput} 
        theClick={this.handleClick}
        theValue={this.state.newTask}/>
        <Display theData={this.state.data}/>
      </div>
    )
  }
}
export default App