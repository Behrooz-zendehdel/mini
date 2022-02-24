import { useContext } from 'react';
import {CounterContext}from './CounterProvider'

const CounterOne = () => {
   const count= useContext(CounterContext);
    return ( 
        <div>
            <h2>count is : {count}</h2>
        </div>
     );
}
 
export default CounterOne;