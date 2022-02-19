import styles from './Product.module.css'

const Product = (props) => {

    return (
        <div className={styles.product} onClick={props.click}>
            <p>product name : {props.product.name} course</p>
            <p>product price : {props.product.price}</p>
            <span className={styles.value}>{props.product.quantity}</span>
            <button className={`${styles.button} ${styles.inc}`} onClick={props.onIncrement}>increment</button>
            <button className={styles.button} onClick={props.onDelete} >delete</button>
        </div>

    );
}

export default Product;