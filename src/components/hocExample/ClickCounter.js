import WithCount from "../hoc/withCount";

const ClickCounter = ({count,incrementCount}) => {
  
    return (
        <div>
            <h2 onClick={incrementCount}>clicked {count} times</h2>
        </div>
    );
}

export default WithCount(ClickCounter,10);