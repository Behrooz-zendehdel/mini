import React from 'react';
import { useProducts, useProductsActions } from '../../Providers/ProductsProvider';
import Product from '../Product/Product';



const ProductList = (props) => {
    const products = useProducts()
    const { removeHandler, incrementHandler, decrementHandler } =
       useProductsActions();

    const renderProduct = () => {
        if (products.length === 0) return <div>there is no product in cart</div>

        return products.map((product, index) => {

            return (
                <Product
                    product={product}
                    key={index}
                    onDelete={() => removeHandler(product.id)}
                    onIncrement={() => incrementHandler(product.id)}
                    onDecrement={() => decrementHandler(product.id)}
                // quantity={props.quantity}
                />
            )
        });
    };




    return (
        <div>
            {!products.length && (<div>there is no product in cart</div>)}
            {renderProduct()}
        </div>
    );
}

export default ProductList;


// class ProductList extends Component {
//     renderProduct = () => {
//         const { onRemove, onIncrement, onDecrement, products } = props;
//         if (props.products.length === 0)
//             return <div>there is no product in cart</div>

//         return products.map((product, index) => {

//             return (<Product
//                 product={product}
//                 key={index}
//                 onDelete={() => onRemove(product.id)}
//                 onIncrement={() => onIncrement(product.id)}
//                 onDecrement={() => onDecrement(product.id)}
//             // quantity={props.quantity}
//             />
//             )
//         });
//     };


//     render() {
//         console.log('productList.js render')

//         return (
//             <div>
//                 {!props.products.length && (<div>there is no product in cart</div>)}
//                 {renderProduct()}
//             </div>
//         );
//     }
// }

// export default ProductList;