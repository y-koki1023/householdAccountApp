const initialState = {
    inputType : 1,
    inputText : "HelloWorld",
    expenses : [{
        id : 0,
        text : 'test',
        type :1
    }],
}

const reducer = (state = initialState, action) => {
    if(action.type === 'SET_INPUT_TYPE'){
        const newState = Object.assign([],state);
        newState.inputType = action.payload.inputType;
        return newState;
    }
    if(action.type === 'SET_INPUT_TEXT'){
        const newState = Object.assign([],state);
        newState.inputText = action.payload.inputText;
        return newState;
    }
    if(action.type === 'INSERT_EXPENSES'){
        if(state.inputText === '' || state.inputType === 0){
            console.log("empty")
            return state;
        }
        const newState = Object.assign([],state);
        newState.expenses = [...newState.expenses,{
            id: newState.expenses.length !== 0 ? (newState.expenses[newState.expenses.length - 1]).id + 1 : 0,
            text: newState.inputText,
            type: newState.inputType
        }]
        newState.inputType = 0;
        newState.inputText = '';
        console.log(newState);
        return newState
    }
    if(action.type === 'REMOVE_EXPENSE'){
        const newState = Object.assign([],state);
        console.log(action.payload.remove_id)
        newState.expenses = state.expenses.filter(n => n.id !== action.payload.remove_id);
        console.log(newState);
        return newState
    }

    return state;
}

export default reducer