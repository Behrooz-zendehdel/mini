import { useCount, useCountActions } from './CounterProvider'


const CounterOne = () => {
    const count = useCount();
    const dispatch = useCountActions();


    // const addOne = () => {
    //     setCount((prevCount) => prevCount + 1)
    // }
    // const addFive = () => {
    //     setCount((prevCount) => prevCount + 5)
    // }
    return (
        <div>
            <h2>count is : {count}</h2>
            <button onClick={()=>dispatch({type:"add",value:1})}>add one</button>
            <button onClick={()=>dispatch({type:"reset"})}>reset</button>
            <button onClick={()=>dispatch({type:"decrement",value:1})}>decrement</button>
        </div>
    );
}

export default CounterOne;