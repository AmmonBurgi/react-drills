import React from 'react'

function Display(props){
    let displayTask = props.theData.map((element, index) => {
    return <h4 key={index}>{element}</h4>
    })
    console.log(displayTask)
    return(
        <div>
            {displayTask}
        </div>
    )
}
export default Display