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
        const selectedItem = this.state.products.find((p) => p.id === id);
        selectedItem.quantity--; // muted state !
        this.setState({ products })
    }
    render() {
        return (
            <div>
                {this.state.products.map((product, index) => {
                    return <Product
                        // name={product.title}
                        // price={product.price}
                        // click={this.clickHandler}
                        product={product}
                        key={index}
                        onDelete={() => this.removeHandler(product.id)}
                        quantity={this.state.quantity}
                        onIncrement={() => this.incrementHandler(product.id)}
                        onDecrement={() => this.decrementHandler(product.id)}
                    />
                })}
            </div>
        );
    }
}

export default ProductList;