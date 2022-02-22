import { useState } from "react";


const WithCount = (WrappedComponent,incrementValue) => {
    const UpComponent = (props) => {

        const [count, setCount] = useState(0)

        const incrementCount = () => {
            setCount(count + 1)
        }
        return <WrappedComponent count={count} increment={incrementCount}
        {...props}
        />
    };
    return UpComponent;
}

export default WithCount;