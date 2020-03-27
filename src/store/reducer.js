const initialState = {
    age:20,
    history: []
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP': 
            //newState.age += action.value;
            console.log(state.history)
            return {
                ...state,
                age: state.age + action.value,
                history: state.history.concat({id:Math.random(), age: state.age + action.value})
            }
            break;
        
        case 'AGE_DOWN': 
            //newState.age -= action.value;
            return {
                ...state,
                age: state.age - action.value,
                history: state.history.concat({id:Math.random(), age: state.age - action.value})
            };
            break;

        case 'DEL_ITEM':
            console.log("fue llamado el array" + action.id)
            return {
                ...state,
                history: newState.history.filter( (el) => el.id !== action.id)
            }
            break;
    }
    return newState;
};

export default reducer;