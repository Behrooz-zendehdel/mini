import { useCount, useCountActions } from './CounterProvider'


const CounterOne = () => {
    const count = useCount();
    const { addOne, addFive,decrement } = useCountActions();


    // const addOne = () => {
    //     setCount((prevCount) => prevCount + 1)
    // }
    // const addFive = () => {
    //     setCount((prevCount) => prevCount + 5)
    // }
    return (
        <div>
            <h2>count is : {count}</h2>
            <button onClick={addOne}>add one</button>
            <button onClick={addFive}>add Five</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
}

export default CounterOne;