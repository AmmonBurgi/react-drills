import React, {Component} from 'react';

class Todo extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h4>My to-do list: </h4>
                <input value={this.props.theValue} onChange={(e) => this.props.input(e.target.value)}></input>
                <button onClick={this.props.click}>Enter</button>
            </div>
        )
    }
}
export default Todo