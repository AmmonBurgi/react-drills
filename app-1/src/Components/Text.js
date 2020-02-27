import React, {Component} from 'react';

class Text extends Component {
    constructor(){
        super();
        this.state = {
            theText:''
        }
    }
    handleChange(val){
        this.setState({theText: val})
    }
    
    render(){
        console.log(this.state.theText)
        return(
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)}></input>
                <h1>{this.state.theText}</h1>
            </div>
        )
    }
}
export default Text