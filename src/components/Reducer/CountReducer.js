import { useReducer, useState } from "react";

const initialState = 0;

const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'add':
            return state + action.value;
        case 'decrement':
            return state - action.value;

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
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return (

        <div>
            <div>
                <h2>count : {count}</h2>
                <button onClick={() => dispatch({ type: "add", value: 1 })}>add one</button>
                <button onClick={() => dispatch({ type: "decrement", value: 1 })}>decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>

            </div>
            <div>
                <h2>count : {countTwo}</h2>
                <button onClick={() => dispatchTwo({ type: "add", value: 2 })}>add Two</button>
                <button onClick={() => dispatchTwo({ type: "decrement", value: 2 })}>decrement Two</button>
                <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>

            </div>
        </div>
    );
}

export default CountReducer;