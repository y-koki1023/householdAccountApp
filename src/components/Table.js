import React from 'react'
import {connect} from 'react-redux'
import Expense from './Expense'
function Table(props){
    const expenses = props.expenses.map( expense => {
        return(
            <Expense key = {expense.id} payload = {expense} clicked = {props.removeExpense}/>
        )
    })
    return(
        <div>
            Table
            {expenses}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        expenses : state.expenses
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        removeExpense : remove_id => dispatch({
            type : 'REMOVE_EXPENSE',
            payload : {
                remove_id : remove_id
            }
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Table)