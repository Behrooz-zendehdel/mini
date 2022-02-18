import React, { Component } from 'react';
import Product from '../Product/Product';


class ProductList extends Component {
    state = {
        products: [
            { title: "react.js", price: "99$", id: 1 },
            { title: "node.js", price: "89$", id: 2 },
            { title: "javascript", price: "79$", id: 3 },
        ],
    }

    // state => handler ! ghanone 3 angoshti ta betonim b state access dashte bashim

    removeHandler = (id) => {
        console.log('clicked', id)
        const filterdProduct = this.state.products.filter((p) => p.id !== id);
        this.setState({ products: filterdProduct })
    }
    render() {
        return (
            <div>
                {this.state.products.map((product, index) => {
                    return <Product
                        name={product.title}
                        price={product.price}
                        key={index}
                        click={this.clickHandler}
                        onDelete={() => this.removeHandler(product.id)}
                    />
                })}
            </div>
        );
    }
}

export default ProductList;