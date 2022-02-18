import React, { useState } from 'react';
import Product from './components/Product/Product';
import HookCounter from './components/HookCounter';
import ClassCounter from './components/ClassCounter';


const App = () => {
    return(
        <div>
        {/* <HookCounter /> */}
        <ClassCounter />
    </div>
    )
    
};

export default App;




//   const [products,setProducts]=  useState([
//                     { title: "react.js", price: "99$" },
//                     { title: "node.js", price: "89$" },
//                     { title: "javascript", price: "79$" }
//                 ]);

//                 const clickHandler =()=>{
//                     setProducts([
//                         { title: "react.js", price: "79$" },
//                         { title: "node.js", price: "69$" },
//                         { title: "javascript", price: "59$" }
//                     ])
//                 }

//     return (
//         <div className="container" id="title">
//             <h1>shopping</h1>
//             {products.map((product) => {
//                 return <Product name={product.title} price={product.price} />
//             })}
//             <button onClick={clickHandler}>change price</button>
//         </div > );
      

























// class App extends Component {

//     state = {
//         products: [
//             { title: "react.js", price: "99$" },
//             { title: "node.js", price: "89$" },
//             { title: "javascript", price: "79$" }
//         ],
//     };

//     clickHandler =()=> {
//         this.setState({
//                 products:[
//                     { title: "react.js", price: "79$" },
//                     { title: "node.js", price: "69$" },
//                     { title: "javascript", price: "59$" },
//                 ],
//         })
//     }

//     render() {
//         return (
//             <div className="container" id="title">
//                 <h1>shopping</h1>
//                 {this.state.products.map((product) => {
//                     return <Product name={product.title} price={product.price} />
//                 })}
//                 <button onClick={this.clickHandler}>change price</button>
//             </div >
//         );
//     }
// }
// export default App


