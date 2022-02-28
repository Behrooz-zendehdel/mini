
import React from 'react';
import './App.css';
import Wrapper from './components/hoc/Wrapper';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import ProductsProvider from './Providers/ProductsProvider'
import Filter from './components/Filter/Filter';




const App = () => {



    return (
        <>
            <ProductsProvider>
                <Navbar />
                <Filter />
                <ProductList />
            </ProductsProvider>
        </>
    );
}

export default Wrapper(App, "container");






// class App extends Component {
//     constructor(props) {
//         super(props)
//         console.log('app.js constructor ');
//     }

//     state = {
//         products: [
//             { title: "react.js", price: "99$", id: 1, quantity: 1 },
//             { title: "node.js", price: "89$", id: 2, quantity: 2 },
//             { title: "javascript", price: "79$", id: 3, quantity: 3 },
//         ],


//     }

//     changeHandler = (e, id) => {
//         const index = products.findIndex((item) => item.id === id);
//         const product = { ...products[index] }
//         product.title = e.target.value;
//         const products = [...products];
//         products[index] = product;
//         setState({ products })
//     }

//     removeHandler = (id) => {
//         console.log('clicked', id)
//         const filteredProduct = products.filter((p) => p.id !== id);
//         setState({ products: filteredProduct })
//     }
//     incrementHandler = (id) => {
//         const index = products.findIndex((item) => item.id === id);
//         console.log(index)
//         const product = { ...products[index] }
//         product.quantity++
//         const products = [...products];
//         products[index] = product;
//         setState({ products })

//     }
//     decrementHandler = (id) => {
//         const index = products.findIndex((item) => item.id === id);
//         const product = { ...products[index] }
//         if (product.quantity === 1) {
//             const filteredProducts = products.filter((p) => p.id !== id);
//             setState({ products: filteredProducts })
//         } else {
//             const products = [...products];
//             product.quantity--;

//             products[index] = product;
//             setState({ products })
//         }




//     }



//     render() {
//         return (
//             <>
//               >

//                 {/* <Navbar totalItems={products.filter((p) => p.quantity > 0).length} />
//                 <ProductList products={products}
//                     onRemove={removeHandler}
//                     onIncrement={incrementHandler}
//                     onDecrement={decrementHandler}
//                 /> */}
//             </>
//         )
//     }
// };
// export default Wrapper(App, "container");
