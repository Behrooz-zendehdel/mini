import React, { Component } from 'react';
import Product from '../Product/Product';


class ProductList extends Component {
  
  




    renderProduct = ()=> {
        if (this.props.products.length === 0)
            return <div>there is no product in cart</div>

        return  this.props.products.map((product, index) => {

                return ( <Product
                product={product}
                key={index}
                onDelete={() => this.props.onRemove(product.id)}
                onIncrement={() => this.props.onIncrement(product.id)}
                onDecrement={() => this.props.onDecrement(product.id)}
                // quantity={this.props.quantity}
                />
                )
            });
        }  ;
        





    render() {

        return (
            <div>
                {!this.props.products.length && (<div>there is no product in cart</div>) }
                    {this.renderProduct()}
            </div>
        );
    }
}

export default ProductList;