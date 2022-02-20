import React, { Component } from 'react';
import Product from '../Product/Product';


class ProductList extends Component {
  
  




    renderProduct = ()=> {
        const {onRemove,onIncrement,onDecrement,products}=this.props; //destrucering
        if (this.props.products.length === 0)
            return <div>there is no product in cart</div>

        return  products.map((product, index) => {

                return ( <Product
                product={product}
                key={index}
                onDelete={() => onRemove(product.id)}
                onIncrement={() => onIncrement(product.id)}
                onDecrement={() => onDecrement(product.id)}
                // quantity={this.props.quantity}
                />
                )
            });
        }  ;
        





    render() {
        console.log('productlist.js render')

        return (
            <div>
                {!this.props.products.length && (<div>there is no product in cart</div>) }
                    {this.renderProduct()}
            </div>
        );
    }
}

export default ProductList;