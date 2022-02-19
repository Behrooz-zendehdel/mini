import React, { Component } from 'react';
import Product from '../Product/Product';


class ProductList extends Component {
    state = {
        products: [
            { title: "react.js", price: "99$", id: 1, quantity: 1 },
            { title: "node.js", price: "89$", id: 2, quantity: 2 },
            { title: "javascript", price: "79$", id: 3, quantity: 3 },
        ],
    }

    // state => handler ! ghanone 3 angoshti ta betonim b state access dashte bashim
    // changeHandler =(e)=>{
    //     this.state.products.indexOf((e)=>this.setState(e.target.value))
    // }



    removeHandler = (id) => {
        console.log('clicked', id)
        const filteredProduct = this.state.products.filter((p) => p.id !== id);
        this.setState({ products: filteredProduct })
    }
    incrementHandler = (id) => {
        console.log('increment', id)
        const products = [...this.state.products]
        const selectedItem = this.state.products.find((p) => p.id === id);
        selectedItem.quantity++; // muted state !
        this.setState({ products })
    }
    decrementHandler = (id) => {
        const products = [...this.state.products]
        const decrementItem = this.state.products.find((p) => p.id === id);
        if (decrementItem.quantity === 1) {
            const filteredProduct = products.filter((p) => p.id !== id);
            this.setState({ products: filteredProduct })
        } else {
            decrementItem.quantity--; // muted state !
            this.setState({ products })
        }
    }

    renderProduct = ()=> {
        if (this.state.products.length === 0)
            return <div>there is no product in cart</div>

        return  this.state.products.map((product, index) => {
                return <Product
                    
                    product={product}
                    key={index}
                    onDelete={() => this.removeHandler(product.id)}
                    quantity={this.state.quantity}
                    onIncrement={() => this.incrementHandler(product.id)}
                    onDecrement={() => this.decrementHandler(product.id)}
                    onChange={()=>this.changeHandler(product.id)}
                />
           
            });
        }  ;
        





    render() {

        return (
            <div>
                {!this.state.products.length && (<div>there is no product in cart</div>) }
                    {this.renderProduct()}
            </div>
        );
    }
}

export default ProductList;