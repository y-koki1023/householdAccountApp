import React from 'react'
import Button from '@material-ui/core/Button';
function Options(props){
    return(
        <div>
            <Button onClick = {() => props.clicked(1)}>Food</Button>
            <Button onClick = {() => props.clicked(2)}>Hobby</Button>
            <Button onClick = {() => props.clicked(3)}>Residence</Button>
            <Button onClick = {() => props.clicked(4)}>Etc</Button>
        </div>
    )
}
export default Options