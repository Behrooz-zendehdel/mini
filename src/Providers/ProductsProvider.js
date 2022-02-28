import React, { useReducer } from 'react';
import { useContext } from 'react';
import { productsData } from './db/products'

const ProcductContext = React.createContext();
const ProcductContextDispatcher = React.createContext();


const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'increment':
            const index = state.findIndex((item) => item.id === action.id);
            console.log(index)
            const product = { ...state[index] }
            product.quantity++
            const updateProduct = [...state];
            updateProduct[index] = product;
            return updateProduct
        case 'decrement':
            {
                const index = state.findIndex((item) => item.id === action.id);
                const product = { ...state[index] }
                if (product.quantity === 1) {
                    const filteredProducts = state.filter((p) => p.id !== action.id);
                    return filteredProducts;
                } else {
                    const updateProduct = [...state];
                    product.quantity--;

                    updateProduct[index] = product;

                    return updateProduct;
                }
            }


        case 'edit':
            {
                const index = state.findIndex((item) => item.id === action.id);
                const product = { ...state[index] }
                product.title = action.event.target.value;
                const updateProduct = [...state];
                updateProduct[index] = product;
                return updateProduct;
            }

        case 'remove':
            const filteredProduct = state.filter((p) => p.id !== action.id);

            return filteredProduct;
        case 'filter':
            {
                const value = action.selectedOption.value
                if (value === "") {
                    return productsData
                } else {

                    const updatedProducts = productsData.filter(
                        (p) => p.availablesSize.indexOf(value) >= 0
                    )

                    return updatedProducts;
                }
            }


        default:
            return state;
    }

}
const ProductsProvider = ({ children }) => {

    const [products, dispatch] = useReducer(reducer, productsData)


    return (
        <ProcductContext.Provider value={products}>
            <ProcductContextDispatcher.Provider value={dispatch}>
                {children}
            </ProcductContextDispatcher.Provider>
        </ProcductContext.Provider>
    );

}
export default ProductsProvider;

export const useProducts = () => useContext(ProcductContext);
export const useProductsActions = () => {
    return useContext(ProcductContextDispatcher);
}