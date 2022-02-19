import styles from './Product.module.css'
import { BiTrash, BiPlusCircle } from "react-icons/bi";

const Product = (props) => {

    return (
        <div className={styles.product} onClick={props.click}>
            <p>product name : {props.product.name} course</p>
            <p>product price : {props.product.price}</p>
            <span className={styles.value}>{props.product.quantity}</span>
            <input type='text' className={styles.button} onChange={props.onChange} />
            <button className={`${styles.button} ${styles.inc}`} onClick={props.onIncrement}><BiPlusCircle /></button>
            <button className={`${styles.button} ${styles.inc}`} onClick={props.onDecrement}>{props.product.quantity > 1 ? "-" : <BiTrash color='red' />}</button>

            <button className={styles.button} onClick={props.onDelete} >delete</button>
        </div>

    );
}

export default Product;