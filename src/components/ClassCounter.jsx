import React, { Component } from 'react';
class ClassCounter extends Component {
    state = {
         name:""
         ,count:0 
} 

componentDidMount() { 
    
 }
    render() { 
        return (<div>
            <input onChange={(e)=>this.setState({name :e.target.value})}></input>
            <button onClick={()=> this.setState({count : this.state.count+1})}></button>
        </div>);
    }
}
 
export default ClassCounter;