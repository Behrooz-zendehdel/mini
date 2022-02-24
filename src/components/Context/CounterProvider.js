import React, { Children, useState } from 'react';

 export const CounterContext = React.createContext();
const CounterProvider = ({Children}) => {
const[count ,setCount]=useState(0);

    return (
    <CounterContext.Provider value={count}>{Children} </CounterContext.Provider>
     );
}
 
export default CounterProvider;