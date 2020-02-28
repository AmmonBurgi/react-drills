import React, {Component} from 'react';

class NewTask extends Component{
render(){
    return(
        <div>
            <h4>My to-do list:</h4>
            <input 
            value={this.props.theValue} 
            placeholder='Enter new task'
            onChange={(e) => this.props.change(e.target.value)}></input>
            
            <button 
            onClick={this.props.click} 
            >Enter</button>
        </div>
    )
}
}
export default NewTask