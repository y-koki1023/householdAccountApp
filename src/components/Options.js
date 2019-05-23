import React from 'react'
function Options(props){
    return(
        <div>
            <button onClick = {() => props.clicked(1)}>Food</button>
            <button onClick = {() => props.clicked(2)}>Hobby</button>
            <button onClick = {() => props.clicked(3)}>Residence</button>
            <button onClick = {() => props.clicked(4)}>Etc</button>
        </div>
    )
}
export default Options