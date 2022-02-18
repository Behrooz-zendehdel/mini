import { useState } from "react";

const HookCounter = () => {
    const [count, setCount] = useState(0);

    const addOneHandler = () => {
        setCount((prev) => prev + 1);
    }
    const addTowHandler = () => {
        setCount((prev) => prev + 2);
    }
    const addFiveHandler = () => {
        // setCount(count+5);
        for (let i = 0; i < 5; i++) {
            setCount((prev) => prev + 1)
            // update state based on prev state => callback function!!!
        }
    }
    return (
        <div>
            <h2>count - {count}</h2>
            <button onClick={addOneHandler}>add one</button>
            <button onClick={addTowHandler}>add Tow</button>
            <button onClick={addFiveHandler}>add Five</button>
        </div>
    );
}

export default HookCounter;