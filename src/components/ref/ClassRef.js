import React, { Component, createRef } from 'react';
class ClassRef extends Component {
    state = {}
    //create ref !
    constructor(props) {
        super(props)
        this.inputRef = createRef();

    }
    //use create ref 
    componentDidMount() {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>

                <input type="text" ref={this.inputRef} />
            </div>
        );
    }
}

export default ClassRef;