import React, {  useEffect } from 'react';
import styles from './Product.module.css'

import { BiTrash } from "react-icons/bi";


const Product = ({ onDelete, onIncrement, onDecrement, onChange, product }) => {

    useEffect(() => {
        console.log("product.js useEffect")
    }, []);




    return (
        <div className={styles.product} >
            {/* onClick={click} */}

            <p>product name : {product.title} course</p>
            <p>product price : {product.price}</p>

            <span className={styles.value}>{product.quantity}</span>
            <input
                className={styles.input}
                type='text'
                onChange={onChange}
                value={product.title}
            />

            <button onClick={onDecrement} className={`${styles.button} ${product.quantity === 1 && styles.remove}`}>

                {product.quantity > 1 ? "-" : <BiTrash />}
            </button>
            <button
                onClick={onIncrement} className={`${styles.inc} ${styles.button}`} >
                +
            </button>

            <button onClick={onDelete} className={styles.button}  >
                delete
            </button>
        </div>

    );
}

export default Product;