import { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
    const [inputValue, setInputValue] = useState("");
    const [count, setCount] = useState(0);
    const inputRef = useRef();
    const previousValue = useRef();
    const previuosCount = useRef();


    useEffect(() => {
        previuosCount.current = count;
    }, [count])

    useEffect(() => {

        previousValue.current = inputValue; // does not rerender component!!
    }, [inputValue])


    const changeHandler = (e) => {
        setInputValue(e.target.value);
    }



    const resetHandler = () => {
        setInputValue("")
        inputRef.current.focus();
    }


    return (
        <div>
            <input type="text" value={inputValue} onChange={changeHandler} />
            <button onClick={resetHandler}>reset</button>
            <p>my name is input value and it use to be {previousValue.current}</p>
            <button onClick={() => setCount(Math.ceil(Math.random() * 10))}>
                Generate random
            </button>
            <div>
                count is :{count}
                <div>previuoscount :{previuosCount.current}</div>
            </div>
        </div>
    );
}

export default UseRefExample;