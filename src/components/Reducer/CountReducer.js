import { useReducer, useState } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 0,
};
const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'addOne':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'addOne2':
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value };
        case 'reset':
            return initialState;
        default:
            return state;
    }

}


const CountReducer = () => {

    // 1. useState => state mangment 
    //2.reducer !!

    //step :  1. import reducer
    // 2. useReducer(Reducer,initialState)
    //3.return : [count , dispatch]
    //4.reducer(state,action)
    const [count, dispatch] = useReducer(reducer, initialState);

    return (

        <div>
            <h2>count : {count.firstCounter}</h2>
            <h2>count : {count.secondCounter}</h2>
            <div>
                <button onClick={() => dispatch({ type: "addOne", value: 1 })}>add one</button>
                <button onClick={() => dispatch({ type: "addOne", value: 5 })}>add Five</button>
                <button onClick={() => dispatch({ type: "decrement", value: 1 })}>decrement</button>

            </div>
            <div>
                <button onClick={() => dispatch({ type: "addOne2", value: 2 })}>add Two</button>
                <button onClick={() => dispatch({ type: "addOne2", value: 5 })}>add Five</button>
                <button onClick={() => dispatch({ type: "decrement2", value: 2 })}>decrement Two</button>
            </div>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </div>
    );
}

export default CountReducer;