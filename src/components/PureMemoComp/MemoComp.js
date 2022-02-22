import React from "react";


const MemoComp = (props) => {
    console.log('memo comp')
    return (
        <div>
            memo - {props.name}
        </div>
    );
}

export default React.memo(MemoComp);