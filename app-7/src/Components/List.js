import React, {Component} from 'react';

class List extends Component{
    render(){
        return(
         <div>
       {this.props.proList.map((element) => {return <p>{element}</p>})}
         </div>
        )
    }
}
export default List