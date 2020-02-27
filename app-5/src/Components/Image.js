import React, {Component} from 'react';

class Image extends Component{
    render(){
        return(
            <div>
                <img src={this.props.url} />
                <h4>Mj</h4>
           </div> 
        )
    }
    
}
export default Image