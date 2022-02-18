import React, { Component } from 'react';
import Product from './component/Product/Product';
//component:



// class component App 
class App extends Component {

    state ={
        products:[
            {title:"react.js" , price:"99$"},
            {title:"node.js" , price:"89$"},
            {title:"javascript" , price:"79$"}
        ],
    };
    render() {
        return (
            <div className='container' id='title'>
                <h1>shopping</h1>
                <Product name='react.js' price='99$' />
                <Product name='node.js' price='89$' />
                <Product name='javascript' price='79$'>
                    <p>discount 15%</p>
                </Product>
            </div>
        )
    }
}
export default App




// const App = () => {
//     return (
//         //jsx
//         <div className='container' id='title'>
//             <h1>shopping</h1>
//             <Product name='react.js' price='99$' />
//             <Product name='node.js' price='89$' />
//             <Product name='javascript' price='79$'>
//                <p>discount 15%</p>
//             </Product>
//         </div>
//     )
// };

// export default App;
// // modular programing