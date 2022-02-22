import { useState } from "react";

const UseRefExample = () => {
    const [inputValue, setInputValue] = useState("");

    const changeHandler = (e) => {
        setInputValue(e.target.value);
    }
    const clickHandler = () => {
        setInputValue("")
    }
    return (
        <div>
            <input type="text" onChange={changeHandler} />
            <button onClick={clickHandler}>reset</button>
        </div>
    );
}

export default UseRefExample;