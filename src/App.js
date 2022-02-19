
import  { Component } from 'react';
import './App.css'
import ProductList from './components/ProductList/ProductList';
import Navbar from './components/Navbar/Navbar';


class App extends Component {
    state = {
        products: [
            { title: "react.js", price: "99$", id: 1, quantity: 1 },
            { title: "node.js", price: "89$", id: 2, quantity: 2 },
            { title: "javascript", price: "79$", id: 3, quantity: 3 },
        ],
    }
     countHandler =()=>{
         this.setState({count : this.state.count + 1})
     }

       
     


    render(){
        return(
                  <div className="container" id="title">
                     <Navbar />
                    <ProductList />
                       
              </div>
              )}
        
            };

export default App;






