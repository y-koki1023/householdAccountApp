import React from 'react'

function Expense(props){
    return(
        <div>
            {props.payload.text}
            {props.payload.type}
            <button onClick = {() => props.clicked(props.payload.id)}> remove </button>
        </div>
    )
}

export default Expense