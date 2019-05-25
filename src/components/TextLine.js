import React from 'react'

function TextLine(props){
    return(
        <div>
            入力(¥)
            <input type = 'text' value = {props.text} onChange = {event => props.changed(event.target.value)}/>
            <button onClick = {() => props.clicked()}>EXPENSES</button>
        </div>
    )
}

export default TextLine