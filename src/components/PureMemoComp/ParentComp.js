import React, { Component, PureComponent } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';
class ParentComp extends PureComponent {
    state = {
        name: "behrooz"
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ name: "behrooz" })
        }, [])
    }
    render() {
        console.log('parent comp--------------')
        return (
            <div>
                parentComponent
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        );
    }
}

export default ParentComp;