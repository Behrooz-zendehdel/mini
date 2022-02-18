import { useState } from "react";

const HookCounter = () => {
    const [count,setCount]=useState(0);

    const addOneHandler =()=>{
        setCount(count+1);
    }
    return ( 
        <div>
            <h2>count - {count}</h2>
            <button onClick={addOneHandler}>add one</button>
        </div>
     );
}
 
export default HookCounter;