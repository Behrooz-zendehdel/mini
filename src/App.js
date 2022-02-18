import React, { useState } from 'react';
import Product from './components/Product/Product';
import HookCounter from './components/HookCounter';
import ClassCounter from './components/ClassCounter';
import HookObject from './components/HookObject';
import HookArray from './components/HookArray';
import  { Component } from 'react';
import './App.css'



class App extends Component {
    state = { 
      products:[
            { title: "react.js", price: "99$",id:1 },
            { title: "node.js", price: "89$",id:2 },
            { title: "javascript", price: "79$" ,id:3},
            ],
        count:0,
     } ;

     countHandler =()=>{
         this.setState({count : this.state.count + 1})
     }

     clickHandler =()=>{
     this.setState({
     products:  [{ title: "react.js", price: "79$",id:1 },
     { title: "node.js", price: "69$",id:2 },
     { title: "javascript", price: "59$" ,id:3},
],
}) ; 
            
     
};

    render(){ 
        return(
                  <div   className="container" id="title">
                      {/* <ClassCounter /> */}
                      {/* <HookObject /> */}
                       {/* <HookArray /> */}
                      {/* <HookCounter /> */}
                        <h1>shopping</h1>
                        {this.state.products.map((product,index) => {
                            return <Product name={product.title} price={product.price} key={product.id} />
                        })}
                        <button onClick={this.countHandler}>
                            counter{this.state.count} 
                            
                        </button>
              </div>
              )}
    }

export default App;








// const App = () => {
//     const [this.stateproducts,setProducts]=  useState([
//                         { title: "react.js", price: "99$" },
//                         { title: "node.js", price: "89$" },
//                         { title: "javascript", price: "79$" }
//                     ])
//                     const clickHandler =()=>{
//                         setProducts([
//                             { title: "react.js", price: "79$" },
//                             { title: "node.js", price: "69$" },
//                             { title: "javascript", price: "59$" }
//                         ])
//                     }

//     return(
        
     


//         <div   className="container" id="title">
//                 {/* <ClassCounter /> */}
//                 {/* <HookObject /> */}
//                  {/* <HookArray /> */}
//                 {/* <HookCounter /> */}
//                   <h1>shopping</h1>
//                   {this.stateproducts.map((product) => {
//                       return <Product name={product.title} price={product.price}  />
//                   })}
//                   <button onClick={clickHandler}>change price</button>
//         </div>
//         )}
        

// export default App;




//   const [this.stateproducts,setProducts]=  useState([
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
//             {this.stateproducts.map((product) => {
//                 return <Product name={product.title} price={product.price} />
//             })}
//             <button onClick={clickHandler}>change price</button>
//         </div > );
// export default App;

      

























// class App extends Component {

//     state = {
//         this.stateproducts: [
//             { title: "react.js", price: "99$" },
//             { title: "node.js", price: "89$" },
//             { title: "javascript", price: "79$" }
//         ],
//     };

//     clickHandler =()=> {
//         this.setState({
//                 this.stateproducts:[
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
//                 {this.state.this.stateproducts.map((product) => {
//                     return <Product name={product.title} price={product.price} />
//                 })}
//                 <button onClick={this.clickHandler}>change price</button>
//             </div >
//         );
//     }
// }
// export default App


