import React, { useState } from 'react';

export const CounterContext = React.createContext();
export const CounterContextDispatcher = React.createContext();


const CounterProvider = ({ Children }) => {
    const [count, setCount] = useState(2);

    return (
        <CounterContext.Provider value={count}>
            <CounterContextDispatcher.Provider value={setCount}>

                {Children}
            </CounterContextDispatcher.Provider>

        </CounterContext.Provider>
    );
}

export default CounterProvider;