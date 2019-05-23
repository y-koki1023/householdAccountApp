import React,{useState} from 'react'
import {connect} from 'react-redux'
import Options from './Options'
import TextLine from './TextLine'
function Form(props){
    return(
        <div>
            <Options clicked = {props.setInputType}/>
            {props.type !== 0 ? <TextLine text = {props.text} changed = {props.setInputText} clicked = {props.insertExpenses}/> :null}
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        text : state.inputText,
        type : state.inputType
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        setInputType : inputType => dispatch({type : 'SET_INPUT_TYPE', payload :{
            inputType : inputType
        }}),
        setInputText : inputText => dispatch({type : 'SET_INPUT_TEXT',payload :{
            inputText : inputText
        }}),
        insertExpenses : () => dispatch({type : 'INSERT_EXPENSES'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form)