import './Product.css'

const Product = (props) => {
    return (
        <div className='product'>
            <p>product name : {props.name} course</p>
            <p>product price : {props.price}</p>

        </div>

    );
}

export default Product;