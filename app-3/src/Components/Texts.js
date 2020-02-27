import React, {Component} from 'react'

class Texts extends Component{
    constructor(){
        super()
        this.state = {
            theInput: '',
            unFiltered: ['Ammon', 'Noah', 'Andrew', 'Tristen', 'Alissa', 'Noah']
        }
    }
        handleChange(val){
            this.setState({theInput: val})
        }
 
    render(){
        let people = this.state.unFiltered.filter((element)=>{
            return element.includes(this.state.theInput)
        }).map((element)=>{
            return <h4>{element}</h4>
        })
        
        return(
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)}></input>
                {people}
            </div>
        )
    }
}
export default Texts