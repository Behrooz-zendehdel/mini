import WithCount from "../hoc/withCount";

const HoverCounter = ({count,incrementCount}) => {

    return (
        <div>
            <h2 onMouseOver={incrementCount}>hovered {count} times</h2>
        </div>
    );
}

export default WithCount(HoverCounter,5);