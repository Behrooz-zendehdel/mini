import React from 'react';
import Product from './component/Product/Product';
//component:
const App = () => {
    return (
        //jsx
        <div className='container' id='title'>
            <h1>shopping</h1>
            <Product />
            <Product />
            <Product />
        </div>
    )
};

export default App;
// modular programing
