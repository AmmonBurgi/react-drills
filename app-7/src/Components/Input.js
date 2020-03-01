import React from 'react';

function Input(props){
    return(
        <div>
            <input onChange={(e) => props.theChange(e.target.value)}
            value={props.theValue}/>
            <button onClick={props.theClick}>Add Task</button>
        </div>
    )
}
export default Input 