import React, { useState } from 'react';
export const CounterContext = React.createContext(); //state
export const CounterCountDispatcher = React.createContext();//setState




const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(4);
    return (
        <CounterContext.Provider value={count}>
            <CounterCountDispatcher.Provider value={setCount}>
                {children}
            </CounterCountDispatcher.Provider>
        </CounterContext.Provider>
    );

} 
export default CounterProvider