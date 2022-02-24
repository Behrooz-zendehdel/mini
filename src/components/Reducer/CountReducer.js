import { useState } from "react";

const CountReducer = () => {
    const [count, setCount] = useState(0);

    // 1. useState => state mangment 
    //2.reducer !!

    //step :  1. import reducer
    // 2. useReducer(Reducer,initialState)
    //3.return : [count , dispatch]

    const addOne = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const addFive = () => {
        setCount((prevCount) => prevCount + 5)
    }
    const decrement = () => {
        setCount((prevCount) => prevCount - 1)
    }
    return (

        <div>
            <h2>count : {count}</h2>
            <button onClick={addOne}>add one</button>
            <button onClick={addFive}>add Five</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
}

export default CountReducer;