import React from 'react';
import Product from './component/Product/Product';
//component:
const App = () => {
    return (
        //jsx
        <div className='container' id='title'>
            <h1>shopping</h1>
            <Product name='react.js' price='99$' /> 
            <Product name='node.js' price='89$' />
            <Product name='java script' price='79$' />
        </div>
    )
};

export default App;
// modular programing
