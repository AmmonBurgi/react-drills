import React, {Component} from 'react';

class Login extends Component{
constructor() {
    super()

    this.state = {
        user: '',
        pass: ''
    }
    this.handleClick = this.handleClick.bind(this);
}
changeOne(val){
    this.setState({user: val})
}
changeTwo(val){
    this.setState({pass: val})
}
handleClick(){
    alert(`Username: ${this.state.user} Password: ${this.state.pass}`);
}

render(){
    // console.log(this.state.user)
    return(
        <div>
            <input onChange={(e) => this.changeOne(e.target.value)} type='text'></input>
            <input onChange={(e) => this.changeTwo(e.target.value)} type='text'></input>
            <button onClick={this.handleClick}>Alert</button>
        </div>
    )
}
}
export default Login